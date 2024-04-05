import { Router } from "express";
import ItenaryController from "./controller";

const router = Router();
const controller = new ItenaryController();

router.post("/ask", async (req, res) => {
  try {
    const response = await controller.getItenaries(req.body);
    res.status(200).send(response);
  } catch (e) {
    res.send(400).send(e);
  }
});

router.get("/:itenaryId", async (req, res) => {
  try {
    const { itenaryId } = req.params;
    const response = await controller.getItenary(itenaryId);
    res.status(200).send(response);
  } catch (e) {
    res.send(400).send(e);
  }
});

export default router;
