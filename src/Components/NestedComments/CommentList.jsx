import { useState } from "react";
const CommentList = ({ comments }) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div
            onClick={() => {}}
            className=" hover:bg-blue-200 bg-green-100 m-2 ml-5 border-l-4 border border-red-200 text-left p-2"
            key={index}
          >
            <h1 className="text-xl font-semibold bg-gray-200 px-2">
              {" "}  
              User: #<span className="text uppercase">{comment.user}</span>
            </h1>
            <h2 className="text-lg px-2">{comment.comment}</h2>
            {comment.replies.length > 0 && (
              <CommentList comments={comment.replies} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
