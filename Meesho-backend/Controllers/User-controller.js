import bcrypt from "bcrypt"
import  jwt from "jsonwebtoken";
import Usermodel from './../Model/User-model.js';



export const register= async (req,res) =>{
    
    try{
        const {userData}=req.body
        const {name, email, password,role,number}= userData;
        console.log(userData);
        if (!name || !email || !password || !role || !number) return res.status(404).json({success:false ,message:"All fields are mandatory.."})

        const ifEmailExist = await Usermodel.find({email})
        if (ifEmailExist?.length){
            return res.status(404).json({success:false ,message:"Email already exists try a different email..."})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = new Usermodel({name , email , password: hashedPassword, role,number});

        await user.save();

        return res.status(200).json({success:true,message:"User Registered Succefully...",user})



    }catch(error){
        return res.status(500).json({success: false,message: error})
    }
}

export const login = async(req,res)=>{
    try{
         const {userData}=req.body
        const{email, password}= userData;
        
        if (!email || !password) return res.json({success:false ,message:"All fields are mandatory.."})
        
        const user = await Usermodel.findOne({email})
        if (!user) return res.json({success:false ,message:"User not found"})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect){
            const userCreds = {
                name: user.name,
                email: user.email,
                _id : user._id,
                role: user.role
            }
            const token = jwt.sign({ userID: user._id}, process.env.JWT_SECRET)

            return res.json({success:true ,message:"Login Successfull",user: userCreds,token:token})

        }
        return res.json({success:false ,message:"Password is incorrect"})

    }catch(error){
        return res.status(500).json({success:false ,message:error})
    }
}

export const getCurrentUser =async (req,res) =>{
    try{
        const {token} = req.body;
        if(!token) return res.status(404).json({success:false,message:"Token is reqired"})

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)
         
        if(!decodedData){
            return res.status(404).json({success:false,message:"Not a valid json token"})
        }
        // return res.send(decodedData)

        const userId =decodedData?.userID

        const user = await Usermodel.findById(userId);

        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        const userObject = {
            name : user?.name,
            email : user?.email,
            _id: user?._id,
            role: user.role
        }

        return res.status(200).json({success:true,user : userObject})

    }catch(error){
        return res.status(500).json({success:false, message:error})
    }
}

export const getNumber =async (req, res) =>{
    try{
        const {userId}=req.body
        if (!userId) return res.json({success:false ,message:"User Id is mandatory.."})

        const userNumber = await Usermodel.findById(userId).select("number isNumberVerified")
        if(userNumber){
          
            return res.json({success:true,number:userNumber.number ,isNumberVerified:userNumber.isNumberVerified})
              
        }

        return res.send({success: false,message:"Internal error try again"})

    }catch(error){
        return res.send({success: false,message: error})
    }

}

export const sendOtp = async (req,res) =>{
    try{
        const {userId}=req.body
        if (!userId) return res.json({success:false ,message:"User Id is mandatory.."})

        const userNumber = await Usermodel.findById(userId)

        const otp = "213632"
        const message= `Hello your verification code is- ${otp}`
        if(userNumber){

            const responseFromTwilio = sendTwilioMessage(userNumber.number,message )
             if(responseFromTwilio){
                 userNumber.otpForNumberVerification = otp;
                 await userNumber.save()
                 return res.json({success:true,message:"Otp sent to registered number"})
             }
              
        }

        return res.send({success: false,message:"User not found"})

    }catch(error){
        return res.send({success: false,message: error})
    }
}

export const verifyOtp = async(req,res)=>{
    try{
        const {otp, userId} =req.body;
        if(!otp || !userId){
            return res.status(404).json({success: false, message:"OTP & USERID required."})
        }

        const user = await Usermodel.findById(userId);

        if(user){
            if(user.otpForNumberVerification == otp){
                user.isNumberVerified = true;

                await user.save();
                return res.status(200).json({success:true,message:"Number verified",isNumberVerified:user.isNumberVerified});
            }
        }
        return res.status(404).json({success:false,message:"User not found"});
    }catch(error){
        return res.status(500).json({success:false,error:"error from catch block"});
    }
};