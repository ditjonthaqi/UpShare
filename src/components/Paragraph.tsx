import { DetailedHTMLProps, FC } from "react";
import style from './Paragraph.module.scss';
interface ParagraphProps
    extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {

}


const Paragraph: FC<ParagraphProps> = props => {
    return (
        <p className={`${style.paragraph}`} {...props}>{props.children}</p>
    );
}

export { Paragraph }