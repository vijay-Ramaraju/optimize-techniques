import { comment } from "postcss";
import React from "react";
import NestedList from "./NestedList";

const commentsData = [
  {
    user: "Ram",
    comment: "Hey this is very useful info",
    replies: [
      {
        user: "Vijay",
        comment: "I agree with ur comments",
        replies: [
          {
            user: "Ram",
            comment: "Thanks",
            replies: [
              {
                user: "Vijay",
                comment: "Your Welcome",
                replies: [],
              },
              {
                user: "Raju",
                comment: "I to agree",
                replies: [],
              },
            ],
          },
          {
            user: "Raju",
            comment: "Can u give me brief explanation",
            replies: [
              {
                user: "Remo",
                comment:
                  "Yeah sure u will get brief explanation in the next video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    user: "Ram",
    comment: "Thanks",
    replies: [
      {
        user: "Vijay",
        comment: "Your Welcome",
        replies: [
          {
            user: "Ram",
            comment: "Hey this is very useful info",
            replies: [
              {
                user: "Vijay",
                comment: "I agree with ur comments",
                replies: [
                  {
                    user: "Ram",
                    comment: "Thanks",
                    replies: [
                      {
                        user: "Vijay",
                        comment: "Your Welcome",
                        replies: [],
                      },
                      {
                        user: "Raju",
                        comment: "I to agree",
                        replies: [],
                      },
                    ],
                  },
                  {
                    user: "Raju",
                    comment: "Can u give me brief explanation",
                    replies: [
                      {
                        user: "Remo",
                        comment:
                          "Yeah sure u will get brief explanation in the next video",
                        replies: [
                          {
                            user: "Ram",
                            comment: "Hey this is very useful info",
                            replies: [
                              {
                                user: "Vijay",
                                comment: "I agree with ur comments",
                                replies: [
                                  {
                                    user: "Ram",
                                    comment: "Thanks",
                                    replies: [
                                      {
                                        user: "Vijay",
                                        comment: "Your Welcome",
                                        replies: [],
                                      },
                                      {
                                        user: "Raju",
                                        comment: "I to agree",
                                        replies: [],
                                      },
                                    ],
                                  },
                                  {
                                    user: "Raju",
                                    comment: "Can u give me brief explanation",
                                    replies: [
                                      {
                                        user: "Remo",
                                        comment:
                                          "Yeah sure u will get brief explanation in the next video",
                                        replies: [
                                          {
                                            user: "Ram",
                                            comment:
                                              "Hey this is very useful info",
                                            replies: [
                                              {
                                                user: "Vijay",
                                                comment:
                                                  "I agree with ur comments",
                                                replies: [
                                                  {
                                                    user: "Ram",
                                                    comment: "Thanks",
                                                    replies: [
                                                      {
                                                        user: "Vijay",
                                                        comment: "Your Welcome",
                                                        replies: [],
                                                      },
                                                      {
                                                        user: "Raju",
                                                        comment: "I to agree",
                                                        replies: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    user: "Raju",
                                                    comment:
                                                      "Can u give me brief explanation",
                                                    replies: [
                                                      {
                                                        user: "Remo",
                                                        comment:
                                                          "Yeah sure u will get brief explanation in the next video",
                                                        replies: [
                                                          {
                                                            user: "Ram",
                                                            comment:
                                                              "Hey this is very useful info",
                                                            replies: [
                                                              {
                                                                user: "Vijay",
                                                                comment:
                                                                  "I agree with ur comments",
                                                                replies: [
                                                                  {
                                                                    user: "Ram",
                                                                    comment:
                                                                      "Thanks",
                                                                    replies: [
                                                                      {
                                                                        user: "Vijay",
                                                                        comment:
                                                                          "Your Welcome",
                                                                        replies:
                                                                          [],
                                                                      },
                                                                      {
                                                                        user: "Raju",
                                                                        comment:
                                                                          "I to agree",
                                                                        replies:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    user: "Raju",
                                                                    comment:
                                                                      "Can u give me brief explanation",
                                                                    replies: [
                                                                      {
                                                                        user: "Remo",
                                                                        comment:
                                                                          "Yeah sure u will get brief explanation in the next video",
                                                                        replies:
                                                                          [],
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
        ],
      },
      {
        user: "Raju",
        comment: "I to agree",
        replies: [],
      },
    ],
  },
  {
    user: "Ravi",
    comment: "Hey, Ram How are u",
    replies: [
      {
        user: "Ram",
        comment: "I'm good, Thankyou and  How about u",
        replies: [
          {
            user: "Ravi",
            comment: "I'm Good Thanks for asking",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    user: "Rajan",
    comment: "Hello All, Hope all are doing well",
    replies: [],
  },
];

const NestedComments = () => {
  return <div>
    
      <NestedList comments={commentsData} />
    
  </div>
};

export default NestedComments;
