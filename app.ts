import { ServerRequest, serve } from "https://deno.land/std/http/server.ts";

export { default as RouteListener } from "./route-listener.ts";

async function App(routeListeners: Array<Function>) {
  for await (const req of serve(":8000")) {
    routeListeners.forEach((fn) => fn(req));
  }
}

export default App;