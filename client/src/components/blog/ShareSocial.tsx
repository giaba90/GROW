import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import styled from "styled-components";

const FloatingShareButtons = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 0 8px 8px 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const IconButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;

interface SocialIconsProps {
    pageTitle: string;
    url: string;
}

export default function ShareSocial({ pageTitle, url }: SocialIconsProps) {


    return (
        <FloatingShareButtons>
            <IconButton as={FacebookShareButton} url={url}>
                <FacebookIcon size={32} round={true} />
            </IconButton>
            <IconButton as={TwitterShareButton} url={url} title={pageTitle}>
                <TwitterIcon size={32} round={true} />
            </IconButton>
            <IconButton as={WhatsappShareButton} url={url} title={pageTitle}>
                <WhatsappIcon size={32} round={true} />
            </IconButton>
        </FloatingShareButtons>
    );
}
