import React, { useState } from 'react';

import Formulario from './components/Formulario';
import BotaoLimpar from './components/Botao';
import Resultado from './components/Resultado';


function App() {
  // Estados para armazenar altura, massa e resultado do IMC
  const [altura, setAltura] = useState('');
  const [massa, setMassa] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <>
      <Formulario altura={altura} massa={massa} setAltura={setAltura} setMassa={setMassa} />
      <BotaoLimpar setAltura={setAltura} setMassa={setMassa} />
      <Resultado altura={altura} massa={massa} resultado={resultado} setResultado={setResultado} />
    </>
  )
}

export default App