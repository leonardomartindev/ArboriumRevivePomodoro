import { useContext, useState } from "react"
import { Circle, CloseBar, Field, Form, Input, Label, Rocket, SaveBtn, SideBar } from "./SideBar.style"
import AppContext from "../../../context/AppContext"
import {RxRocket} from 'react-icons/rx'

export default function SiderBar() {
  const { showSideBar, setShowSideBar, setPomodoroValue, setShortBreak, setLongBreak, setOriginalPomodoroTimer } = useContext(AppContext)
  const [pomodoroInput, setPomodoroInput] = useState("");
  const [shortBreakInput, setShortBreakInput] = useState("");
  const [longBreakInput, setLongBreakInput] = useState("");

  const closeSidebar = () => {
    setShowSideBar(false)
  }

  const handleSave = (event) => {
    event.preventDefault();
    
        if(pomodoroInput > 60 || shortBreakInput > 60 || longBreakInput > 60){
          window.alert("O valor dos inputs deve ser menor que 60")
          return
        }
    setOriginalPomodoroTimer(pomodoroInput);
    setPomodoroValue(pomodoroInput);
    setShortBreak(shortBreakInput);
    setLongBreak(longBreakInput);
}



  
  return (
   <SideBar visible={showSideBar}>
        <CloseBar onClick={closeSidebar}>X</CloseBar>
        <Form onSubmit={handleSave}>
          <Field>
            <Label htmlFor="pomodoroTimer">Tempo do Pomodoro</Label>
            <Input autoComplete="off" id="pomodoroTimer" placeholder="00:00" value={pomodoroInput} onChange={(e) => setPomodoroInput(e.target.value)} />
          </Field>
          <Field>
            <Label htmlFor="shortBreak">Tempo do descanso curto</Label>
            <Input autoComplete="off" id="shortBreak" placeholder="00:00" value={shortBreakInput} onChange={(e) => setShortBreakInput(e.target.value)} />
          </Field>
          <Field>
            <Label htmlFor="longBreak">Tempo do descanso longo</Label>
            <Input autoComplete="off" id="longBreak" placeholder="00:00" value={longBreakInput} onChange={(e) => setLongBreakInput(e.target.value)} />
          </Field>
          <SaveBtn type="submit" onClick={handleSave}>salvar</SaveBtn>
        </Form>
          <Circle>
            <Rocket><RxRocket/></Rocket>
          </Circle>
   </SideBar>
  )
}
