import PropTypes from 'prop-types';
import Link from 'next/link';
import { buttonType, buttonLink } from './ButtonLink.module.css';

export const ButtonLink = ({ children, href, button, className, ...props }) => {
  return button ? (
    <button type="button" className={`${buttonType} ${className}`} {...props}>
      {children}
    </button>
  ) : (
    <Link href={href} className={`${buttonLink}  ${className}`} {...props}>
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  button: PropTypes.bool,
  className: PropTypes.string,
};
