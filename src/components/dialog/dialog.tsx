import {ReactEventHandler, type ReactNode, useEffect, useRef} from "react"
import {createPortal} from "react-dom";

interface DialogProps {
  children?: ReactNode;
  modal?: boolean;
  onCancel?: ReactEventHandler<HTMLDialogElement>;
  onClose?: ReactEventHandler<HTMLDialogElement>;
  open?: boolean;
  portal?: boolean;
}

function Dialog(props: DialogProps) {
  const {
    children,
    modal,
    onCancel,
    onClose,
    open,
    portal,
  } = props

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current

    if (open) {
      // Reset returnValue when dialog is opened
      if (dialog != null) {
        dialog.returnValue = ''
      }

      if (modal) {
        dialog?.showModal()
      } else {
        dialog?.show()
      }
    } else {
      dialog?.close("DIALOG_CONTROLLED_CLOSE")
    }

    return () => {
      dialog?.close("DIALOG_UNMOUNT_CLOSE")
    }
  }, [modal, open])

  const dialogElement = (
    <dialog onCancel={onCancel} onClose={onClose} ref={dialogRef}>
      {children}
    </dialog>
  )

  return portal
    ? createPortal(dialogElement, document.body)
    : dialogElement
}

export default Dialog;
