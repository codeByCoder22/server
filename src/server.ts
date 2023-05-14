import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import * as boardsController from "./controllers/boards";
import * as usersController from "./controllers/users";
import bodyParser from "body-parser";
import authMiddleware from "./middlewares/auth";
import cors from "cors";
import { SocketEventsEnum } from "./types/socketEvents.enum";
import jwt from "jsonwebtoken";
import User from "./models/user";
import { Socket } from "./types/socket.interface";
import { secret } from "./config";
import * as columnsController from "./controllers/columns";
import * as tasksController from "./controllers/tasks";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        // origin: "http://localhost:3000",
        origin: "*",
        // methods: ["GET", "POST"],
    },
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("toJSON", {
    virtuals: true,
    transform: (_, converted) => {
        delete converted._id;
    },
});

app.get("/", (req, res) => {
    res.send("API is UP");
});

app.post("/api/users", usersController.register);
app.post("/api/users/login", usersController.login);
app.get("/api/user", authMiddleware, usersController.currentUser);
app.get("/api/boards", authMiddleware, boardsController.getBoards);
app.post("/api/boards", authMiddleware, boardsController.createBoard);
app.get("/api/boards/:id", authMiddleware, boardsController.getBoardById);
// WQ
app.get("/api/deleteAllTasks", authMiddleware, tasksController.deleteAllTasks);

app.get(
    "/api/boards/:boardId/columns",
    authMiddleware,
    columnsController.getColumns
);

app.get("/api/boards/:boardId/tasks", authMiddleware, tasksController.getTasks);

io.use(async (socket: Socket, next) => {
    try {
        const token = (socket.handshake.auth.token as string) ?? "";
        const data = jwt.verify(token.split(" ")[1], secret) as {
            id: string;
            email: string;
        };
        const user = await User.findById(data.id);

        if (!user) {
            return next(new Error("Authentication error"));
        }
        socket.user = user;
        next();
    } catch (err) {
        next(new Error("Authentication error"));
    }
}).on("connection", (socket) => {
    socket.on(SocketEventsEnum.boardsJoin, (data) => {
        console.log("boardsJoin-57", data);
        boardsController.joinBoard(io, socket, data);
    });
    socket.on(SocketEventsEnum.boardsLeave, (data) => {
        boardsController.leaveBoard(io, socket, data);
    });
    socket.on(SocketEventsEnum.columnsCreate, (data) => {
        columnsController.createColumn(io, socket, data);
    });
    socket.on(SocketEventsEnum.tasksCreate, (data) => {
        tasksController.createTask(io, socket, data);
    });
});

mongoose.connect("mongodb://127.0.0.1:27017/eltrello").then(() => {
    // mongoose.connect("mongodb://localhost:27017/eltrello").then(() => {
    console.log("connected to mongodb");
    httpServer.listen(4001, () => {
        console.log(`API is listening on port 4001`);
    });
});
