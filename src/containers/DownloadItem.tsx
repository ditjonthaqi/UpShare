import { FC } from "react";
import { Item } from "../components/Item";
import style from '../common/item.module.scss';
import { Paragraph } from "../components";
import { ArrowDownIcon } from "@radix-ui/react-icons";

interface DonwloadItemProps {
    value: string;
    onClick?: (...args: any[ ]) => unknown;
    href?: string;
}


const DownloadItem: FC<DonwloadItemProps> = props => {
    return (
        <Item href={props.href} className={style['item']} wrapper={'a'}>
            <Paragraph>
                {props.value}
            </Paragraph>
            <ArrowDownIcon onClick={props?.onClick} />
        </Item>
    );
}


export { DownloadItem }
