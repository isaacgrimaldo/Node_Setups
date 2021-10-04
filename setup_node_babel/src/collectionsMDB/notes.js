import {  Schema , model } from 'mongoose';

const notesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    } 
});

export default model('Notes', notesSchema );