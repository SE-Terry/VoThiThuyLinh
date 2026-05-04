function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.75v2.5M12 18.75v2.5M4.15 4.15l1.77 1.77M18.08 18.08l1.77 1.77M2.75 12h2.5M18.75 12h2.5M4.15 19.85l1.77-1.77M18.08 5.92l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.25 14.42A7.84 7.84 0 0 1 9.58 3.75a8.5 8.5 0 1 0 10.67 10.67Z" />
    </svg>
  );
}

function Header({
  controls,
  languages,
  navItems,
  onLanguageChange,
  onThemeChange,
  selectedLanguage,
  selectedTheme,
}) {
  const isDark = selectedTheme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  const themeLabel = isDark ? controls.themeToggle.toLight : controls.themeToggle.toDark;

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand-mark" href="#top" aria-label={controls.homeAria}>
          <img src="/assets/swan-logo.svg?v=2" alt="" aria-hidden="true" />
        </a>
        <div className="nav-right">
          <nav className="main-nav" aria-label={controls.navAria}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="toolbar-controls" aria-label={controls.displayAria}>
            <div className="segmented-control" aria-label={controls.languageAria}>
              {languages.map((item) => (
                <button
                  aria-pressed={selectedLanguage === item.code}
                  className={selectedLanguage === item.code ? 'is-active' : ''}
                  key={item.code}
                  onClick={() => onLanguageChange(item.code)}
                  title={item.name}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              aria-label={themeLabel}
              className="theme-toggle"
              onClick={() => onThemeChange(nextTheme)}
              title={themeLabel}
              type="button"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
