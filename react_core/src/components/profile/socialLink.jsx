import React from "react";


const SocialLinks = (props) => {
  return (
    <div className='Social-link'>
      <h3>Social Links</h3>
      <ul>
        <li>
          <a href={props.linkA}>{props.socialA}</a>
        </li>
        <li>
          <a href={props.linkB}>{props.socialB}</a>
        </li>
        <li>
          <a href={props.linkC}>{props.socialC}</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;