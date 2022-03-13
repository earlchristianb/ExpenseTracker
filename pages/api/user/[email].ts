
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

import Prisma from '../../../utils/prisma';



type UserResult = {
    id: string;
    createdAt: Date;
    active: boolean;
    email: string;
    name: string | null;
    emailVerified: Date | null;
    image: string | null;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const email = <string> req.query.email;
    try {

        
            const result: UserResult | null = await Prisma.user.findUnique(
                {
                    where: {
                        email: email
                    },
      
          
                }
        
            );
            if (result) {
                res.status(200).json({ result })
            } else res.status(500).send('User not found');

        
     
     
} catch (error) {
    res.status(500)
}
  
}
