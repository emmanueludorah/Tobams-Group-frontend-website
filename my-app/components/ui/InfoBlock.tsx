interface InfoBlockProps {
  title: string;
  description: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export default function InfoBlock({
  title,
  description,
  image,
  imagePosition = 'right',
  children,
}: InfoBlockProps) {
  return (
    <div className={`info-block info-block--${imagePosition}`}>
      {image && (
        <div className="info-block__image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="info-block__content">
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}
