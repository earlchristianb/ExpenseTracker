
import type { NextApiRequest, NextApiResponse } from 'next'

import Prisma from '../../../utils/prisma';
import {useSession} from 'next-auth/react'

type UserResult = {
    id: string;
    createdAt: Date;
    active: boolean;
    email: string;
    name: string | null;
    emailVerified: Date | null;
    image: string | null;
}


const handler=async(
  req: NextApiRequest,
  res: NextApiResponse
)=>{
    try {
        
        const { data: session } = useSession();
        
        if (session?.name) {
        const result = await Prisma.user.findUnique(
        {
            where: {
                email:"earlchristianb@gmail.com"
            },
      
          
        }
        
        );
            return res.status(200).json({ result, session })
        }
        else return res.status(400).send('Unauthorized')

      
} catch (error) {
    res.status(500)
}
  
}


export default handler;
