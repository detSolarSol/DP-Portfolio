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

  const handleDownload = () => {
    // Создаем простой PDF с базовым содержанием
    const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 180 >>
stream
BT
/F1 24 Tf
100 700 Td
(Resume - Plakhin Danila) Tj
/F1 14 Tf
100 650 Td
(Email: ddan27993@gmail.com) Tj
/F1 14 Tf
100 620 Td
(GitHub: github.com/detSolarSol) Tj
/F1 14 Tf
100 590 Td
(Telegram: @PLH_FX) Tj
/F1 14 Tf
100 560 Td
(VK: vk.com/lordplh) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000056 00000 n
0000000111 00000 n
0000000216 00000 n
trailer
<< /Size 5 /Root 1 0 R >>
startxref
452
%%EOF`;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
      <button
        onClick={handleDownload}
        className={styles.resumeBtn}
      >
        <DownloadIcon className={styles.downloadIcon} />
        Скачать резюме
      </button>
    </section>
  );
};

export default Contacts;