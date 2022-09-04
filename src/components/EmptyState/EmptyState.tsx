import React from 'react';

export const EmptyState: React.FC = () => {
  return (
    <div className="state-empty forecast-card" style={{ padding: '20px' }}>
      <h3>Aloha!</h3>
      <p style={{ lineHeight: 2, fontSize: '14px' }}>
        Search for your local weather by entering your ZIP Code. You can also find your
        local weather by entering your city and state <em>(e.g. New York, NY)</em>.
      </p>
    </div>
  );
};
