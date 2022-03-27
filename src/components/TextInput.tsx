import { DetailedHTMLProps, FC } from "react";
import style from './TextInput.module.scss';
interface TextInputProps extends
    DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

const TextInput: FC<TextInputProps> = props => {
    return (
        <input className={`${style.input}`} type="text" {...props}  />
    );
}

export { TextInput }