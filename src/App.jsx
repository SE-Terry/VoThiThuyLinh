import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';
import SkillTag from './components/SkillTag.jsx';
import ContactItem from './components/ContactItem.jsx';
import { portfolio } from './data/portfolio.js';

const getStoredValue = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  return window.localStorage.getItem(key) || fallback;
};

function App() {
  const [language, setLanguage] = useState(() => getStoredValue('portfolio-language-v2', 'vi'));
  const [theme, setTheme] = useState(() => getStoredValue('portfolio-theme-v2', 'dark'));

  const content = useMemo(
    () => portfolio.content[language] || portfolio.content.en,
    [language],
  );

  const {
    profile,
    about,
    experience,
    skills,
    strengths,
    highlights,
    contact,
    controls,
  } = content;

  useEffect(() => {
    document.documentElement.lang = language === 'vi' ? 'vi' : 'en';
    window.localStorage.setItem('portfolio-language-v2', language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme-v2', theme);
  }, [theme]);

  return (
    <>
      <Header
        controls={controls}
        languages={portfolio.languages}
        navItems={content.navigation}
        onLanguageChange={setLanguage}
        onThemeChange={setTheme}
        selectedLanguage={language}
        selectedTheme={theme}
      />
      <main>
        <Hero profile={profile} />

        <section className="section section-soft" id="about" aria-labelledby="about-title">
          <div className="container about-layout">
            <SectionTitle
              eyebrow={about.eyebrow}
              title={about.title}
              id="about-title"
            />
            <div className="about-copy">
              <p>{about.copy}</p>
              <p className="quote-line">{about.highlight}</p>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <SectionTitle
              eyebrow={content.experienceIntro.eyebrow}
              title={content.experienceIntro.title}
              id="experience-title"
              align="center"
            />
            <div className="experience-grid">
              {experience.map((item) => (
                <ExperienceCard key={item.company} experience={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blush" aria-labelledby="highlights-title">
          <div className="container">
            <SectionTitle
              eyebrow={content.highlightsIntro.eyebrow}
              title={content.highlightsIntro.title}
              id="highlights-title"
              align="center"
            />
            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item}>
                  <span aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container split-section">
            <div>
              <SectionTitle
                eyebrow={content.skillsIntro.eyebrow}
                title={content.skillsIntro.title}
                id="skills-title"
              />
              <div className="tag-cloud" aria-label={content.skillsIntro.aria}>
                {skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow={content.strengthsIntro.eyebrow}
                title={content.strengthsIntro.title}
                id="strengths-title"
              />
              <div className="strength-grid" aria-labelledby="strengths-title">
                {strengths.map((strength) => (
                  <article className="strength-card" key={strength.title}>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-layout">
            <div>
              <SectionTitle
                eyebrow={content.contactIntro.eyebrow}
                title={content.contactIntro.title}
                id="contact-title"
              />
              <p className="contact-lede">{content.contactIntro.lede}</p>
            </div>
            <div className="contact-list" aria-label={content.contactIntro.aria}>
              {contact.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
