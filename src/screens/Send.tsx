import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Upload } from "../components";
import { v4 } from 'uuid';
import { UploadItem } from "../containers/UploadItem";
import style from "./Screen.module.scss";
import { addItem, removeitem, setLocation } from "../store/actions";

interface SendProps {

}


const Send: FC<SendProps> = props => {
    const secret = useSelector<AppStore, string>(store => store.secret!);
    const navigate = useNavigate();
    const items = useSelector<AppStore, Item[]>(store => store.items!);
    const dispatch = useDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const files = e.target.files;
        if (!files) {
            return;
        }
        for (let file of files) {
            dispatch(addItem({ key: v4(), file }));
        }
    }

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
        if (!secret) {
            navigate('/');
        }
        dispatch(setLocation(v4()));
        navigate('/go');
    }

    useEffect(() => {
        if (!secret) {
            navigate('/');
        }
    }, []);

    return (
        <div
            style={
                {
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: 'normal',
                    width: '90%'
                }
            }

            className={`${style.screen}`}
        >

            <div>
                <Upload onChange={handleChange} />
            </div>
            <div style={{flex: 1}} className={style['item-list']} >
                {
                    items.map(item => (
                        <UploadItem
                            value={item.file.name}
                            key={item.key}
                            onClick={() => dispatch(removeitem(item.key))}
                        />
                    ))
                }

            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                {
                    items.length > 0 && (
                        <Button onClick={handleClick} filled >
                            Go
                        </Button>
                    )
                }
            </div>
        </div>
    );
}


export { Send }