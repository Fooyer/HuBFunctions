'use strict'

import styles from './footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <p>© 2024 Hub Functions.</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;