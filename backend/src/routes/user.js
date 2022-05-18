import { Router } from "express";
import { signup, login } from "../controller/auth";
import { createApi } from "../controller/api";
import { getUser } from "../controller/user";
import { UpdateUser } from "../controller/user";

export const auth = Router();
auth.post("/signup", signup);
auth.post("/login", login);

export const apiUser = Router();
apiUser.get("/", getUser);
apiUser.patch("/update", UpdateUser);

export const apiRoute = Router();
apiRoute.post("/", createApi);

// export const loginRoute = Router();
