import { FC } from "react";
import { Button, Heading, Image, Paragraph } from "../components";
import style from "../common/screen.module.scss";
import { useNavigate } from "react-router-dom";

interface HomeProps {

}

const Home: FC<HomeProps> = props => {
    const navigate = useNavigate();
    return (
        <div className={style.screen}>
            <div className={style.left}>
                <Heading level={1}>
                    Easy and secure access to your content
                </Heading>
                <Paragraph>
                    Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
                </Paragraph>
                <div className={style.buttons}>
                    <Button onClick={() => navigate('share')} >Share</Button>
                    <Button onClick={() => navigate('/')} style={{ width: 170 }} filled>Learn More</Button>
                </div>
            </div>
            <Image src="/assets/locker.svg" ></Image>


        </div>
    );
}

export { Home }