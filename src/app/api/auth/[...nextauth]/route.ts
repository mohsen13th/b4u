import NextAuth, {
  AuthOptions,
  DefaultSession,
  DefaultUser,
  JWT,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    accessToken: string;
  }

  interface JWT {
    id: string;
    accessToken: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "ایمیل", type: "text" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials) {
        const formData = new FormData();
        formData.append("grant_type", "password");
        formData.append("username", credentials?.username || "");
        formData.append("password", credentials?.password || "");

        const res = await fetch("https://moviesapi.ir/oauth/token", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) return null;
        const data = await res.json();
        return {
          id: data.id,
          accessToken: data.token,
          name: data.name || null,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = typeof token.id === "string" ? token.id : "";
      session.user.accessToken =
        typeof token.accessToken === "string" ? token.accessToken : "";
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
