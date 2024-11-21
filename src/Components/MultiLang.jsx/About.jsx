import React, { useContext } from 'react'
import { language } from "./Contains";
import UseLangChange from './UseLangChange'

const About = () => {
    const { lang} = useContext(UseLangChange);
    const data = language[lang];
  return (
    <div className='text-left'>
          <h1>{data.title}</h1>
          <p>{ data.desc}</p>
          <h1>{data.title2}</h1>
          <p>{ data.desc2}</p>
          <h1>{data.title3}</h1>
    </div>
  )
}

export default About
