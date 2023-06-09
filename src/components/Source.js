import React from 'react'

const Source = ({sourceType, setSourceType}) => {
    const handleOnselect = (e)=>{
        setSourceType(e.target.value);
    }

  return (
      <div>
    <div>
    <fieldset className="settings-module col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">

      
    </fieldset>
      <legend>Source</legend>
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
                            v-model="data.source"
                            checked = {sourceType === "trigrams"}
                            // onSelect={handleOnselect}
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
                            v-model="data.source"
                            checked = {sourceType === "tetragrams"}
                            // onSelect={handleOnselect}
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
                            v-model="data.source"
                            checked = {sourceType === "words"}
                            // onSelect={handleOnselect}
                            onClick={handleOnselect}
                        />
                        <label className="custom-control-label" for="words">Words</label>
      </div>

    
      </div>
  )
}

export default Source