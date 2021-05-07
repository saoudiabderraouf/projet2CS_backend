import { Router, Request, Response } from "express";
import { User } from "../entity/Authentication";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class UserController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public signup = async (_req: Request, res: Response) => {
    try {
      const user = await User.create({
        email: _req.body.email,
        password: _req.body.password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({
            token,
            user,
          });
        }
      );
    } catch (err) {
      console.log(err);
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  };

  public index = async (_: Request, res: Response) => {
    const users = await User.find();
    res.json(users);
  };

  public update = async (_: Request, res: Response) => {
    res.send("Update");
  };

  public delete = async (_: Request, res: Response) => {
    res.send("Delete");
  };

  public routes() {
    this.router.get("/", this.index);
    this.router.post("/signup", this.signup);
    this.router.put("/:id", this.update);
    this.router.delete("/:id", this.delete);
  }
}
