"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _mongoose=require("mongoose"),notesSchema=new _mongoose.Schema({title:{type:String,required:!0},body:{type:String,required:!0},date:{type:Number,required:!0}}),_default=(0,_mongoose.model)("Notes",notesSchema);exports["default"]=_default;
//# sourceMappingURL=notes.js.map