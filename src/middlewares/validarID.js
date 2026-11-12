import mongoose from "mongoose";

export const validarID = (req, res, next)=>{
    const {id} = req.params;

    if (!mongoose.isValidObjectId(id)){
        return res.status(400).json({message: "El ID no es valido"});
    }
    next();
}