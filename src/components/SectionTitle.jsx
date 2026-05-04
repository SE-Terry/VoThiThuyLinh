function SectionTitle({ eyebrow, title, id, align = 'left' }) {
  return (
    <div className={`section-title section-title-${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default SectionTitle;
