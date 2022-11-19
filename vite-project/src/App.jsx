import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EHeader from './EHeader'
import FCStudant from './Functional Component/FCStudent'
import CCPerson from './Class Comps/CCPerson'
import CCArsList from './Class Comps/CCArsList'

function App() {
  return (
    <div className="App">
            {EHeader}
      <div>
      <CCArsList/>
      
          <img src={reactLogo} className="logo react" alt="React logo" />
     <p> Main</p>
     <FCStudant id="7" name="omer" grade={7}/> <br/>
     <FCStudant id="8" name="benda" grade={99}/><br />
     <CCPerson name="Cbenda" grade={45} age={25}/><br />
    
    
      </div>
      
    </div>
  )
}

export default App
