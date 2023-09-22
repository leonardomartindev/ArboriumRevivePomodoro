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
                    <CycleItem completed={completedPomodoros >= 1}/>
                    <CycleItem completed={completedPomodoros >= 2}/>
                    <CycleItem completed={completedPomodoros >= 3}/>
                    <CycleItem completed={completedPomodoros >= 4}/>
                    <CycleItem completed={completedPomodoros >= 5}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem completed={completedPomodoros >= 6}/>
                    <CycleItem completed={completedPomodoros >= 7}/>
                    <CycleItem completed={completedPomodoros >= 8}/>
                    <CycleItem completed={completedPomodoros >= 9}/>
                    <CycleItem completed={completedPomodoros >= 10}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem completed={completedPomodoros >= 11}/>
                    <CycleItem completed={completedPomodoros >= 12}/>
                    <CycleItem completed={completedPomodoros >= 13}/>
                    <CycleItem completed={completedPomodoros >= 14}/>
                    <CycleItem completed={completedPomodoros >= 15}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem completed={completedPomodoros >= 16}/>
                    <CycleItem completed={completedPomodoros >= 17}/>
                    <CycleItem completed={completedPomodoros >= 18}/>
                    <CycleItem completed={completedPomodoros >= 19}/>
                    <CycleItem completed={completedPomodoros >= 20}/>
                </CycleLine>
                <CycleLine>
                    <CycleItem completed={completedPomodoros >= 21}/>
                    <CycleItem completed={completedPomodoros >= 22}/>
                    <CycleItem completed={completedPomodoros >= 23}/>
                    <CycleItem completed={completedPomodoros >= 24}/>
                    <CycleItem completed={completedPomodoros >= 25}/>
                </CycleLine>
            </PomoCycle>
            <PomoMenu onClick={openSidebar}><GiHamburgerMenu/></PomoMenu>
            <SideBar/>
            <Planets/>
    </>
)
}
