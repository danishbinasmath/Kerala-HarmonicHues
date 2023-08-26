import express from 'express';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
// import Connection from './database/db.js';
import multer from 'multer';
import dotenv from 'dotenv';
import mongoose, { Mongoose } from 'mongoose';
import helmet from 'helmet';
import morgan  from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/route.js";
import postRoutes from "./routes/post.js";
import { register } from "./controller/auth.js";
import { createPost } from "./controller/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/Post.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js"

/* CONFIGURATION */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin" }));
app.use(morgan("common")); 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));



/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);


/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch( (error) => console.log(`MongoDB connection error: ${error.message}`));









/*
    
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({extended: true}));
    app.use(bodyParser.urlencoded({extended: true})); 

    app.use('/', Routes);

    const PORT = 8000;

    Connection();

    app.listen(PORT, () => console.log(`The server is running successfully on port ${PORT}`)); 

*/