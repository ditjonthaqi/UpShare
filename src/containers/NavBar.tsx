import { FC } from "react";
import { Item } from "../components/Item";
import style from './NavBar.module.scss';

interface NavBarProps {
    items: { href: string, title: string }[]
}

const NavBar: FC<NavBarProps> = props => {
    return (
        <ul className={style['nav-bar']}>
            {props.items.map((item, key) => (
                <Item key={key} wrapper={"li"}>
                    <a href={item.href}>{item.title}</a>
                </Item>
            ))}

        </ul>
    );
}


export { NavBar }