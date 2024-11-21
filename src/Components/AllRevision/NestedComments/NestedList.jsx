import React from 'react'

const NestedList = ({ comments }) => {
    return <div className='text-left'>{comments.map((comment,index) => {
        return (
            <div className='ml-5 p-2 m-2 border border-l-4 bg-green-100 rounded-lg border-gray-300' key={index}>
                <h1 className='text-lg font-semibold '>#😮{comment.user}</h1>
                <h2>{comment.comment}</h2>
                {comment.replies && <NestedList comments={comment.replies} />}
                </div>
      )
  })}</div>;
};

export default NestedList
