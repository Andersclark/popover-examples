import './App.css'
import BasicPopover from './Examples/BasicPopover'
import CloseButtonPopover from './Examples/CloseButtonPopover'
import ControlledPopover from './Examples/ControlledPopover'
import ModalPopover from './Examples/ModalPopover'
import Footer from "./Footer"
import Header from "./Header"

function App() {
  return (
    <>
    <Header/>
    <main>
     <BasicPopover />
     <ModalPopover />
     <CloseButtonPopover/>
     <ControlledPopover/>
    </main>
    <Footer/>
    </>
  )
}

export default App
