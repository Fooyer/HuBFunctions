import Image from 'next/image';
import imgLua from '../../../../public/lua.svg';
import imgSol from '../../../../public/sol.svg';

import styles from "./light-dark-mode.module.css";

export default function LightDarkMode({ alterarTema, tema }) {
    return (
        <div onClick={alterarTema} className={tema === 'light' ? styles.lightBotao : styles.darkBotao}>
            <div className={styles.switchTema}>
                {tema == "light" && <Image className={styles.imageLight} src={imgLua} alt='Imagem lua' />}
                {tema == "dark" && <Image className={styles.imageDark} src={imgSol} alt='Imagem de sol' />}
            </div>
        </div>
    );
}