import { ShowSnackbar, SnackbarContext } from "../../providers/SnackbarProvider"
import { useContext, useMemo } from "react"

export default function useSnackbar(): { showSnackbar: ShowSnackbar } {
  const { showSnackbar } = useContext(SnackbarContext)

  return useMemo(
    () => ({
      showSnackbar,
    }),
    [showSnackbar]
  )
}
