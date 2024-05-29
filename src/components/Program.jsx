import React from 'react'
import './Program.css'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'

const Program = () => {
  return (
    <div className="program" id="program">
      <div className="program-header">
        <span className='stroke-text'>Explore out</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="program-catagories">
        {programsData.map((program, index) => (
          <div className='category' key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
              <span>Join-now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;