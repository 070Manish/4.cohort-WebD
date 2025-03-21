import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        role:
        {
            type: String,
            enum: ["user", "admin"],
            defaul: "user"
        },
        isVerified:
        {
            type: Boolean,
            default: false
        },
        verficationToken:
        {
            type: String,
        },
        resetPasswordToken:
        {
            type: String,  
        },
        resetPasswordExpires:
        {
            type: Date,
        },

    },
    {
        timestamps: true
        //ye do field add kr deta uppr wale schema me
        //1.createdAt
        //2.updatedAt
    }
);

userSchema.pre("save", async function(next){
    
    if(this.isModified("password"))
    {
        this.password = await bcyrpt.hash(this.password, 10);
    }
    next();
})

const user = mongoose.model("user", userSchema);

export default user;