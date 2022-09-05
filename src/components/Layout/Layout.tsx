import React from 'react';
import { LoadingState } from '../LoadingState/LoadingState';
import { Search, ISearchProps } from '../Search/Search';
import { EmptyState } from '../EmptyState/EmptyState';
import { createNumArray } from '../../utils';
import './Layout.css';

interface ILayoutProps extends ISearchProps {
  error?: string;
  isEmptyState: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onDetectLocation?: React.MouseEventHandler<HTMLButtonElement>;
}

const Loading = () => (
  <div className="layout-loading-state">
    <LoadingState animation="wave" height={300} />
    <div className="layout-loading-container">
      {createNumArray(6).map((n) => (
        <LoadingState key={n} animation="wave" height={100} />
      ))}
    </div>
  </div>
);

export const Layout: React.FC<ILayoutProps> = ({
  children,
  error,
  isEmptyState = false,
  isLoading = false,
  onDetectLocation,
  onChange,
  onClick,
  onKeyUp,
  value,
}) => {
  function renderBody(): React.ReactNode {
    switch (true) {
      case isLoading:
        return <Loading />;
      case isEmptyState:
        return <EmptyState onDetectLocation={onDetectLocation} />;
      default:
        return children;
    }
  }

  return (
    <main className="layout">
      <header>
        <img src="/logo.png" alt="logo" className="logo" />
        <Search
          onClick={onClick}
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder="Search by ZIP Code"
          value={value}
        />
      </header>
      {error && <p className="error">{error}</p>}
      {renderBody()}
    </main>
  );
};
