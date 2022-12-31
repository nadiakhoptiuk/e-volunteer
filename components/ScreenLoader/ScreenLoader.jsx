import { Spinner } from '..';
import PropTypes from 'prop-types';
import * as s from './ScreenLoader.module.css';

export const ScreenLoader = ({ children, error }) => {
  return (
    <div className={s.wrapper}>
      {children}
      {!error && <Spinner />}
    </div>
  );
};

ScreenLoader.propTypes = {
  children: PropTypes.node,
  error: PropTypes.bool,
};
