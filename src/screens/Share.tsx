import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { Button, Heading, Paragraph, Image, TextInput } from "../components";
import { setSecret } from "../store/actions";
import style from "./Screen.module.scss";

interface ShareProps {

}


const Share: FC<ShareProps> = props => {

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const dispatch = useDispatch<Dispatch<AppAction>>();
    const reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
        if (reg.test(value)) {
            setValid(true);
            dispatch(setSecret(value));
            navigate('/send')
        } else {
            setValid(false);
        }
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value);
        if (reg.test(value)) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return (
        <div className={`${style.screen}`}>
            <div className={style.left}>
                <Heading level={1}>
                    Receive files secure directly
                </Heading>
                <Paragraph>
                    Collaborate on files
                </Paragraph>
                <div className={style.buttons}>
                    <TextInput value={value} onChange={handleChange} placeholder="Enter a secret key" />
                    <Paragraph
                        style={
                            {
                                fontSize: 12,
                                color: 'red',
                                visibility: valid ? 'hidden' : 'visible'
                            }
                        }
                    >
                        Try a stronger key
                    </Paragraph>
                    <Button onClick={handleClick} >
                        Start Sharing
                    </Button>
                </div>
            </div>
            <Image src="/assets/rocket.svg" ></Image>
        </div>
    );
}


export { Share }