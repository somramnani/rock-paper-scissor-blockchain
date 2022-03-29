import { Color } from '@material-ui/lab/Alert'
import React, { FC, useState } from 'react'

export type ShowSnackbarOptions = {
  message: string
  type: Color
}

export type ShowSnackbar = (snackbarOptions: ShowSnackbarOptions) => void

export type SnackBarContextActions = {
  message: string
  type: Color
  open: boolean
  closeSnackbar: () => void
  showSnackbar: ShowSnackbar
}

export const SnackbarContext = React.createContext({} as SnackBarContextActions)

const SnackbarProvider: FC = (props) => {
  const [message, setMessage] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [type, setType] = useState<Color>('success')

  const closeSnackbar = (): void => {
    setOpen(false)
  }
  const showSnackbar = (snackbarOptions: ShowSnackbarOptions): void => {
    const { message, type } = snackbarOptions
    setMessage(message)
    setType(type)
    setOpen(true)
  }

  const contextValue = {
    closeSnackbar,
    message,
    open,
    showSnackbar,
    type,
  }

  return <SnackbarContext.Provider value={contextValue}>{props.children}</SnackbarContext.Provider>
}

export default SnackbarProvider
