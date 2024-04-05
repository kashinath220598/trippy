import { Post, Route, Body, Tags, Get, Path, Put, Delete } from "tsoa";
import { AskRequest, Itenary } from "./interfaces";

@Tags("Itenary")
@Route("itenary")
export default class ItenaryController {
  @Post("/ask")
  public async getItenaries(@Body() {}: AskRequest): Promise<Array<Itenary>> {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: "",
          description: "",
          food: [],
          imageUrl: "",
          stay: [],
          title: "",
          visit: [],
        },
      ]);
    });
  }

  @Get("/{itenaryId}")
  public async getItenary(@Path() itenaryId: string): Promise<Itenary> {
    return new Promise((resolve, reject) => {
      resolve({
        id: "",
        description: "",
        food: [],
        imageUrl: "",
        stay: [],
        title: "",
        visit: [],
      });
    });
  }
}
