import React from 'react'

const page = ( {params} :{params:{id:string}}) => {
    const {id}=params;
  return (
    <div>ids {id}</div>
  )
}

export default page