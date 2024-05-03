type ToggleEvent = Event & (
{
  newState: "open"
  oldState: "closed"
} | {
  newState: "closed"
  oldState: "open"
})

export function popify(el: HTMLElement){
  el.setAttribute('popover', 'auto')
  el.showPopover()
  el.addEventListener('beforetoggle', (e: Event) => {
    const toggleEvent = e as ToggleEvent
    if(toggleEvent.newState === 'closed'){
      const target = e.target as HTMLElement
      target.removeAttribute('popover')}
    })
}

export function h() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
