import cors, { CorsOptionsDelegate, CorsOptions } from "cors";

const whiteList = ["http://127.0.0.1:10000"];

const corsOptions: CorsOptions = {
  origin: (origin) => !!whiteList.find((url) => url.includes(String(origin))),
};

const corsHandler = cors(corsOptions);

export default corsHandler;
