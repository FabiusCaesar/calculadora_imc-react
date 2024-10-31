import styles from './Classificacao.module.css';

function Classificacao({ resultado }) {
    if (!resultado) return null; // Não renderiza se o resultado for vazio

    // Determinar a frase e a cor de acordo com o valor do IMC
    let frase = '';
    let estilo = '';

    const imc = parseFloat(resultado);

    if (imc < 18.5) {
        frase = 'Abaixo do peso';
        estilo = styles.abaixoDoPeso;
    } else if (imc >= 18.5 && imc < 24.99) {
        frase = 'Peso normal';
        estilo = styles.pesoNormal;
    } else if (imc >= 25 && imc < 29.99) {
        frase = 'Sobrepeso';
        estilo = styles.sobrepeso;
    } else if (imc >= 30 && imc < 34.99) {
        frase = 'Obesidade Grau I';
        estilo = styles.obesidadeGrauI;
    } else if (imc >= 35 && imc < 39.99) {
        frase = 'Obesidade Grau II';
        estilo = styles.obesidadeGrauII;
    } else {
        frase = 'Obesidade Grau III';
        estilo = styles.obesidadeGrauIII;
    }

    return (
        <p className={estilo}>{frase}</p>
    );

}

export default Classificacao;