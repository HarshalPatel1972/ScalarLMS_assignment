import arcjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
} from "@arcjet/next";
import { env } from "./env";

export {
  detectBot,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
};

export default arcjet({
  key: env.ARCJET_KEY,
  //if i don't use char... then arcjet will track the ip address to validate, and ip is easily spoofable, anf if we use it then it validates from user id
  characteristics: ["fingerprint"],
  //define base rule shere, can also be empty if you don't want to have any base rules
  rules: [
    shield({
      mode: "LIVE",
    }),
  ],
});
