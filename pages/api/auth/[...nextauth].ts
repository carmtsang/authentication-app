import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://blog.logrocket.com/implementing-user-authorization-next-js/
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      /* @ts-ignore */
      scope: "read:user",
    }),
    TwitterProvider({
      // https://spacejelly.dev/posts/how-to-authenticate-next-js-apps-with-twitter-nextauth-js/
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        // Persist the OAuth access_token to the token right after signin
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});

// https://github.com/nextauthjs/next-auth/discussions/3133
