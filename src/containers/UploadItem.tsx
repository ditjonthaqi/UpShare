import { FC } from "react";
import { Item } from "../components/Item";
import style from '../common/item.module.scss';
import { Paragraph } from "../components";
import { Cross1Icon } from "@radix-ui/react-icons";

interface UploadItemProps {
    value: string;
    onClick?: (...args: any[]) => unknown;
}


const UploadItem: FC<UploadItemProps> = props => {
    return (
        <Item className={style['item']} wrapper={'li'}>
            <Paragraph>
                {props.value}
            </Paragraph>
            <Cross1Icon onClick={props?.onClick} />
        </Item>
    );
}


export { UploadItem }
