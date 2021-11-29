import { useState } from "react"

export default function useModal() {

  //maneja si el modal está abierto o no
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return [isOpen, open, close]
}
