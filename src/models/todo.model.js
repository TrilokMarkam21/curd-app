import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    
},{})


export const Todo = mongoose.model('Todo', todoSchema);