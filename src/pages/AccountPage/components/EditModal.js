import { useEffect } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import useAuth from '../../../auth/useAuth'
import roles from '../../../helpers/roles'
import editAccountResolver from '../../../validations/editAccountResolver'

export default function EditModal({ openModal, closeModal, user }) {

  const { handleSubmit, register, formState, reset } = useForm({ resolver: editAccountResolver })
  const { errors, dirtyFields } = formState

  const { hasRole, updateUser } = useAuth()

  useEffect(() => {
    if (!openModal) {
      reset()
    }
  }, [openModal])

  useEffect(() => {
    if (user) reset({
      name_user: user.name_user,
      email: user.email,
      role: user.role
    })
  }, [user])

  const enviar = (formData) => {
    const isDirty = !!Object.keys(dirtyFields).length

    //si el formulario no está modificado
    if (!isDirty) {
      return
    }

    updateUser(formData)
    closeModal()
  }

  return (
    <Modal show={openModal} onHide={closeModal} >
      <Modal.Header closeButton>
        <Modal.Title>Editar mi cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(enviar)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe un nombre"
              {...register("name_user")}
            />
            {errors?.name_user && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.name_user.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe un email"
              {...register("email")}
            />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.email.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              disabled={!hasRole('admin')}
              {...register("role")}
            >
              {Object.keys(roles).map(role => (
                <option key={role}>{role}</option>
              ))}
            </Form.Control>

            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.role.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} >Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit(enviar)}>Actualizar cuenta</Button>
      </Modal.Footer>
    </Modal>
  )
}