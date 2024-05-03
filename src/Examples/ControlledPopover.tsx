import Popover from "../Popover/Popover";

export default function ControlledPopover(){
  return (
      <>
        {/* @ts-expect-error no type-def for `popovertarget` (?)  */}
        <button popovertarget="manual-popover" popoveraction="toggle">Controlled</button>
        <Popover id="manual-popover" manual>
          <h2>I'm a manual popover!</h2>  
          <p>I can co-exist with other popovers.</p>
          <p>You have to be very explicit when getting rid of me 💪</p>
          <p>Clicking outside me does nothing.</p>
          <p>The button that spawned me can kill me.</p>
          <p>OR you can call my <code>hidePopover()</code> method</p>
          {/* @ts-expect-error no type-def for `popovertarget` (?)  */}
          <button popovertarget="manual-popover" popoveraction="hide">❌ Close</button>
        </Popover>
      </>

  )
}