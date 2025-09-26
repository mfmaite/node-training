import { CorsOptions } from 'cors';
import { HelmetOptions } from 'helmet';

export const corsConfig: CorsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  optionsSuccessStatus: 200,
};

export const helmetConfig: HelmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'trusted-cdn.com'"],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: {
    policy: "cross-origin"
  },
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin"
  },
};

export const getSecurityConfig = () => {
  return {
    cors: corsConfig,
    helmet: helmetConfig,
  };
};
