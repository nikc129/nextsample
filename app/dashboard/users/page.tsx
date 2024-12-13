import React from 'react'
import Link from "next/link"
export const page = () => {
  return (
    <>
        <li className='mt-10'   > <Link href="/dashboard/users/1">user1 </Link>  </li>
        <li className='mt-10'   > <Link href="/dashboard/users/2">user2</Link>  </li>
        <li className='mt-10'   > <Link href="/dashboard/users/3">user3</Link>  </li>
        <li className='mt-10'   > <Link href="/dashboard/users/4">user4</Link>  </li>

    
      </>
  )
}
