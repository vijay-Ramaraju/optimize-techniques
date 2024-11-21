import React, { useState } from "react";
import AccordionList from "./AccordionList";

const data = [
  {
    heading: "Accordoin Heading#1",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Accordoin Heading#2",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    heading: "Accordoin Heading#3",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const AccordionRevision = () => {
  const [activeAcc, setActiveAcc] = useState(null)
  const handleAcc = (index) => {
    setActiveAcc(prev => prev === index ? null : index)
  }
  return (
    <div>
      {data.map((acc, index) => (
        <AccordionList key={index}
          isOpen={index === activeAcc}
          setActiveAcc= {()=>handleAcc(index)}
          title={acc.heading} comment={acc.comment} />
      ))}
    </div>
  );
};

export default AccordionRevision;
