import { DetailedHTMLProps, FC } from "react";

import style from "./Heading.module.scss";

interface HeadingProps
    extends DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: FC<HeadingProps> = props => {
    const { level = 1, ...otherProps } = props;
    otherProps.className = `${style.heading} ${otherProps.className ?? ""}`
    const Tag = `h${level}`;
    return (
        <Tag {...otherProps}>
            {props.children}
        </Tag>
    );
}

export { Heading }