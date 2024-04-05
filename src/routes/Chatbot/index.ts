import { Request, Response, Router } from "express";
import { messageResponse, questionRequest } from "./interfaces";
import ChatbotController from "./controller";
("./controller");

const router = Router();
const controller = new ChatbotController();

router.post(
  "/send-message",
  async (req: Request<{}, {}, questionRequest>, res: Response) => {
    try {
      const response = await controller.getGeminiReply(req.body);
      res.status(200).send(response);
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

export default router;
