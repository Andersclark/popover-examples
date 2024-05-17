import './App.css'
import BasicPopover from './Examples/BasicPopover'
import CloseButtonPopover from './Examples/CloseButtonPopover'
import ControlledPopover from './Examples/ControlledPopover'
import ModalPopover from './Examples/ModalPopover'
import Footer from "./Footer"
import Header from "./Header"
import MountUnmountDialog from "./components/dialog/mount-unmount-dialog.tsx";
import ControlledDialog from "./components/dialog/controlled-dialog.tsx";
import ControlledPortalDialog
  from "./components/dialog/controlled-portal-dialog.tsx";
import MultipleDialogs from "./components/dialog/multiple-dialogs.tsx";
import ModalDialog from "./components/dialog/modal-dialog.tsx";

function App() {
  return (
    <>
    <Header/>
    <main>
      <BasicPopover />
      <ModalPopover />
      <CloseButtonPopover/>
      <ControlledPopover/>
      <hr/>
      <MountUnmountDialog/>
      <ControlledDialog/>
      <ControlledPortalDialog/>
      <MultipleDialogs/>
      <ModalDialog/>
    </main>
    <Footer/>
    </>
  )
}

export default App
