import React, { useState } from "react";

export default function AddModal() {
  const [show, setshow] = useState(false);
  return (
    <>
    <button className="btn-prim" onClick={()=>setshow (true)} > AddMovie </button>
    show && (
      <div className="Modal-bg">
        <div className="Modal">
          <input type="text" placeholder="title" />
          <input type="text" placeholder="description" />
          <input type="text" placeholder="duration" />
          <input type="text" placeholder="rating" />
          <input type="text" placeholder="posterURL" />
          <input type="text" placeholder="releaseDate" />
          <button className="btn-prim">click to Add</button>
          <button onClick={()=>setshow(false)}>close</button>
        </div>
      </div>
    )
    </>

  );
}
