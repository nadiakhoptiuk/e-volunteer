import PropTypes from 'prop-types';
import Link from 'next/link';

export const ButtonLink = ({ children, href, button, className, ...props }) => {
  return button ? (
    <button
      type="button"
      className={`flex items-center justify-center rounded-lg bg-blueAccent py-4 px-8 text-middle   transition duration-300 ease-in-out hover:bg-yellow hover:text-fontGrey focus:bg-yellow focus:text-fontGrey active:bg-blueDark active:text-white md:px-5  ${className}`}
      {...props}
    >
      {children}
    </button>
  ) : (
    <Link
      href={href}
      className={`flex items-center justify-center rounded-lg bg-blueAccent px-14 py-4 text-middle text-slate-50 transition duration-300 ease-in-out hover:bg-yellow hover:text-fontGrey focus:bg-yellow focus:text-fontGrey active:bg-blueDark active:text-white  ${className}`}
      {...props}
    >
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
