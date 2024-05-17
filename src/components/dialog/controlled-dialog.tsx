import {type MouseEventHandler, type ReactNode, useState} from "react";
import Dialog from "./dialog";

const DEFAULT_CHILDREN = <p>I'm a controlled dialog</p>

interface ControlledDialogProps {
  children?: ReactNode;
}

function ControlledDialog(props: ControlledDialogProps) {
  const {children = DEFAULT_CHILDREN} = props;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setIsDialogOpen((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={onClickButton}>Controlled Dialog</button>
      <Dialog open={isDialogOpen}>
        {children}
      </Dialog>
    </>
  )
}

export default ControlledDialog
