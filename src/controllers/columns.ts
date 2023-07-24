import { NextFunction, Response } from "express";
import { ExpressRequestInterface } from "../types/expressRequest.interface";
import ColumnModel from "../models/column";
import { SocketEventsEnum } from "../types/socketEvents.enum";
import { getErrorMessage } from "../helpers";
import { Socket } from "../types/socket.interface";
import { Server } from "socket.io";
// WQ
import TaskModel from "../models/task";

export const getColumns = async (
    req: ExpressRequestInterface,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            return res.sendStatus(401);
        }
        const columns = await ColumnModel.find({ boardId: req.params.boardId });
        res.send(columns);
    } catch (err) {
        next(err);
    }
};

export const createColumn = async (
    io: Server,
    socket: Socket,
    data: { boardId: string; title: string }
) => {
    try {
        if (!socket.user) {
            socket.emit(
                SocketEventsEnum.columnsCreateFailure,
                "User is not authorized"
            );
            return;
        }
        const newColumn = new ColumnModel({
            title: data.title,
            boardId: data.boardId,
            userId: socket.user.id,
        });
        const savedColumn = await newColumn.save();
        io.to(data.boardId).emit(
            SocketEventsEnum.columnsCreateSuccess,
            savedColumn
        );
        console.log("savedColumn", savedColumn);
    } catch (err) {
        socket.emit(
            SocketEventsEnum.columnsCreateFailure,
            getErrorMessage(err)
        );
    }
};

export const deleteColumn = async (
    io: Server,
    socket: Socket,
    data: { boardId: string; columnId: string }
) => {
    try {
        if (!socket.user) {
            socket.emit(
                SocketEventsEnum.columnsDeleteFailure,
                "User is not authorized"
            );
            return;
        }
        await ColumnModel.deleteOne({ _id: data.columnId });

        io.to(data.boardId).emit(
            SocketEventsEnum.columnsDeleteSuccess,
            data.columnId,
        );
    } catch (err) {
        socket.emit(
            SocketEventsEnum.columnsDeleteFailure,
            getErrorMessage(err)
        );
    }
};

export const updateColumn = async (
    io: Server,
    socket: Socket,
    data: { boardId: string; columnId: string; fields: { title: string } }
) => {
    try {
        if (!socket.user) {
            socket.emit(
                SocketEventsEnum.columnsUpdateFailure,
                "User is not authorized"
            );
            return;
        }
        const updatedColumn = await ColumnModel.findByIdAndUpdate(
            data.columnId,
            data.fields,
            { new: true }
        );
        io.to(data.boardId).emit(
            SocketEventsEnum.columnsUpdateSuccess,
            updatedColumn
        );
    } catch (err) {
        socket.emit(
            SocketEventsEnum.columnsUpdateFailure,
            getErrorMessage(err)
        );
    }
};

// WQ
export const deleteAllColunms = async (
    req: ExpressRequestInterface,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            return res.sendStatus(401);
        }
        console.log("UserId: ", req.user.id);
        const anyTask = await TaskModel.find({});
        if (anyTask.length > 0) {
            return res.send(
                "There are still tasks in the database. Please delete them first."
            );
        }
        const returnMessage = await ColumnModel.deleteMany();
        res.send(returnMessage);
    } catch (err) {
        next(err);
    }
};
