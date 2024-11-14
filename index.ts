import { Application, Router } from "@oak/oak";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Welcome to the Dinosaur API!";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.type = "json";
  ctx.response.body = { error: "404 - Not Found", message: "La ressource demandée est introuvable." };
});

await app.listen({ port: 8000 });
