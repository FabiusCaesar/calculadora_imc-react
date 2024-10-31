import styles from './Formulario.module.css';

function Formulario({ altura, massa, setAltura, setMassa }) {

    return (
        <div className={"container"}>

            <h1>Calculadora de IMC</h1>
            <h3>(Índice de Massa Corporal)</h3>

        <div className={styles.inputAltura}>
            <input
                type="number"
                placeholder='Altura em cm'
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
        </div>
        <div className={styles.inputMassa}>
            <input
                type="number"
                placeholder='Massa em kg'
                value={massa}
                onChange={(e) => setMassa(e.target.value)}
            />
        </div>


        </div>
    )
}

export default Formulario;