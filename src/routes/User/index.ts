import { Router } from "express";
import ItenaryController from "./controller";

const router = Router();
const controller = new ItenaryController();

router.post("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const itenary = req.body;
    const response = await controller.saveItenary(userId, itenary);
    res.status(200).send(response);
  } catch (e) {
    res.send(400).send(e);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await controller.getUserItenaries(userId);
    res.status(200).send(response);
  } catch (e) {
    res.send(400).send(e);
  }
});

router.put("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const itenary = req.body;
    const response = await controller.updateItenary(userId, itenary);
    res.status(200).send(response);
  } catch (e) {
    res.send(400).send(e);
  }
});

router.delete("/:userId/:itenaryId", async (req, res) => {
  try {
    const { userId, itenaryId } = req.params;
    const response = await controller.deleteItenary(userId, itenaryId);
    res.status(200).send(response);
  } catch (e) {
    res.send(400).send(e);
  }
});

export default router;
