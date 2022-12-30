import { Spinner } from '..';
import * as s from './ScreenLoader.module.css';

export const ScreenLoader = ({ children, error }) => {
  return (
    <div className={s.wrapper}>
      {children}
      {!error && <Spinner />}
    </div>
  );
};
