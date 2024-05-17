import {
  type MouseEventHandler,
  type ReactEventHandler,
  type ReactNode,
  useState
} from "react";
import Dialog from "./dialog";

const DEFAULT_CHILDREN = <p>I'm a modal dialog</p>

interface ModalDialogProps {
  children?: ReactNode;
}

function ModalDialog(props: ModalDialogProps) {
  const {children = DEFAULT_CHILDREN} = props;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setIsDialogOpen((prevState) => !prevState)
  }

  const onCancelDialog: ReactEventHandler<HTMLDialogElement> = (event) => {
    console.debug('ModalDialog - onCancelDialog', event)
  }

  const onCloseDialog: ReactEventHandler<HTMLDialogElement> = (event) => {
    console.debug('ModalDialog - onCancelDialog', event)
  }

  return (
    <>
      <button onClick={onClickButton}>Modal Dialog</button>
      <Dialog
        modal
        onCancel={onCancelDialog}
        onClose={onCloseDialog}
        open={isDialogOpen}
      >
        {children}
      </Dialog>
    </>
  )
}

export default ModalDialog
