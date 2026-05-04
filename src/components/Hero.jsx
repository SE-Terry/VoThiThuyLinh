function Hero({ profile }) {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title" aria-label={profile.name}>
            {profile.nameLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <div className="hero-actions" aria-label={profile.actionsAria}>
            <a
              className="button button-primary"
              download={profile.primaryCtaDownload}
              href={profile.primaryCtaHref}
            >
              {profile.primaryCta}
            </a>
            <a className="button button-secondary" href="#contact">
              {profile.secondaryCta}
            </a>
          </div>
        </div>

        <div className="portrait-panel" aria-label={profile.portraitAria}>
          <div className="portrait-frame">
            <img src={profile.portrait} alt={profile.portraitAlt} />
          </div>
          <div className="portrait-caption">
            <span>{profile.captionKicker}</span>
            <strong>{profile.caption}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
