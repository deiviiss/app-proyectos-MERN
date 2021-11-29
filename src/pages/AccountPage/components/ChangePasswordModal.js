import { useEffect } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import changePasswordResolver from '../../../validations/changePasswordResolver'

export default function ChangePasswordModal({ openModal, closeModal }) {

  const { handleSubmit, register, formState, reset } = useForm({ resolver: changePasswordResolver })
  const { errors } = formState

  useEffect(() => {
    if (!openModal) {
      reset()
    }
  }, [openModal, reset])

  const enviar = (formData) => {
    console.log(formData);

    if (formData.contraseña !== formData.contraseña_confirmada) {
      console.log('Contraseñas no coinciden');
    }

    if (formData.contraseña === formData.contraseña_confirmada) {
      console.log('Contraseñas coinciden');
    }
  }
  return (
    <Modal show={openModal} onHide={closeModal} >
      <Modal.Header closeButton>
        <Modal.Title>Cambiar contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(enviar)}>
          <Form.Group>
            <Form.Label>Nueva contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Escribe una contraseña"
              {...register("contraseña")}
            />
            {errors?.contraseña && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.contraseña.message}
                </Alert>
              </Form.Text>
            )}
            <Form.Control
              className="mt-2"
              type="password"
              placeholder="Confirmar tu contraseña"
              {...register("contraseña_confirmada")}
            />
            {errors?.contraseña_confirmada && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.contraseña_confirmada.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} >Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit(enviar)}>Actualizar contraseña</Button>
      </Modal.Footer>
    </Modal>
  )
}


