import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import useAuth from '../../auth/useAuth'
import useModal from '../../hooks/useModal'
import ChangePasswordModal from './components/ChangePasswordModal'
import DeleteModal from './components/DeleteModal'
import EditModal from './components/EditModal'

export default function AccountPage() {

  const { user } = useAuth()

  //modal delete account
  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal()

  //modal change password
  const [isOpenChangePasswordModal, openPasswordModal, closePasswordModal] = useModal()

  //modal edit
  const [isOpenEditModal, openEditModal, closeEditModal] = useModal()

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <img
              src="/img/male_avatar.svg"
              alt="profile"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover"
              }}
            />
          </Col>
          <Col className="mt-5">
            <Card style={{ maxWidth: "360px" }} className="mx-auto p-4" >
              <p className="text-center" ><b>Nombre: </b>{user.name_user}</p>
              <p className="text-center"><b>Email: </b>{user.email}</p>
              <p className="text-center"><b>Rol: </b>{user.role}</p>

              <Button variant="warning" onClick={openEditModal}>Editar cuenta</Button>
              <Button variant="link" className="mt-1" onClick={openPasswordModal}>Cambiar contraseña</Button>
              <Button variant="link" className="mt-3 text-danger" onClick={openDeleteModal} >Eliminar cuenta</Button>
            </Card>
          </Col>
        </Row>
      </Container>

      <DeleteModal
        // se pasa como propiedad el state y la función close
        openModal={isOpenDeleteModal}
        closeModal={closeDeleteModal}
      />

      <ChangePasswordModal
        // se pasa como propiedad el state y la función close
        openModal={isOpenChangePasswordModal}
        closeModal={closePasswordModal}
      />

      <EditModal
        // se pasa como propiedad el state y la función close
        openModal={isOpenEditModal}
        closeModal={closeEditModal}
        user={user}
      />

    </>
  )
}
