import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import { NextApiResponse,NextApiRequest } from 'next';
import { ProfilerProps } from 'react';
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: <string>process.env.GOOGLE_CLIENT_ID,
            clientSecret: <string>process.env.GOOGLE_ClIENT_SECRET,
           
        })
    ]
})