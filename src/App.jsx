import { GlobalStyle } from "./GlobalStyle"
import { CSSTransition } from 'react-transition-group';
import Start from "./components/StartGame/Start";
import Provider from "./context/Provider";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import ConteinerDialogos from "./components/Dialogos/ConteinerDialogos";
import SettingsPomodoro from "./components/SettingPomodoro/SettingsPomodoro";
import Pomodoro from "./components/PomodoroMain/Pomodoro";
function App() {

  return (
    <Provider>
      <AppContent />
    </Provider>
  )
}

function AppContent() {
  const { isGameStarted, showSettings, showPomodoro } = useContext(AppContext)
  
  return (
    <>
      <GlobalStyle/>
      <CSSTransition
        in={!isGameStarted}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Start/>
      </CSSTransition>
      <CSSTransition
        in={isGameStarted && showSettings}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <SettingsPomodoro/>
      </CSSTransition>
      <CSSTransition
        in={isGameStarted && !showSettings && showPomodoro}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Pomodoro/>
      </CSSTransition>
      <CSSTransition
        in={isGameStarted && !showSettings && !showPomodoro}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <ConteinerDialogos/>
      </CSSTransition>
    </>
  )
}


export default App
