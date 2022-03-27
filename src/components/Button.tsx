import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";
interface ButtonProps extends
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    filled?: boolean;
}

const Button: FC<ButtonProps> = props => {
    const { filled, ...otherProps } = props;
    return (
        <button
            className={`${style.button} ${props.filled ? style.filled : ""}`}
            {...otherProps}
        >
            {props.children}
        </button>
    );
}

export { Button }