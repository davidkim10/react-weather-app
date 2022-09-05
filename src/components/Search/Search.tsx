import React from 'react';
// import { ReactComponent as Icon } from './search-icon.svg';
import searchIcon from './search-icon.svg';
import './Search.css';

export interface ISearchProps {
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
}

export const Search: React.FC<ISearchProps> = ({
  value = '',
  placeholder = '',
  onChange = () => null,
  onClick = (e) => null,
  onKeyUp = (e) => null,
  style,
}) => {
  return (
    <div className="search" style={style}>
      <input
        className="search-input"
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        type="search"
        value={value}
      />
      <button className="search-btn" onClick={onClick}>
        <img className="icon" src={searchIcon} alt="search" />
        {/* <Icon height="14px" width="14px" fill="#fff" /> */}
      </button>
    </div>
  );
};
