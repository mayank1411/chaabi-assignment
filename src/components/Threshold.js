import React from 'react'

const Threshold = () => {
  return (
    <div>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">

      <legend>Threshold</legend>
                <div class="form-group" style={{display: "flex", flexDirection : "column", width : "50px"}}>
                    <label class="col-form-label col-form-label-sm">WPM</label>
                    <input   class="form-control form-control-sm" type="number" min="1" max="500"/>
                    <label class="col-form-label col-form-label-sm">Accuracy</label>
                    <input  class="form-control form-control-sm"
                        type="number" min="1" max="100"/>
                </div>
    </fieldset>
    </div>
  )
}

export default Threshold