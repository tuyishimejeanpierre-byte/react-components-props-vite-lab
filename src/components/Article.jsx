import React from "react";
function List({title, date, preview}){
    return (
       <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
    )
}




export default List;