import { DetailedHTMLProps, FC } from "react";
import style from './Image.module.scss';
interface ImageProps
    extends DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}

const Image: FC<ImageProps> = props => {
    return (
        <div className={`${style.image}`}>
            <img {...props} />
        </div>
    );
}

export { Image }