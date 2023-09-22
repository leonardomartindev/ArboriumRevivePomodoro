import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

function TextoDigitado({text}) {


  const delayTexto = 50; // Tempo de atraso em milissegundos entre cada caractere
  const delayBarra = 400; // Intervalo de piscagem em milissegundos (0,4 segundos)

  const [textoExibido, setTextoExibido] = useState('');
  const [barraPiscante, setBarraPiscante] = useState(false); // Começa como falso
  let index = 0;

  useEffect(() => {

    const timerTexto = setInterval(() => {
      if (index < text.length) {
        setTextoExibido((prevTexto) => prevTexto + text.charAt(index));
        index++;
      } else {
        clearInterval(timerTexto); // Interrompe o intervalo quando todo o texto foi digitado
        // Inicia a lógica da barra piscante após a digitação do texto
        setBarraPiscante(true);
      }
    }, delayTexto);

    const timerBarra = setInterval(() => {
      setBarraPiscante((prevPiscante) => !prevPiscante); // Alterna entre true e false para criar o efeito de piscar

    }, delayBarra);

    return () => {
      clearInterval(timerTexto); // Limpa o intervalo do texto quando o componente é desmontado
      clearInterval(timerBarra); // Limpa o intervalo da barra quando o componente é desmontado
    };

  }, []); // Remova o array de dependências vazio para que o efeito seja executado em cada render

  return (
    <div>
      <p>{textoExibido}{barraPiscante && "|"}</p>
    </div>
  );
}

export default TextoDigitado;
TextoDigitado.propTypes = {
    data: propTypes.shape({}),
  }.isRequired;