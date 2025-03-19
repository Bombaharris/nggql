import type { JWTPayload } from 'jose';

export interface TokenPayload extends JWTPayload {
  roles: string[];
}
