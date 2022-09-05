import React from 'react';

interface IEmptyStateProps {
  onDetectLocation?: React.MouseEventHandler<HTMLButtonElement>;
}

export const EmptyState: React.FC<IEmptyStateProps> = ({ onDetectLocation }) => {
  return (
    <div className="state-empty forecast-card" style={{ padding: '20px' }}>
      <h3>Aloha!</h3>
      <p style={{ lineHeight: 2, fontSize: '14px' }}>
        Search for your local weather by entering your ZIP Code. You can also find your
        local weather by entering your city and state <em>(e.g. New York, NY)</em>.
      </p>
      <button className="btn btn-md" onClick={onDetectLocation}>
        <i
          className="fa fa-map-marker"
          aria-hidden="true"
          style={{ marginRight: '4px' }}
        ></i>{' '}
        Get My Location
      </button>
    </div>
  );
};
