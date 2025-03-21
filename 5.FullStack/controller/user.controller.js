import User from "../model/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) =>
{
    // 1. get data (email, pass ,etc).
    const {name, email, password} = req.body;
    if(!name || !email || !password)
    {
        return res.status(400).json
        ({
            message: "All fields are required",
        });
        
    }
    console.log(email);

    // 2. validate
    // 3. check if user already exists
    // 4. create user in data base
    // zod library for validation
    //check if user is already exist or not
    //vo apn model->user.model.js me check krenge
    try
    {
        const existingUser = await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({
                message: "User already exists",
            })
        }

        const newUser = await User.create({
            name,
            email,
            password
        })
        console.log(newUser);

        //if we arwe not able to register user
        if(!newUser)
        {
            return res.status(400).json({
                message: "User not registered",
            })
        }
        
    // 5. create verification token 
    // 6. save token in database
    
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);
        newUser.verficationToken = token;
        await newUser.save();

        // 7. send token(otp) as email to user using Nodemailer library
        //using ndoe mailer librbry we are sending mail
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOption = 
        {
            rom:  process.env.MAILTRAP_SENDEREMAIL, // sender address
            to: User.email, // list of receivers
            subject: "Verify Your Email", // Subject line
            text: `please click on the following Link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // verification link
            
        };

        await transporter.sendMail(mailOption);

        // 8. send success status to user
        res.status(200).json({
            message: "user Register Successfully",
            success: true
        })
    }
    catch(error)
    {
        res.status(400).json({
            message: "User not registered",
            error, 
            success: true,
        });
    }
    
};
//Verify Email
const verifyUser = async (req, res) =>
{
    //1.get token from url
    //2.validate
    //3.find user based on token
    //4.if not case(mtlb user nh mila)
    //5.if mil gaye-> set verified field to true
    //5. remove verification token 
    //6.save
    //7.return reposense

    const {token} = req.params;
    console.log(token);
    if(!token)
    {
        return res.status(400).json({
            message:"Invalid Token",
        })
    }
    const user = await User.findOne({verficationToken: token});

    if(!user)
    {
        return res.status(400).json({
            message:"Invalid Token",
        })
    }

    user.isVerified = true;
    user.verficationToken = undefined;

    await user.save();
}

const login = async (req, res) =>
{
    const {email, password} = req.body;

    if(!email || !password)
    {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try
    {
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        console.log(isMatch);

        if(!isMatch)
        {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        //JWT
        jwt.sign({id: user._id, role: user.role},//payload
            
            //secret
            "shhhhh",
            {
                expiresIn: '24h'
            }
        
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000,
        }
        res.cookie("token", token, cookieOptions);
        
        res.status(200).json({
            message: "login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
            }
        })
    
    }
    catch(error)
    {

    }
}

export {registerUser, verifyUser, login};