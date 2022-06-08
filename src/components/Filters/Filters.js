import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const clear = () => {
    setStatus(''); 
    setGender('');
    setSpecies('');
    setPageNumber(1);
    window.location.reload(false);
  }
  return (
    <div className='col-3'>
         <div 
         className="text-center fw-bold fs-4 mb-4"
         >
            <h2>Filter</h2>
         </div>

         <div 
         onClick={clear}
         style={{
           cursor: 'pointer'
         }} className="text-center text-primary text-decoration-underline mb-4">
           Clear Filters
         </div>

         {/* Accordion */}
         <div className="accordion" id="accordionExample">

 {/* */}
          <Status 
          setStatus={setStatus}
          setPageNumber={setPageNumber}
          />
         <Gender 
         setPageNumber={setPageNumber}
         setGender={setGender}
         />
          <Species 
           setPageNumber={setPageNumber}
           setSpecies={setSpecies}
          />
  {/*  */}
</div>
         {/* Accordion */}
    </div>
  )
}

export default Filters