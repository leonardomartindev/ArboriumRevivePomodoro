import { Button, ContainerMain, Continue, FieldContainer, Form, Info, Input, Label, Line, Planet } from "./SettingsPomo.style";
import PlanetPomo from '../../public/pomodoro.svg'
import Planets from "../PlanetsFooter/Planets";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
export default function SettingsPomodoro() {
    const [showInfo, setShowInfo] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const { setPomodoroValue, setShortBreak, setLongBreak, setOriginalPomodoroTimer, setShowSettings, setShowPomodoro } = useContext(AppContext)

    const handleClick = () => {
      setShowInfo(false);
      setTimeout(() => setShowForm(true), 1000); // Adicione esta linha
    }
    const [pomodoroInput, setPomodoroInput] = useState("25");
    const [shortBreakInput, setShortBreakInput] = useState("5");
    const [longBreakInput, setLongBreakInput] = useState("15");

    const handleSave = (event) => {
    event.preventDefault();
    
        if(pomodoroInput > 60 || shortBreakInput > 60 || longBreakInput > 60){
          window.alert("O valor dos inputs deve ser menor que 60")
          return
        }
        if(pomodoroInput == "" || shortBreakInput == "" || longBreakInput == ""){
          window.alert("Todos campos devem estar preenchidos, verifique novamente")
          return
        }
    setOriginalPomodoroTimer(pomodoroInput);
    setPomodoroValue(pomodoroInput);
    setShortBreak(shortBreakInput);
    setLongBreak(longBreakInput);
    setShowSettings(false);
    setShowPomodoro(true);
  }

  
    return (
      <ContainerMain>
          <Planet src={PlanetPomo}/>
          <Info style={{ opacity: showInfo ? '1' : '0' }}>
              Lembre-se, cada ciclo Pomodoro concluído é um pequeno triunfo em direção à restauração deste mundo. Mantenha o foco, e juntos, podemos fazer a diferença.
              <Continue onClick={handleClick}>Continuar</Continue>
          </Info>
          <Form style={{ right: showForm ? '20%' : '-190%' }}>
            <FieldContainer>
              <Label htmlFor="focusTimer">Tempo de foco</Label>
              <Input value={pomodoroInput} autoComplete="off" placeholder="00:00" id="focusTimer" onChange={(e) => setPomodoroInput(e.target.value)}/>
              <Line/>
            </FieldContainer>
            <FieldContainer left="-10rem">
              <Label htmlFor="focusTimer">Descanso curto</Label>
              <Input value={shortBreakInput} autoComplete="off" placeholder="00:00" id="focusTimer" onChange={(e) => setShortBreakInput(e.target.value)}/>
              <Line/>
            </FieldContainer>
            <FieldContainer left="8rem">
              <Label htmlFor="focusTimer">Descanso longo</Label>
              <Input value={longBreakInput} autoComplete="off" placeholder="00:00" id="focusTimer" onChange={(e) => setLongBreakInput(e.target.value)}/>
              <Line/>
            </FieldContainer>
            <FieldContainer left="-5rem">
              <Button type="submit" onClick={handleSave}>Concluir</Button>
              <Line/>
            </FieldContainer>
          </Form>
          <Planets/>
      </ContainerMain>
    )
  }
  