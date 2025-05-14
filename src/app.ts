import { SERVICE_UP } from "./constants/app-messages";
import env from "./env";
import factory from "./factory";
import userRoutes from "./routes/userRoutes";
import notFound from "./utils/not-found";
import onError from "./utils/on-error";
import { piLogger } from "./utils/pino-logger";
import { sendResponse } from "./utils/send-response";
const app = factory.createApp().basePath(env.API_VERSION);
app.use(piLogger());



// app.use(
//   '*',
//   cors({
//     origin: '*',
//     allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   })
// )


app.get("/", (c) => {
  return sendResponse(c, 200, SERVICE_UP);
});



//user routes..........
console.log("inside app");
app.route('/', userRoutes);





app.get("/error", (c) => {
  c.status(422);
  c.var.logger.debug("Test error only visible in development");
  throw new Error("Test error");
});

app.notFound(notFound);
app.onError(onError);

export default app;
