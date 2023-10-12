import { useContext, useEffect, useState } from "react";
import { ButtonContainer, CycleItem, CycleLine, PomoContainer, PomoCycle, PomoMenu, PomoName, PomoPause, PomoPlanet, PomoPlay, PomoPlayers, PomoReset, PomoTimer } from "./Pomodoro.style";
import { BiSolidRightArrow } from 'react-icons/bi';
import { GiHamburgerMenu, GiPauseButton } from 'react-icons/gi';
import { FaArrowsRotate } from 'react-icons/fa6';
import AppContext from "../../context/AppContext";
import  SideBar  from "./SideBar/SideBar";
import Planets from "../PlanetsFooter/Planets";

export default function Pomodoro() {
    const [isRunning, setRunning] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const {pomodoroTimer, setPomodoroValue, setShowSideBar, shortBreak, longBreak, originalPomodoroTimer} = useContext(AppContext);
    const [initialTimerMinutes, setInitialMinutes] = useState(pomodoroTimer);
    const [completedPomodoros, setCompletedPomodoros] = useState(0);
    const [pomodoroType, setPomodoroType] = useState(true);

    useEffect(()=>{
        let intervalId;
    
        if(isRunning && !isPaused){
            intervalId = setInterval(() => {
                if(timerSeconds > 0){
                    setTimerSeconds((prevSeconds) => prevSeconds - 1)
                } else {
                    if(pomodoroTimer > 0){
                        setPomodoroValue((prevPomodoroTimer) => prevPomodoroTimer - 1);
                        setTimerSeconds(59)
                    } else {
                        if(pomodoroType){
                            setCompletedPomodoros((prevPomodoros) => prevPomodoros + 1);
                        }
                        setPomodoroValue(initialTimerMinutes)
                        setRunning(false);
                        setPomodoroValue(shortBreak)
                        setPomodoroType(false);
                    }
                }
            }, 1000);
        }
    
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, isPaused, pomodoroTimer, timerSeconds])
    
    const startTimer = ()=>{
        if(pomodoroTimer > 0 || timerSeconds > 0){
            setRunning(true)
            setPaused(false)
            setInitialMinutes(pomodoroTimer)
            
        }
    }

    const pauseTimer = () => {
        if(isRunning){
            setRunning(false);
            setPaused(true);
        }
    }
    
    const resetTimer = ()=>{
        if(isRunning || isPaused){
            setRunning(false);
            setPaused(false);
            setPomodoroValue(initialTimerMinutes);
            setTimerSeconds(0);
        }
    }
    const openSidebar = () => {
        setShowSideBar(true)
      }
    const pomodoroSet = () => {
        setPomodoroValue(originalPomodoroTimer)
        setPomodoroType(true);
    }
    const shortBreakSet = () => {
        setPomodoroValue(shortBreak)
        setPomodoroType(false);
    }
    const longBreakSet = () => {
        setPomodoroValue(longBreak)
        setPomodoroType(false);
    }
    
    
  return (
    <>
            <PomoContainer>
                <ButtonContainer>
                    <PomoName disabled={isRunning} onClick={pomodoroSet}>Pomodoro</PomoName>
                    <PomoName disabled={isRunning} onClick={shortBreakSet}>Short Break</PomoName>
                    <PomoName disabled={isRunning} onClick={longBreakSet}>Long Break</PomoName>
                </ButtonContainer>
                    <PomoPlanet>
                        <PomoTimer>{pomodoroTimer.toString().padStart(2, '0')}:{timerSeconds.toString().padStart(2, '0')}</PomoTimer>
                    </PomoPlanet>
                <PomoPlayers>
                    <PomoPlay isRunning={isRunning} onClick={startTimer}><BiSolidRightArrow/></PomoPlay>
                    <PomoPause isRunning={isRunning} onClick={pauseTimer}><GiPauseButton/></PomoPause>
                    <PomoReset isRunning={isRunning} onClick={resetTimer}><FaArrowsRotate/></PomoReset>
                </PomoPlayers>
            </PomoContainer>    
            <PomoCycle>
                <CycleLine>
                    <CycleItem style={{ background: completedPomodoros >= 1 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 2 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 3 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 4 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 5 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem style={{ background: completedPomodoros >= 6 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 7 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 8 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 9 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 10 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem style={{ background: completedPomodoros >= 11 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 12 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 13 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 14 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 15 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem style={{ background: completedPomodoros >= 16 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 17 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 18 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 19 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 20 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem style={{ background: completedPomodoros >= 21 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 22 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 23 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 24 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                    <CycleItem style={{ background: completedPomodoros >= 25 ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9" }}/>
                </CycleLine>
            </PomoCycle>
            <PomoMenu onClick={openSidebar}><GiHamburgerMenu/></PomoMenu>
            <SideBar/>
            <Planets/>
    </>
)
}
