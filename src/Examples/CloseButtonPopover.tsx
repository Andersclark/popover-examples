import Popover from "../Popover/Popover";

export default function CloseButtonPopover(){
  return (
    <>
        {/* @ts-expect-error no type-def for `popovertarget` (?)  */}
    <button popovertarget="close-button-popover" popovertargetaction="toggle">With close button</button>
      <Popover id="close-button-popover">
        <p>I have a visual close-button with zero Javascript</p>
        <p>Hitting TAB automatically focuses close-button.</p>
        {/* @ts-expect-error no type-def for `popovertarget` (?)  */}
        <button popovertarget="close-button-popover" popovertargetaction="hide"> ❌ Close </button>
      </Popover>
    </>
  )
}