import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"

// Configurations

const __filename = fileURLToPathimport.meta.uirl;
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.subscribe(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:" cross-orgin"}));
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

// File Storage

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        abort(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage});


