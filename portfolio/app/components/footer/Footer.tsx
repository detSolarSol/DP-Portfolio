import styles from './Footer.module.scss';

const contacts = [
  { label: 'GitHub', href: 'https://github.com/твой-username' },
  { label: 'Telegram', href: 'https://t.me/твой-username' },
  { label: 'Email', href: 'mailto:твой-email@example.com' },
  { label: 'VK', href: 'https://vk.com/твой-username' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} Плахин Данила</span>
      <div className={styles.links}>
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {contact.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;