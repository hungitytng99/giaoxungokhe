import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image_main_1 from '~/assets/images/wedding/image-main-1.jpg';
import image_main_2 from '~/assets/images/wedding/image-main-2.jpg';
import image_main_3 from '~/assets/images/wedding/image-main-3.jpg';
import useIsInViewport from '~/hooks/useIsInViewPort';
import './Banner.sass';

function Banner({ name }) {
    const bannerRef = useRef(null);
    const isInViewPort = useIsInViewport(bannerRef, true);
    return (
        <div name={name} className="banner flex-center">
            <div ref={bannerRef}></div>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div className="banner__image flex-center">
                    <img src={image_main_3} />
                </div>
                <div className="banner__image flex-center">
                    <img src={image_main_1} />
                </div>
                <div className="banner__image flex-center">
                    <img src={image_main_2} />
                </div>
            </Carousel>
            <div className={`banner__intro flex-center ${isInViewPort && 'active'}`}>
                <div className="banner__box flex-center">
                    <div
                        className="banner__name boy"
                        style={{
                            '--delay': '0s',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Gặp mặt đồng hương Ngô Khê
                    </div>
                </div>
                <div
                    className="banner__date"
                    style={{
                        '--delay': '2s',
                    }}
                >
                    29/4/2023 - 02/05/2023
                </div>
            </div>
        </div>
    );
}

export default Banner;
