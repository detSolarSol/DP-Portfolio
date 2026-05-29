'use client';

import useInView from '@/app/hooks/useInView';
import styles from './Contacts.module.scss';

const contactsList = [
  { label: 'GitHub', href: 'https://github.com/твой-username', icon: '💻' },
  { label: 'Telegram', href: 'https://t.me/твой-username', icon: '📬' },
  { label: 'Email', href: 'mailto:твой-email@example.com', icon: '📧' },
  { label: 'VK', href: 'https://vk.com/твой-username', icon: '🌐' },
];

const Contacts = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contacts"
      className={`${styles.contacts} ${isVisible ? styles.visible : ''}`}
      ref={ref}
    >
      <h2 className={styles.heading}>Контакты</h2>
      <div className={styles.links}>
        {contactsList.map(contact => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icon}>{contact.icon}</span>
            <span className={styles.label}>{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contacts;