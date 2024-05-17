import {type MouseEventHandler, useState} from "react";

function MountUnmountDialog() {
  const [renderDialog, setRenderDialog] = useState(false);

  const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setRenderDialog((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={onClickButton}>Mount/Unmount Dialog</button>
      {renderDialog
        ? (
          <dialog open>
            <p>I'm a HTML dialog</p>
          </dialog>
        )
        : null
      }
    </>
  )
}

export default MountUnmountDialog
