import React from 'react';
import FiltersBTN from './FiltersBTN';

const Status = ({setstatus, setPageNumber }) => {
  let status= ["Alive" , "Dead", "Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accosssrdion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
       Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex  flex-wrap gap-2 " >
         {status.map((items, index) => (
         <FiltersBTN 
         task={setstatus}
         setPageNumber={setPageNumber}
         key ={index} 
         name="status"
         index={index} 
         items={items}
         />
         ))}
      </div>
    </div>
  </div>
   );
};


export default Status;