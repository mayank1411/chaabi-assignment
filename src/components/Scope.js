import React from 'react'

const Scope = ({scopeType, setScopeType}) => {
    const handleSelect = (e)=>{
        setScopeType(e.target.value)
    }
  return (
    <div>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12 p-4">


      <legend>Scope</legend>
                <div className="form-group">
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="top-50"
                            name="scope-radio-group"
                            value="50" 
                            checked = {scopeType === '50'}
                            onClick={handleSelect}
                        />
                        <label className="custom-control-label" for="top-50">Top 50</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="top-100"
                            name="scope-radio-group"
                            value="100"
                            checked = {scopeType === '100'}
                            onClick={handleSelect}
                        />
                        <label className="custom-control-label" for="top-100">Top 100</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="top-150"
                            name="scope-radio-group"
                            value="150"
                            checked = {scopeType === '150'}
                            onClick={handleSelect}
                        />
                        <label className="custom-control-label" for="top-150">Top 150</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="top-200"
                            name="scope-radio-group"
                            value="200"
                            checked = {scopeType === '200'}
                            onClick={handleSelect} 
                        />
                        <label className="custom-control-label" for="top-200">Top 200</label>
                    </div>
                </div>
    </fieldset>
    </div>
  )
}

export default Scope