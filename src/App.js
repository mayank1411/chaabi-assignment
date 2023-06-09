import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Source from './components/Source';
import Scope from './components/Scope';
import Generater from './components/Generater';
import Threshold from './components/Threshold';
import bigrams from  './ngrams/bigrams'
import { useEffect, useState } from 'react';
import Target from './components/Target';
function App() {
  const [lessonCount, setLessonCount] = useState(1)
  const [expectedString, setExprectedString] = useState('')
  const [sourceType,setSourceType] = useState("bigrams")
  const [scopeType, setScopeType] = useState("50");
  const [combination, setCombination] = useState(1);
  const [repetition,setRepetition] = useState(1);
  const [wordPerMin , setWordPerMin] = useState(1);
  const [accuracy,setAccuracy] = useState(1);

  const CreateExpectedString = () =>{

  }

  return (
    <div>
      <div className="row justify-content center mx-0" style={{display:"flex", flexDirection : "column"}}>
        <Source sourceType={sourceType} setSourceType={setSourceType} />
        <Scope scopeType={scopeType} setScopeType={setScopeType} />
        <Generater combination={combination} setCombination={setCombination} repetition={repetition} setRepetition={setRepetition}/>
        <Threshold wordPerMin = {wordPerMin} setWordPerMin={setWordPerMin} accuracy ={accuracy} setAccuracy={setAccuracy}/>
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
