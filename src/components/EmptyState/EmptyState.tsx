import React from 'react';

interface IEmptyStateProps {
  onDetectLocation?: React.MouseEventHandler<HTMLButtonElement>;
}

export const EmptyState: React.FC<IEmptyStateProps> = ({ onDetectLocation }) => {
  return (
    <div className="empty-state forecast-card" style={{ padding: '20px' }}>
      <h2 className="title-border">Aloha!</h2>
      <p>Search for your local weather by entering your ZIP Code.</p>
      <p>
        You can also find your local weather by entering the city and state{' '}
        <em>(e.g. New York, NY)</em> or by clicking below!
      </p>
      <button className="btn btn-lg btn-block" onClick={onDetectLocation}>
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
