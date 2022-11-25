import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer () {

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://www.facebook.com/leoo.tomaz/'><FaFacebook /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/tmazleo/'><FaInstagram /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/leonardotomazb/'><FaLinkedin /></a>
                </li>
            </ul>
            <p className={styles.copy}>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}
export default Footer