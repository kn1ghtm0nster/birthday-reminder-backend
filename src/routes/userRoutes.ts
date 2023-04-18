import express, { Request, Response } from "express";
import User from "../models/User";

const router = express.Router();

/**
 * GET => /users
 *
 * returns an array of user objects from backend server
 *
 * AUTHORIZATION: NONE
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers();
    return res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error, Please check the logs.");
  }
});

/**
 * POST => /users
 *
 * returns a new user object that was added to backend server
 *
 * AUTHORIZATION: NONE
 */
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

/**
 * PUT => /users/:id
 * 
 * accepts a request body that contains the following:
 * { id, firstName, lastName, dob }
 * 
 * NOTE: request body does NOT have to contain all the fields above.
 * 
 * returns an updated user object from the backend db.
 * 
 * If user not found by id provided, 404 error is returned via JSON response
 * 
 * AUTHORIZATION: NONE (for the time being)
 */
// router.put("/:id", async (req: Request, res: Response) => {
//   try {
//   } catch (err) {
//     console.error(err);
//     res
//       .status(404)
//       .send(`User not found. Please check your spelling and try again.`);
//   }
// });

/**
 * DELETE => /users/:id
 * 
 * returns a simple "delete" message with the id of the user that was deleted from the backend
 * 
 * If user not found by id provided, 404 error is returned via JSON response
 * 
 * AUTHORIZATION: NONE (for the time being)
 */
// router.delete('/:id', async (req: Request, res: Response) => {

// })

export { router as userRoutes };
