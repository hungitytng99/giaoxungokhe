import React from 'react';
import HeartIcon from '~/assets/images/header/heart.png';
import './Intro.sass';

function Intro(props) {
    return (
        <div className="intro flex-center">
            <div
                className="intro__box flex-center"
                style={{
                    flexDirection: 'column',
                }}
            >
                <div
                    className="intro__name boy"
                    style={{
                        fontSize: '44px',
                    }}
                >
                    Gặp mặt đồng hương Ngô Khê
                </div>
                <div
                    className="intro__name boy"
                    style={{
                        fontSize: '30px',
                    }}
                >
                    Đón nhau về nhà
                </div>
            </div>
            <div className="intro__desc">29/4/2023 - 02/05/2023</div>
        </div>
    );
}

export default Intro;
