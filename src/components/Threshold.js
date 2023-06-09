import React from 'react'

const Threshold = ({wordPerMin , setWordPerMin,accuracy,setAccuracy}) => {
  return (
    <>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">

      <legend>Threshold</legend>
                <div className="form-group">
                    <label className="col-form-label col-form-label-sm">WPM</label>
                    <input   className="form-control form-control-sm" value={wordPerMin} onChange={(e)=> setWordPerMin(e.target.value)}
                     type="number" min="1" max="500"/>
                    <label className="col-form-label col-form-label-sm">Accuracy</label>
                    <input  className="form-control form-control-sm" value={accuracy} onChange={(e)=> setAccuracy(e.target.value)}
                        type="number" min="1" max="100"/>
                </div>
    </fieldset>
    </>
  )
}

export default Threshold

