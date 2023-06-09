import React from 'react'

const Target = ({expectedString}) => {
  return (
    <div className="expected-phrase word text-white mb-3" style={{backgroundColor : "#375a7f"}}>
    <h4>{expectedString}</h4>
</div>
  )
}

export default Target