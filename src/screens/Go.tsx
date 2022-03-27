import { IGunInstance, SEA } from "gun";
import { FC, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heading, Paragraph } from "../components";
import { Item } from "../components/Item";
import { v4 } from "uuid";
import style from "./Screen.module.scss";
import 'gun/sea';

interface GoProps {

}

const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result?.toString());
        }
        fileReader.onerror = err => {
            reject(err);
        }
    });
}

const Go: FC<GoProps> = props => {

    const [secret, items, gun, location] = useSelector<AppStore, [string, Item[], IGunInstance, string]>(store => (
        [store.secret!, store.items!, store.gun!, store.location!]
    ));
    const ref = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    useEffect(() => {
        window.onbeforeunload = e => {
            e.preventDefault();
            indexedDB.deleteDatabase('radata');
        }
        if (!secret || !location) {
            navigate('/');
        }

        for (let item of items) {
            toBase64(item.file).then(async text => {
                const enc = await SEA.encrypt(text, secret);
                gun.get(location).put({ [item.file.name]: enc });
            });
        }
        return () => {
            for (let item of items) {
                gun.get(location).put({ [item.file.name]: null });
            }
        }
    }, []);

    const handleClick = () => {
        navigator.clipboard.writeText(document.getElementById('link')?.innerText!);
    }
    return (
        <>
            <div style={{ flexDirection: 'column', width: '90%' }} className={`${style.screen}`}>
                <Heading className="loading">
                    🚀
                </Heading>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Item onClick={handleClick} style={{ cursor: 'pointer', width: 150 }} wrapper={"div"} >
                        <Paragraph>
                            Copy link 📋
                        </Paragraph>
                        <Paragraph id="link" style={{ display: 'none' }} >
                            {window.location.origin + '/recevie/' + location}
                        </Paragraph>
                    </Item>
                </div>
                <Paragraph  >
                    Once the session is closed
                    data can't be transmitted
                </Paragraph>
            </div>
        </>
    );
}


export { Go }