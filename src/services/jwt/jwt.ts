import jwt from "jsonwebtoken";
import { User } from "./interfaces";

export default class JWTToken {
  jwtSecretKey: string;

  constructor() {
    this.jwtSecretKey = process.env.JWT_SECRET_KEY || "";
  }

  generateToken(user: User) {
    const token: string = jwt.sign(user, this.jwtSecretKey, {
      expiresIn: "2 days",
    });
    return token;
  }

  verifyToken(token: string) {
    return jwt.verify(token, this.jwtSecretKey);
  }
}
