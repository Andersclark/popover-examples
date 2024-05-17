import {type MouseEventHandler, useState} from "react";
import Dialog from "./dialog";

function ControlledPortalDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setIsDialogOpen((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={onClickButton}>Controlled Portal Dialog</button>
      <Dialog open={isDialogOpen} portal>
        <p>I'm a controlled portal dialog</p>
      </Dialog>
    </>
  )
}

export default ControlledPortalDialog
