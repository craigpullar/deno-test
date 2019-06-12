import { ServerRequest } from "https://deno.land/std/http/server.ts";

const methodMap = {
  POST: "POST",
  GET: "GET",
};

const routeListener = (method: string) => (listenUrl: string, handleFunction: Function) => {
  return (passedRequest: ServerRequest) => {
    if(listenUrl === passedRequest.url && method === passedRequest.method) {
      handleFunction(passedRequest);
    }
  }
};

export default {
  GET: routeListener(methodMap.GET),
  POST: routeListener(methodMap.POST),
}
