import React from 'react';

interface ISectionProps {
  className?: string;
  children: React.ReactNode | JSX.Element;
  style?: React.CSSProperties;
  title?: string;
}

export const Section: React.FC<ISectionProps> = ({
  className,
  children,
  title,
  style,
}) => {
  return (
    <section className={className} style={style}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
};
