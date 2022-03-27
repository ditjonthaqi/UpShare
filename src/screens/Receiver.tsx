import { FC, useEffect, useState } from "react";
import { Button, Heading, Paragraph, Image, TextInput } from "../components";
import style from "../common/screen.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { validate } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setSecret } from "../store/actions";

interface ReceiverProps {

}


const Receiver: FC<ReceiverProps> = props => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    const secret = useSelector<AppStore, string>(store => store.secret!);
    
    useEffect(() => {
        if (!id || !validate(id)) {
            navigate('/');
        }
        dispatch(setLocation(id!));
    }, []);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
        if (reg.test(value)) {
            setValid(true);
            dispatch(setSecret(value));
            navigate('/accept');
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
        <div className={style.screen}>
            <div className={style.left}>
                <Heading level={1}>
                    Receive files secure directly
                </Heading>
                <Paragraph>
                    Collaborate on files
                </Paragraph>
                <div className={style.buttons}>
                    <TextInput onChange={handleChange} placeholder="Enter a secret key" />
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
                    <Button onClick={handleClick} style={{ width: 170 }} >Receive</Button>
                </div>
            </div>
            <Image src="/assets/mailbox.svg" ></Image>
        </div>
    );
}


export { Receiver }