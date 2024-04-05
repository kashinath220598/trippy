import { Post, Route, Body, Tags } from "tsoa";
import { LoginRequest, LoginResponse, RegisterRequest } from "./interfaces";
import JWTToken from "../../services/jwt/jwt";
import { FireStoreDb } from "../../services/firebase";
import { v4 as uuidv4 } from "uuid";

@Tags("Authentication")
@Route("auth")
export default class AuthController {
  @Post("/login")
  public async getToken(
    @Body() { password, userName }: LoginRequest
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      const fireStore = new FireStoreDb();
      fireStore
        .getUser(userName)
        .then((user) => {
          if (user.password !== btoa(password)) {
            throw new Error("Invalid password");
          }
          const jwt = new JWTToken();
          const token = jwt.generateToken(user);
          resolve({
            token,
          });
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  @Post("/register")
  public register(
    @Body() { firstName, lastName, username, password }: RegisterRequest
  ): Promise<any> {
    const fireStore = new FireStoreDb();
    return new Promise((resolve, reject) => {
      fireStore
        .setDocument("users", uuidv4(), {
          username,
          firstName,
          lastName,
          password: btoa(password),
        })
        .then((response) => resolve(response))
        .catch((e) => reject(e));
    });
  }
}
