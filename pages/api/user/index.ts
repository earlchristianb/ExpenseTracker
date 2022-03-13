
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
  res: NextApiResponse<User|null>
) {
    try {
       
      const result:UserResult|null = await Prisma.user.findUnique(
        {
            where: {
                email:"earlchristianb@gmail.com"
            },
      
          
        }
        
    );
    res.status(200).json(result)
} catch (error) {
    res.status(500)
}
  
}
