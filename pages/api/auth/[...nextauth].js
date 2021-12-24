import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        

      clientId: "180629223247-3mo8ouf6hlhrdhapdplsic9ue9oqarmv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  pages:{
      signIn:"/auth/signin",
  },
  callbacks:{
    async session({session,token,user}){
      session.user.username = session.user.name
      .split(" ")
      .join("").
      toLocaleLowerCase();

      session.user.uid= token.sub;
      return session;
    }
  }
})