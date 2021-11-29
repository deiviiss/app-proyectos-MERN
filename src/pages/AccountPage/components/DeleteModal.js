import { Modal, Alert, Button } from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'

export default function DeleteModal({ openModal, closeModal }) {

  const { logout } = useAuth()

  const handlerDelete = () => {
    //petición http
    logout()
  }

  return (
    <Modal show={openModal} onHide={closeModal} >
      <Modal.Header closeButton>
        <Modal.Title>Eliminar cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          ¿Estas seguro que deseas eliminar permanentemete tu cuenta? <b>se perderan tus datos.</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} >Cancelar</Button>
        <Button variant="danger" onClick={handlerDelete} >Eliminar cuenta</Button>
      </Modal.Footer>
    </Modal>
  )
}


