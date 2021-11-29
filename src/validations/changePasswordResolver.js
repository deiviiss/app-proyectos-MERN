import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  contraseña: yup
    .string("La contraseña debe de ser un texto")
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 carácteres.")
  ,
  contraseña_confirmada: yup
    .string("Las contraseñas deben de coincidir")
    .required("La confirmación de la contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 carácteres y coincidir.")
})

export default yupResolver(schema)