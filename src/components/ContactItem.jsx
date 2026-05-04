function ContactItem({ item }) {
  const content = (
    <>
      <span>{item.label}</span>
      <strong>{item.value}</strong>
    </>
  );

  if (item.href) {
    return (
      <a className="contact-item" href={item.href}>
        {content}
      </a>
    );
  }

  return <div className="contact-item">{content}</div>;
}

export default ContactItem;
