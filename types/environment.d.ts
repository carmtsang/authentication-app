declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      TWITTER_ID: string;
      TWITTER_SECRET: string;
      FACEBOOK_ID: string;
      FACEBOOK_SECRET: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
    }
  }
}

export {};

// https://stackoverflow.com/questions/45194598/using-process-env-in-typescript
