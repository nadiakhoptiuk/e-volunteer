import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Container = ({ children, className = '' }) => {
  return <div className={classNames('container', className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
