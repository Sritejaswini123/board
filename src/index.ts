import { serve } from "@hono/node-server";
import app from "./app";
import env from "./env";

const port = env.PORT;


serve({
  fetch: app.fetch,  
  port,
});
console.log(` Server running at http://localhost:${port}/${env.API_VERSION}/`);


//http://192.168.1.41:3000/api/users?limit=5&offset=0
