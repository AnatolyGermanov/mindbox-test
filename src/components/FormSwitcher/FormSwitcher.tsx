import { FC } from 'react';
import { FormType } from '../../types/todo';
import Button from '../UI/Button/Button';
import styles from './FormSwitcher.module.css';

interface FormSwitcherProps {
    activeForm: FormType;
    onSwitchForm: (formType: FormType) => void;
}

const FORM_BUTTONS: FormType[] = ['add', 'search'];

const FormSwitcher: FC<FormSwitcherProps> = ({ activeForm, onSwitchForm }) => {
    return (
        <div className={styles.switcher}>
            {FORM_BUTTONS.map((type) => (
                <Button key={type} active={activeForm === type} onClick={() => onSwitchForm(type)}>
                    {type}
                </Button>
            ))}
        </div>
    );
};

export default FormSwitcher;
