import Loader from './components/Loader'
import Message from './components/Message'
import HeaderForm from './components/HeaderForm'
import Form from './components/MyForm'
import './css/App.css'

function App() {

  return (
    <div className="App">
    
      <div className='container-content hide'>
        <Loader/>
        <Message/>
      </div>

      <HeaderForm/>
      <Form/>


    </div>
  )
}

export default App
