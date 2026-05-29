import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© {new Date().getFullYear()} [Твоё Имя]. Все права защищены.</p>
    </footer>
  );
};

export default Footer;