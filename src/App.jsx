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
        {toggleLoader && <Loader/>}

      <HeaderForm/>
      <Form setToggleLoader={setToggleLoader}/>
      


    </div>
  )
}

export default App
