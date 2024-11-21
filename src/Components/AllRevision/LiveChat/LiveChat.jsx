import React, { useEffect, useState } from "react";
import { randomFunction, user } from "../../utils/RandomUsers";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../RTK/ChatSlice";
import { comment } from "postcss";

const LiveChat = () => {
  const [self, setSlef] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);

  // console.log(message);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addItem({
          name: user(),
          comment: randomFunction(),
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMessage = () => {
    dispatch(
      addItem({
        name: "Vijay",
        comment:self,
      })
    );
  };

  return (
    <div className="border border-gray-300 overflow-y-auto w-96 h-96 p-3 rounded-md flex flex-col justify-between">
      <div className=" flex flex-col-reverse h-5/6 p-4">
        {message.map((mes, index) => {
          return (
            <div
              key={index}
              className=" mb-1 rounded border-b-2 flex flex-col gap-4 justify-start text-left"
            >
              <h1 className="m-0 p-0 text-md">user:{mes.name}</h1>
              <p className="m-0 p-0 text-sm">Comment : {mes.comment}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between p-2 gap-2">
        <input
          onChange={(e) => setSlef(e.target.value)}
          type="text"
          className="outline-none w-full  p-2 border border-gray-200"
        />
        <button
          onClick={handleMessage}
          className="border border-gray-200 rounded-md px-2 bg-green-100"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
