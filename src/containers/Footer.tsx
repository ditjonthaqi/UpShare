import { FC } from "react";
import { Paragraph } from "../components";
import style from './Footer.module.scss';

interface FooterProps {

}

const Footer: FC<FooterProps> = props => {
    return (
        <div className={`${style.footer}`}>
            <Paragraph>
                Copyright © 2022
                <a target="_blank" href="https://rs.linkedin.com/in/ditjon-thaqi-3a68441b1"> Ditjon Thaqi</a>
            </Paragraph>
        </div>
    );
}

export { Footer }