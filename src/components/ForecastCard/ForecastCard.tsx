import React from 'react';
import { getClassNames } from '../../utils';
import './ForecastCard.css';

interface IForecastCard {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ForecastCard: React.FC<IForecastCard> = ({
  className = '',
  children,
  style,
}) => {
  const classNames = getClassNames(['forecast-card', className]);
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};
