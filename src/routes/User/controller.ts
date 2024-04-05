import { Post, Route, Body, Tags, Get, Path, Put, Delete } from "tsoa";
import { Itenary } from "../Itenary/interfaces";

@Tags("Users Itenary")
@Route("users")
export default class UsersController {
  @Get("/{userId}")
  public async getUserItenaries(
    @Path() userId: string
  ): Promise<Array<Itenary>> {
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

  @Post("/{userId}")
  public async saveItenary(
    @Path() userId: string,
    @Body() itenary: Itenary
  ): Promise<Itenary> {
    return new Promise((resolve, reject) => {
      resolve(itenary);
    });
  }

  @Put("/{userId}")
  public async updateItenary(
    @Path() userId: string,
    @Body() itenary: Itenary
  ): Promise<Itenary> {
    return new Promise((resolve, reject) => {
      resolve(itenary);
    });
  }

  @Delete("/{userId}/{itenaryId}")
  public async deleteItenary(
    @Path() userId: string,
    @Path() itenaryId: string
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}
