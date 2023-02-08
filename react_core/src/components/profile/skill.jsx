import React from "react";

const Skills = (props) => {
  return (
    <div className='Skills'>
      <h3>{props.heading}</h3>
      <ul>
        <li>{props.skillA}</li>
        <li>{props.skillB}</li>
        <li>{props.skillC}</li>
        <li>{props.skillD}</li>
      </ul>
    </div>
  );
};

export default Skills;
