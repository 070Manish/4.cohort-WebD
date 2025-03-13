import mongoose from "mongoose"

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

const user = mongoose.model("user", userSchema);

export default user;