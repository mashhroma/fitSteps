import { useEffect, useState } from "react";

export default function BannerAbout() {
    const images = ['01', '02', '03', '04', '05'];
    const [imagePath, setImagePath] = useState('./images/banner/01.jpg');
    const [imageIndex, setImageIndex] = useState(0);

    const renderBannerPath = () => {
        setTimeout(() => {
            setImagePath(`./images/banner/${images[imageIndex]}.jpg`);
            setImageIndex((imageIndex < images.length - 1) ? imageIndex + 1 : 0);
        },
            4000);
    };

    useEffect(() => {
        renderBannerPath();
    }, [imageIndex]);

    return (
        <div className='Banner'>
            <img src={imagePath} alt="Баннер" />
        </div>
    )
}

