import * as jose from "jose";
import dotenv from "dotenv";

dotenv.config();

export default class Token {
  #secret;
  #options;

  constructor(secret, options) {
    this.#secret = new TextEncoder().encode(secret);
    this.#options = options;
  }

  async sign(payload = {}) {
    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: this.#options.algorithm })
      // .setExpirationTime(this.#options.expirationTime)
      .sign(this.#secret);
  }

  async validate(jwt) {
    try {
      await jose.jwtVerify(jwt, this.#secret);
      return true;
    } catch (_) {
      return false;
    }
  }

  async getPayload(jwt) {
    try {
      return (await jose.jwtVerify(jwt, this.#secret)).payload;
    } catch (_) {
      return null;
    }
  }
}
