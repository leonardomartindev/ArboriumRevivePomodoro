import { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

    const [originalPomodoroTimer, setOriginalPomodoroTimer] = useState(25);
    const [pomodoroTimer, setPomodoroValue] = useState(25);
    const [userIsLogged, setUserIsLogged] = useState(false);
    const [pomodoroCycle, setPomodoroCycle] = useState(0);
    const [showSideBar, setShowSideBar] = useState(false);
    const [shortBreak, setShortBreak] = useState(5);
    const [longBreak, setLongBreak] = useState(15);
    const [timerType, setTimerType] = useState('pomodoro');
    const [isGameStarted, setGameStarted] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showPomodoro, setShowPomodoro] = useState(false);
    const [texts, setTexts] = useState({
        "fala1": "S audações, explorador. Sou o Prof. Sylvan, e estou em uma missão vital para salvar o Planeta Arborium.",
        "fala2": "A gradeço por se juntar a nós, jovem explorador. O que está prestes a embarcar é uma missão de extrema importância para a nossa sobrevivência e a revitalização do Planeta Arborium.",
        "fala3": "O  ar está rarefeito, as árvores estão murchando e a vida em Arborium está à beira da extinção. Devido à negligência ecológica, nossa casa está morrendo.",
        "fala4": "É  por isso que chamamos exploradores corajosos, como você, para a missão de reabitar este mundo.",
        "fala5": "C ultivar plantas é a chave para a nossa sobrevivência. Cada Pomodoro concluído é um raio de esperança, um passo para trazer a vida de volta ao Planeta Arborium. Você é a última esperança, explorador. Estamos nas mãos do tempo, e a hora da ação é agora.",
        "fala6": "A qui está o seu primeiro Pomodoro, uma poderosa ferramenta que o ajudará em sua jornada. Este Pomodoro será o seu companheiro constante na tarefa de cultivar plantas e reverter a devastação que assola Arborium.",
    });

    const value = {
        originalPomodoroTimer,
        setOriginalPomodoroTimer,
        showPomodoro,
        setShowPomodoro,
        pomodoroTimer,
        setPomodoroValue,
        timerType,
        setTimerType,
        showSettings, 
        setShowSettings,
        userIsLogged,
        setUserIsLogged,
        pomodoroCycle,
        setPomodoroCycle,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        texts,
        setTexts,
        isGameStarted,
        setGameStarted,
        showSideBar,
        setShowSideBar,
    };
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
}

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;

export default Provider;
