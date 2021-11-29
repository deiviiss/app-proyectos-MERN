import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import roles from '../helpers/roles'

const schema = yup.object().shape({
  name_user: yup
    .string("El nombre debe de ser un texto")
    .required("El nombre es requerido")
  ,
  email: yup
    .string("El email de ser un texto")
    .required("El email es requerido")
    .email("Debe ingresar un email válido")
  ,
  role: yup
    .string("El rol de ser un texto")
    // .required("El rol es requerido")
    // .oneOf(["Admin", "encargado", "coordinador"], "El rol no es válido, elija otro")
    .oneOf(Object.keys(roles), "El rol no es válido, elija otro")
})

export default yupResolver(schema)