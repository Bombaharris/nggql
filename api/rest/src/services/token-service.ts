import * as jose from 'jose';
import type { JWTPayload } from 'jose';

export interface TokenServiceOptions {
  algorithm: string;
}

export class TokenService<Payload extends JWTPayload> {
  private readonly secret: Uint8Array;

  constructor(
    secret: string,
    private options: TokenServiceOptions,
  ) {
    this.secret = new TextEncoder().encode(secret);
  }

  async sign(payload?: Payload) {
    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: this.options.algorithm })
      // .setExpirationTime(this.#options.expirationTime)
      .sign(this.secret);
  }

  async validate(jwt: string) {
    try {
      await jose.jwtVerify(jwt, this.secret);
      return true;
    } catch (_) {
      return false;
    }
  }

  async getPayload(jwt: string) {
    try {
      return (await jose.jwtVerify<Payload>(jwt, this.secret)).payload;
    } catch (_) {
      return null;
    }
  }
}
