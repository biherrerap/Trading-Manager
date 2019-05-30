"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _database = require("./database");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _task = _interopRequireDefault(require("./routes/task.routes"));

var _meeting_point = _interopRequireDefault(require("./routes/meeting_point.routes"));

var _decks = _interopRequireDefault(require("./routes/decks.routes"));

var _cabins = _interopRequireDefault(require("./routes/cabins.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])(); //Setting

app.set('port', process.env.PORT || 4005); //connect to database
// const db = async  () => await connect();
// console.log(db) 
// app.locals.database = db;
// console.log(db) 
//Routes

//middlewares
app.use((0, _express.json)()); //const db = async () =>{await connect()}; 

app.use(_index["default"]);
app.use('/tasks', _task["default"]);
app.use('/meeting_points', _meeting_point["default"]);
app.use('/decks', _decks["default"]);
app.use('/cabins', _cabins["default"]);
var _default = app;
exports["default"] = _default;