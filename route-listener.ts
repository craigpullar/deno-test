import { ServerRequest } from "https://deno.land/std/http/server.ts";

const routeListener = (listenUrl: string, handleFunction: Function) => {
  return (passedRequest: ServerRequest) => {
    if(listenUrl === passedRequest.url) {
      handleFunction(passedRequest);
    }
  }
};

export default routeListener;