import Popover from "../Popover/Popover";

export default function ModalPopover(){
  return ( 
  <>
  {/* @ts-expect-error  `popovertarget` type-def missing(?)*/}
  <button popovertarget="modal-popover">Modal-ish</button>
  <Popover id="modal-popover" modal>
      <h2>Modal! (sort of)</h2>
      <p>using CSS targeting the <code>::backdrop</code> you can style the background of an open popover.</p>
      <p>but popover is not a true modal since the user is not blocked from interacting with the underlying elements and has no semantic value.</p>
  </Popover>
  </>
)
}