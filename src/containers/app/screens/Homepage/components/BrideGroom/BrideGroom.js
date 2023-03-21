import { useRef } from 'react';
import SecTitleFlower from '~/assets/images/bg/sec-title-flower.png';
import useIsInViewport from '~/hooks/useIsInViewPort';
import Timeline from '../Timeline';
import './BrideGroom.sass';

function BrideGroom({ name }) {
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name={name} className={`bridegroom flex-center ${isInViewPort && 'active'}`}>
            <img src={SecTitleFlower}></img>
            <div className="bridegroom__title">Chương trình</div>
            <div ref={viewRef}></div>
            <div
                style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                }}
            >
                <Timeline isStartAnimation={isInViewPort} />
            </div>
        </div>
    );
}

export default BrideGroom;
