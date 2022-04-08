import { Router } from "express";
import { signup, login } from "../controller/auth";

export const auth = Router();
auth.post("/signup", signup);
auth.post("/login", login);

// export const loginRoute = Router();
