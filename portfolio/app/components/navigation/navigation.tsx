'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import styles from './Navigation.module.scss';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'О себе', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>&lt;DP /&gt;</a>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        {navItems.map(item => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.rightGroup}>
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Переключить тему">
          {theme === 'dark' ? <SunIcon className={styles.themeIcon} /> : <MoonIcon className={styles.themeIcon} />}
        </button>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;