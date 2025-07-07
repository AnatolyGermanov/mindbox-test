import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
};

const Button: FC<ButtonProps> = ({ children, className, active, ...props }) => {
    const buttonClasses = clsx(className, styles.btn, { [styles.active]: active });

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
