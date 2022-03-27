import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Paragraph, Upload } from "../components";
import { v4 } from 'uuid';
import { UploadItem } from "../containers/UploadItem";
import style from "./Screen.module.scss";
import { addItem, removeitem, setLocation } from "../store/actions";
import { DownloadItem } from "../containers/DownloadItem";
import { IGunInstance, SEA } from "gun";
import { Item } from "../components/Item";
import { ArrowDownIcon } from "@radix-ui/react-icons";
interface AcceptProps {

}


const Accept: FC<AcceptProps> = props => {
    const [loading, setLoading] = useState(true);
    const [secret, location, gun] = useSelector<AppStore, [string, string, IGunInstance]>(store => (
        [store.secret!, store.location!, store.gun])
    );
    const navigate = useNavigate();
    const [items, setItems] = useState<{ base64: string, name: string }[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!secret || !location) {
            navigate('/');
        }

        gun.get(location).map(async (item, key) => {
            const base64 = await SEA.decrypt(item, secret);
            setItems(items => [...items, { base64, name: key }])
        });

        return () => {
            for (let item of items) {
                gun.get(location).put({ [item.name]: null });
                console.log('hej');
            }
            localStorage.removeItem('gun');
        }

    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setLoading(false);
        }
    }, [items]);

    return (
        <>
            {
                !loading ? (
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

                        <div className={style['item-list']} style={{ height: '100%' }} >
                            {
                                items.map((item, key) => (
                                    <Item
                                        style={{ textDecoration: 'none' }}
                                        key={key}
                                        download={item.name}
                                        href={item.base64}
                                        className={style['item']}
                                        wrapper={'a'}>
                                        <Paragraph>
                                            {item.name}
                                        </Paragraph>
                                        <ArrowDownIcon />
                                    </Item>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className={`${style.screen}`} style={{ flexDirection: 'column' }} >
                        <Heading className="loading" style={{ margin: 'auto' }}>
                            🚀
                        </Heading>
                        <Paragraph style={{ margin: 'auto', textAlign: 'center' }}>
                            Wating for data
                        </Paragraph>
                    </div>
                )
            }
        </>
    );
}


export { Accept }