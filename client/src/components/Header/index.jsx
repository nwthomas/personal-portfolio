import PropTypes from 'prop-types';
import React from 'react';
import type { HeaderProps } from './HeaderTypes';
import './_header.scss';

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <header className="header__container">
      <div>{siteTitle}</div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
