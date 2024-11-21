import React, { useState } from 'react'
import AccoridonList from './AccoridonList';

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

const Accoridon = () => {
    const [initailOpen, setInitailOpen] = useState([])
  return (
    <div>
          {acc.map(eachAc => {
          return (
            <AccoridonList
              isOpen={eachAc.id === initailOpen}
                  setInitailOpen={setInitailOpen}
                  id={eachAc.id}
                  initailOpen={initailOpen}
              title={eachAc.title}
              key={eachAc.id}
              desc={eachAc.desc}
            />
          );
      })}
    </div>
  )
}

export default Accoridon
