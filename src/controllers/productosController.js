import Producto from '../models/producto.js';

export const crearProducto = async (req, res) => {
    try{
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

export const listarProductos = async(req, res) => {
    try{
        const productos = await Producto.find();
        res.json(productos);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const obtenerProducto = async(req, res) =>{
    try{
        const producto = await Producto.findById(req.params.id);
        if(!producto){
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json(producto);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const actualizarProducto = async(req, res)=>{
    try{
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true});
        if(!producto){
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json(producto);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

export const eliminarProducto = async(req, res)=>{
    try{
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto){
            return res.status(404).json({message: "Producto no encontrado"});
        }
        res.json({message: "Producto eliminado correctamente"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
};