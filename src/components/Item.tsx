import React, { ElementType, FC } from "react";
import style from './Item.module.scss';


interface ItemProps extends React.AllHTMLAttributes<HTMLOrSVGElement> {
    wrapper: ElementType;
}

const Item: FC<ItemProps> = props => {
    const { wrapper: Tag, ...otherProps } = props;
    otherProps.className = `${style.wrapper} ${otherProps.className ?? ""}`;
    return (
        <Tag {...otherProps}>
            {props.children}
        </Tag>
    );
}

export { Item }