import React from 'react'

const Generater = ({combination, setCombination,repetition,setRepetition}) => {
  
  return (
    <>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12"></fieldset>
      <legend>Generator</legend>
<div className="form-group">
    <label className="col-form-label col-form-label-sm">Combination</label>
    <input   className="form-control form-control-sm" type="number" min="1" max="500" value={combination} onChange={(e)=> setCombination(e.target.value)} />
    <label className="col-form-label col-form-label-sm">Repetition</label>
    <input  className="form-control form-control-sm" value = {repetition} onChange={(e)=> setCombination(e.target.value)}
        type="number" min="1" max="100"/>
</div>
    </>
  )
}

export default Generater

// style={{display: "flex", flexDirection : "column", width : "50px"}}