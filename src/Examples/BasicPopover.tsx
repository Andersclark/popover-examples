import Popover from "../Popover/Popover";

export default function BasicPopover(){
  return (
    <>
    {/* @ts-expect-error popovertarget missing in type-def(?) */}
    <button popovertarget="basic-popover" >Base</button>
    <Popover id="basic-popover">
      <p>I'm a HTML popover with 'zero' Javascript!</p>
    </Popover>
    </>
  )
}