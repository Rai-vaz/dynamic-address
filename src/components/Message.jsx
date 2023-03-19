import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import '../css/Message.css'

const Message = ({title, message, type}) => {

  const [toggleModal, setToggleModal] = useState(true)

  return (
    <div className="container-message">      
     <Modal 
      show={toggleModal} 
      keyboard={false} 
      backdrop='static'
      centered={true}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {message}
        </Modal.Body>

        <Modal.Footer>
          <Button variant={type} onClick={() => setToggleModal(false)} size='lg'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Message