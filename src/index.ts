import express, { Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import AuthRouter from "./routes/Auth";
import ItenaryRoute from "./routes/Itenary";
import UsersRoute from "./routes/User";
import chatbotRoute from "./routes/Chatbot"
import swaggerUi from "swagger-ui-express";
import { initializeApp } from "firebase/app";
import bodyParser from "body-parser";

dotenv.config();

const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MESUREMENT_ID,
} = process.env;

initializeApp({
  apiKey: API_KEY,
  appId: APP_ID,
  authDomain: AUTH_DOMAIN,
  measurementId: MESUREMENT_ID,
  messagingSenderId: MESSAGING_SENDER_ID,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
});

const app: Application = express();
const port = process.env.PORT || 5000;
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", AuthRouter);
app.use("/itenary", ItenaryRoute);
app.use("/users", UsersRoute);
app.use("/chatbot", chatbotRoute);

app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
