function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-topline">
        <div className="experience-meta">
          <span>{experience.duration}</span>
        </div>
        {experience.logo && experience.socialUrl ? (
          <a
            className="experience-logo-link"
            href={experience.socialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={experience.socialLabel}
            title={experience.socialLabel}
          >
            <img src={experience.logo.src} alt={experience.logo.alt} />
          </a>
        ) : null}
      </div>
      <div>
        <h3>{experience.company}</h3>
        <p className="experience-position">{experience.position}</p>
      </div>
      <p>{experience.description}</p>
      <ul>
        {experience.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
