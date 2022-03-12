/** @format */

import { useSession } from "next-auth/react";
import Image from "next/image";

const UserCard = () => {
	const { data: session } = useSession();

	return (
		<div className='p-6 rounded-3xl space-y-3 shadow-xl bg-rose-300'>
			<div className='flex items-center space-x-4'>
				<div className='h-24 w-24 relative rounded-full'>
					<Image
						src={
							session?.user?.image
								? session.user?.image
								: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
						}
						className='rounded-full'
						layout='fill'
						alt='user image'
						blurDataURL='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
					/>
				</div>

				<div className='items-center text-2xl'>
					<div className='font-bold uppercase text-2xl'>asdasd</div>
					<div className=''>{session?.user?.email}</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
