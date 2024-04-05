import { Request, Response, Router } from "express";
import AuthController from "./controller";
import { LoginRequest, RegisterRequest } from "./interfaces";

const router = Router();

const controller = new AuthController();

router.post(
  "/login",
  async (req: Request<{}, {}, LoginRequest>, res: Response) => {
    try {
      const response = await controller.getToken(req.body);
      res.status(200).send(response);
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

router.post(
  "/register",
  async (req: Request<{}, {}, RegisterRequest>, res: Response) => {
    try {
      const response = await controller.register(req.body);
      res.status(200).send(response);
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

export default router;
