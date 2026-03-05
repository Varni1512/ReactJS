import React from 'react'
import appwriteService from "../appwrite/config1"
import {Link} from "react-router-dom"

const PostCard = ({$id,title, featureimage}) => {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featureimage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
