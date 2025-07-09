
import css from './Button.module.css'
import clsx from 'clsx';

const Button = ({ children, className, ...restProps }) => {
  return (
    <button type='button' className={clsx(css.button, className)} {...restProps}>
      {children}
    </button>
  );
};

export default Button