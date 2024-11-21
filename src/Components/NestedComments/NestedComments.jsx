import CommentList from './CommentList';

const comments = [
  {
    user: "Vijay",
    comment: "Hey it is a good content",
    replies: [
      {
        user: "Ram",
        comment: "Innovative content",
        replies: [
          {
            user: "raghu",
            comment: "Yes, I agree Good Content",
            replies: [
              {
                user: "ram",
                comment: "Hey, have u see that ",
                replies: [
                  {
                    user: "raghu",
                    comment: "Yes, I have seen",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        user: "raju",
        comment: "Innovative content",
        replies: [
          {
            user: "hanuma",
            comment: "very informative",
            replies: [
              {
                user: "raghu",
                comment: "Yes, I agree Good Content",
                replies: [
                  {
                    user: "ram",
                    comment: "Hey, have u see that ",
                    replies: [
                      {
                        user: "raghu",
                        comment: "Yes, I have seen",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    user: "raghu",
    comment: "Yes, I agree Good Content",
    replies: [
      {
        user: "ram",
        comment: "Hey, have u see that ",
        replies: [
          {
            user: "raghu",
            comment: "Yes, I have seen",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    user: "raju",
    comment: "Innovative content",

    replies: [
      {
        user: "Ram",
        comment: "Innovative content",
        replies: [],
      },
      {
        user: "Vijay",
        comment: "Hey it is a good content",
        replies: [
          {
            user: "hanuma",
            comment: "very informative",
            replies: [],
          },
        ],
      },
    ],
  },
];

const NestedComments = () => {
  return (
    <div>
          <h1 className='font-bold text-2xl'>
         --- Nested Comments ---
          </h1>

        <CommentList comments={comments}  />

    </div>
  );
}

export default NestedComments
