"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _express=_interopRequireDefault(require("express")),_cors=_interopRequireDefault(require("cors")),_DB=require("./db/DB"),_notes=_interopRequireDefault(require("./routes/notes"));class Server{constructor(){this.PORT=process.env.PORT,this.app=(0,_express["default"])(),this.connectedDB(),this.middleware(),this.paths={notes:"/api/notes"},this.routers()}middleware(){this.app.use((0,_cors["default"])()),this.app.use(_express["default"].json()),this.app.use(_express["default"]["static"]("public"))}connectedDB(){(0,_DB.connectionsDataBase)().then(()=>console.log("connected"))["catch"](()=>console.error("Verific your information"))}routers(){this.app.use(this.paths.notes,_notes["default"])}listen(){this.app.listen(this.PORT,a=>{if(a)throw new Error("Server OFFLINE");console.log("Server running on port "+this.PORT)})}}var _default=Server;exports["default"]=_default;
//# sourceMappingURL=Server.js.map