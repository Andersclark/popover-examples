const furtherReadingLinks = [
  {text: "MDN: Popover API", href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"},
  {text: "MDN: styling :popover-open", href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:popover-open"},
  {text: "Chrome Dev: Introducing Popover API", href:"https://developer.chrome.com/blog/introducing-popover-api/"},
  {text: "Frontend Masters: Menus, toasts and more", href:"https://frontendmasters.com/blog/menus-toasts-and-more/"},
]
export default function Footer(){
  return (
  <footer>
    <h2>Further reading</h2>
    <ul>
      {furtherReadingLinks.map(({href, text}) => <li key={href}><a href={href}>{text}</a></li>)}
    </ul>
  </footer>)
}