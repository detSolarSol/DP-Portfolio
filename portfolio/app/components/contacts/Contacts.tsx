'use client';

import useInView from '@/app/hooks/useInView';
import GitHubIcon from './GitHubIcon';
import TelegramIcon from './TelegramIcon';
import EmailIcon from './EmailIcon';
import VKIcon from './VKIcon';
import styles from './Contacts.module.scss';

const contactsList = [
  { label: 'GitHub', href: 'https://github.com/detSolarSol', Icon: GitHubIcon },
  { label: 'Telegram', href: 'https://t.me/PLH_FX', Icon: TelegramIcon },
{ label: 'Email', href: 'mailto:ddan27993@gmail.com', Icon: EmailIcon },
  { label: 'VK', href: 'https://vk.com/lordplh', Icon: VKIcon },
];

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

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
        {contactsList.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.circle}>
              <Icon className={styles.icon} />
            </div>
            <span className={styles.label}>{label}</span>
          </a>
        ))}
      </div>
      <a
        href="/resume.pdf"
        download
        className={styles.resumeBtn}
      >
        <DownloadIcon className={styles.downloadIcon} />
        Скачать резюме
      </a>
    </section>
  );
};

export default Contacts;