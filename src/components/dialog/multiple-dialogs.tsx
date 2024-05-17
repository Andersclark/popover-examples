import {type MouseEventHandler, useState} from "react";
import ControlledDialog from "./controlled-dialog.tsx";
import Dialog from "./dialog.tsx";

function MultipleDialogs() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setIsDialogOpen((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={onClickButton}>Multiple Dialogs</button>
      <Dialog open={isDialogOpen}>
        Foo?
        <ControlledDialog>
          Bar!
          <ControlledDialog>
            Baz?
            <ControlledDialog>
              Qux!
            </ControlledDialog>
          </ControlledDialog>
        </ControlledDialog>
      </Dialog>
    </>
  )
}

export default MultipleDialogs
