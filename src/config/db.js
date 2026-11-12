import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Conexion exitosa')
    }catch (error) {
        console.log('Error de conexion', error)
        process.exit(1)
    }
}