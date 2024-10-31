import { useEffect } from "react";

import styles from './Resultado.module.css';

import Classificacao from "../Classificacao";


function Resultado({ altura, massa, resultado, setResultado }) {

    // Função para calcular o IMC
    const calcularImc = () => {
        if (altura && massa) {
            const alturaEmMetros = altura / 100; // Converter cm para metros
            const imc = (massa / (alturaEmMetros * alturaEmMetros)).toFixed(2);
            setResultado(imc);
        } else {
            setResultado(''); // // Limpa o resultado se algum campo estiver vazio
        }
    };
    
    // useEffect para calcular o IMC automaticamente quando altura ou massa mudarem
    useEffect(() => {
        calcularImc();
    }, [altura, massa]);

    return (
        <div className="container">
            <div className={styles.resultado}>
                {resultado && (
                    <div>
                        <p>
                            IMC = {resultado}
                        </p>
                        <Classificacao resultado={resultado} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Resultado;