import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { NextApiResponse,NextApiRequest } from 'next';
import FacebookProvider from 'next-auth/providers/facebook'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {  PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()
export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, options);


const options={
    adapter:PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: <string>process.env.GITHUB_ID,
            clientSecret:<string> process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: <string> process.env.GOOGLE_CLIENT_ID,
            clientSecret:<string>  process.env.GOOGLE_CLIENT_SECRET
           
        }),
        FacebookProvider({
            clientId: <string>process.env.FACEBOOK_ID,
            clientSecret:<string>process.env.FACEBOOK_SECRET
        }),
        
        ],
        
    debug: process.env.NODE_ENV === "development",
    secret: process.env.NEXT_AUTH_SECRET,
    jwt: {
        secret:process.env.JWT_SECRET
    },
    
    
   
    

}
