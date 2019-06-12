
import App, { RouteListener } from "./app.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";


const Home = RouteListener("/", (request: ServerRequest) => {
  const body = new TextEncoder().encode("<html><h1>Home</h1></html>");
  request.respond({ body });
});

const Profile = RouteListener("/profile", (request: ServerRequest) => {
  const body = new TextEncoder().encode("<html><h1>Profile</h1></html>");
  request.respond({ body });
});

App([Home, Profile]);