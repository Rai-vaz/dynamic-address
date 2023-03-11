import {useState} from 'react'
import Loader from './components/Loader'
import Message from './components/Message'
import HeaderForm from './components/HeaderForm'
import Form from './components/MyForm'
import './css/App.css'

function App() {
  const [toggleLoader, setToggleLoader] = useState(false)

  return (
    <div className="App">
    
      <div className={`container-content ${toggleLoader ? '' : 'hide'}`}>
        <Message/>
        <Loader/>
      </div>

      <HeaderForm/>
      <Form/>


    </div>
  )
}

export default App
