"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// main set up page for Express.
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// create an instance of the Express application
const app = (0, express_1.default)();
// enable CORS
app.use((0, cors_1.default)());
// parse incoming JSON requests
app.use(body_parser_1.default.json());
// log requests to the console
app.use((0, morgan_1.default)('tiny'));
