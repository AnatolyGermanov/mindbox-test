import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...props }) => {
    const inputClasses = clsx(className, styles.input);

    return <input className={inputClasses} {...props} />;
};

export default Input;
