import React, { useState } from "react";
import AccordianList from "./AccordianList";

const acc = [
  {
    id: 1,
    title: "Accordion#1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Accordion#2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Accordion#3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Accordian = () => {
  const [open, setOpen] = useState(acc[0].id);
  return (
    <div>
      {acc.map((each) => {
        return (
          <AccordianList
            isOpen={each.id === open}
                setOpen={() => {
                    setOpen(each.id === open ? null : each.id)
                 }}
                key={each.id}
                id={each.id}
            title={each.title}
            desc={each.desc}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
