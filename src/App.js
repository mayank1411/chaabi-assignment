import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Source from './components/Source';
import Scope from './components/Scope';
import Generater from './components/Generater';
import Threshold from './components/Threshold';
import bigrams from  './ngrams/bigrams'
import { useState } from 'react';
import Target from './components/Target';
function App() {
  const [lessonCount, setLessonCount] = useState(1)
  const [expectedString, setExprectedString] = useState('')
  const [sourceType,setSourceType] = useState("bigrams")
  const [scopeType, setScopeType] = useState("50");

  console.log(scopeType);

  return (
    <div>
      <div className='col justify-content-center' style={{display : "flex", justifyContent : 'space-around', alignItems : "center", color : "white", marginTop:"12vh"}}>
        <Source sourceType={sourceType} setSourceType={setSourceType} />
        <Scope scopeType={scopeType} setScopeType={setScopeType} />
        <Generater/>
        <Threshold/>
      </div>
      <div style={{display : "flex", justifyContent : "center"}}>
        <h4>Lesson {lessonCount}/50</h4>
      </div>
      <>
        <Target expectedString={expectedString}  />
      </>
      <div class="form-group input-fields" style={{width: "50%"}}>
                <label class="col-form-label col-form-label-lg"></label>
                <input   type="text" placeholder="Re-type if failed, press <TAB> or <ESC> to reset"
                    className='user-input' style={{color : "black" , marginLeft : "50%"}} />
            </div>
            
            <div class="center stats mt-auto">
            <h4>WPM: 0 </h4>
            &nbsp; &nbsp; &nbsp; &nbsp; <h4>Accuracy: 0 % </h4>
            &nbsp; &nbsp; &nbsp; &nbsp; <h4>Average WPM: 0 </h4>
        </div>

    </div>
    
  );
}

export default App;
