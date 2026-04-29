import React from "react";

function About({image="https://placehold.co/215", about}){
    return (
        <aside>
<img src={image} alt="blog logo" />
      <p>{about}</p>
        </aside>
    )
}




export default About;