import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { history } from '../../helpers/history';
import './menu.scss';

export const Menu = ({ children, data, action = () => null, cy='' }) => {
  const location = useLocation();
  const isActive = (address) => location.pathname === address;
  const actionMenu = (e) => {
    if (e.url) {
      window.open(e.url, '_blank');
    }
    if (e.go) {
      history.push(e.go);
    }
    action(e);
  };

  return (
    <div className="menu" data-cy={`Menu${cy}`}>
      {data && data.length
        ? data.map((item) => {
            return (
              <button
                key={item.id}
                className={isActive(item.go) ? 'active' : ''}
                onClick={() => actionMenu(item)}
                data-cy={`MenuList${item.id}Optionclick${cy}`}
              >
                <span data-cy={`MenuItem${cy}IconOrLabel`}>{item.icon ? item.icon : null} {item.label}</span>
              </button>
            );
          })
        : null}

      {children}
    </div>
  );
};
