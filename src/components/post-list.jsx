import { useQuery, useMutation } from '@tanstack/react-query';
import React from 'react'
import { fetchPosts } from '../api/api';


const PostList = () => {

   const{
          data:postData,
          isError,
          error,
          isLoading
        }= useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

  return (

    <div className="container">
        

        {isLoading && <p>Loading...</p>}
        {isError && <p>{error?.message}</p>}

        {postData?.map((post)=>{
          return (
            <div key ={post.id} className='post'>
             <div> {post.title}</div>
             { post.tags.map((tag)=>(
             <span key={tag}>{tag}</span>
             ))}
          </div>
          );
        })}
    </div>
  )
}

export default PostList