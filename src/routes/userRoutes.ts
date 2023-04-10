import express, { Request, Response } from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers();
    return res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error, Please check the logs.");
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, dob } = req.body;

  try {
    const person = await User.addUser(firstName, lastName, dob);
    return res.status(201).json({ newUser: person });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error, Please check the logs.");
  }
});

export {router as userRoutes};