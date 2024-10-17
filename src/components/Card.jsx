import React from "react";

function Card({ record }) {

    
  return (
    <div className="card mt-2" key={record.id}>
      <div className="card-body">
        {record.id}
        <p>{record.name}</p>
        <p>{record.profession}</p>
      </div>
    </div>
  );
}

export default Card;
