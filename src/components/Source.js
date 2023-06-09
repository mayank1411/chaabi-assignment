import React from 'react'

const Source = ({sourceType, setSourceType}) => {
    const handleOnselect = (e)=>{
        setSourceType(e.target.value);
    }

  return (
      <>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
      <legend>Source</legend>
      <label class="col-form-label col-form-label-sm"> &nbsp; </label>
                    <div class="custom-control custom-radio">
      <input
                            type="radio"
                            className="custom-control-input"
                            id="bi-grams"
                            name="source-radio-group"
                            value="bigrams"
                            v-model="data.source"
                            checked = {sourceType === 'bigrams'}
                            // onSelect={handleOnselect}
                            onClick={handleOnselect}
                        />
                        <label className="custom-control-label" for="bi-grams">Bigrams</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="tri-grams"
                            name="source-radio-group"
                            value="trigrams"
                            
                            checked = {sourceType === "trigrams"}
                            
                            onClick={handleOnselect}
                        />
                        <label className="custom-control-label" for="tri-grams">Trigrams</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="tetra-grams"
                            name="source-radio-group"
                            value="tetragrams"
                            
                            checked = {sourceType === "tetragrams"}
                            onClick={handleOnselect}

                        />
                        <label className="custom-control-label" for="tetra-grams">Tetragrams</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id="words"
                            name="source-radio-group"
                            value="words"
                           
                            checked = {sourceType === "words"}
                            
                            onClick={handleOnselect}
                        />
                        <label className="custom-control-label" for="words">Words</label>
                    </div>
    </fieldset>
      

    </>
  )
}

export default Source