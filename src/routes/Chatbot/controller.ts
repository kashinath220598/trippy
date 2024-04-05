import { Post, Route, Body, Tags } from "tsoa";
import { questionRequest, messageResponse } from "./interfaces";
require("dotenv").config();

@Tags("Chatbot")
@Route("chatbot")
export default class ChatbotController {
  @Post("/send-message")
  public async getGeminiReply(
    @Body() { question }: questionRequest
  ): Promise<messageResponse> {
    return new Promise((resolve, reject) => {
      resolve({
        reply: "",
      });
    });
  }
}
