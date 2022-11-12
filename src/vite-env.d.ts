/// <reference types="vite/client" />


declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT?: number;
      DB_USER?: string;
      URL_DB:string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
export {};