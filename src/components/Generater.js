import React from 'react'

const Generater = () => {
  return (
    <div>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12"></fieldset>
      <legend>Generator</legend>
                <div class="form-group" style={{display: "flex", flexDirection : "column", width : "50px"}}>
                    <label class="col-form-label col-form-label-sm">Combination</label>
                    <input 
                        class="form-control form-control-sm" type="number" min="1" max='500' />
                    <label class="col-form-label col-form-label-sm">Repetition</label>
                    <input 
                        class="form-control form-control-sm" type="number" min="1" max='500'/>
                </div>
    </div>
  )
}

export default Generater