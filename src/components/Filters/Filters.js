import React from 'react'
import Gender from '../Filters/Category/Gender';
import Species from './Category/Species';
import Status from '../Filters/Category/Status';
const Filters = ({setstatus, setPageNumber ,setGender , setSpecies}) => {
   
    let clear=()=>{
      setGender("");
       setSpecies("");
       setPageNumber(""); 
       window.location.reload(false);
    };
  return (
    <div className="col-lg-3 col-12  mb-5">
      <div className="text-center fw-bold fs-4 mb-">
      Filters
      </div>
      <div 
      onClick={clear}
      style={{cursor:"pointer"}}className="text-center text-primary text-decoration-underline mb-4">
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
      <Status setPageNumber={setPageNumber} setstatus={setstatus} />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
        </div>
        <div className="container gap-3 mb-4"></div>
    </div>
  );
};

export default Filters;