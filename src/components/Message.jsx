import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import '../css/Message.css'

const Message = () => {

  const [show, setShow] = useState(false)


  const handleClick = () => setShow(true)
  const handleClose = () => setShow(false)


  return (
    <div className="container-message">
      <Button variant="primary" onClick={handleClick}>
        teste modal
      </Button>

     <Modal 
      show={show} 
      keyboard={false} 
      backdrop='static'
      centered={true}
      >
      <Modal.Header>
          <Modal.Title>Meu modal personalizado</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Esse será meu modal de fechamento da mensagem
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} size='lg'>
            Close
          </Button>
        </Modal.Footer>
     </Modal>
    </div>
  )
}

export default Message