import styles from './Botao.module.css';

function BotaoLimpar({ setAltura, setMassa }) {
    // Função para limpar os campos
    const limparCampos = () => {
        setAltura('');
        setMassa('');
    }

    return (
        <div className="container">
            <div className={styles.botaoLimpar}>
            <button onClick={limparCampos}>Limpar</button>
            </div>
        </div>
    )
}

export default BotaoLimpar;