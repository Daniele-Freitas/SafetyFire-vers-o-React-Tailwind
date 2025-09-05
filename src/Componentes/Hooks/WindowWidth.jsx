// src/hooks/useWindowWidth.js
import { useState, useEffect } from 'react';

function useWindowWidth() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Função para atualizar a largura
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adiciona o event listener ao montar o componente
    window.addEventListener('resize', handleResize);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // O array vazio garante que o efeito rode apenas uma vez (ao montar e desmontar)

  return windowWidth;
}

export default useWindowWidth;