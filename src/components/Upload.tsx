import { ChangeEvent, DetailedHTMLProps, DragEventHandler, FC, useCallback, useState } from "react";
import style from './Upload.module.scss'
import { FileIcon } from '@radix-ui/react-icons'
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
interface UploadProps
    extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

const Upload: FC<UploadProps> = props => {
    const [input, setInput] = useState<any>();
    const callback = useCallback(el => {
        setInput(el);
    }, []);

    const handleDrop: DragEventHandler<HTMLDivElement> = event => {
        event.preventDefault();
        const newEvent: ChangeEvent<HTMLInputElement> = event as unknown as ChangeEvent<HTMLInputElement>;
        newEvent.target.files = event.dataTransfer.files;
        props?.onChange?.(newEvent);
    }

    const handleDropEnd: DragEventHandler<HTMLDivElement> = event => {
        event.preventDefault();
    }

    return (
        <div onDragOver={handleDropEnd} onDrop={handleDrop} onClick={() => input?.click()} className={`${style.upload}`} >
            <FileIcon color={"orangered"} height={100} width={100}></FileIcon>
            <input multiple ref={callback} style={{ display: "none" }} {...props} type="file" />
            <div className={`${style.text}`} >
                <Heading level={4}>
                    Upload files
                </Heading>
                <Paragraph>
                    Drag files or click to open file explorer
                </Paragraph>
            </div>
        </div>
    );
}

export { Upload }