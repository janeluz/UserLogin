import "express-async-errors";
import expres, { NextFunction, Request, Response } from 'express';
import { refreshTokenRoutes } from './routes/refreshToken.routes';
import { sessionRoutes } from './routes/login.routes';
import { usersRoutes } from './routes/users.routes';


import bodyParser = require('body-parser');
import express = require("express");


const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users",usersRoutes);
app.use("/login",sessionRoutes);
app.use("/refreshToken",refreshTokenRoutes);

app.use((error: Error, request: Request, response:Response, next: NextFunction) => {
  return response.json({
    status: "Error",
    message: error.message,
  });
}
);




app.listen(3131, () => console.log("server is running!"));