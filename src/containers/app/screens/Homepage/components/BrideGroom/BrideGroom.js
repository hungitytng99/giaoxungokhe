import { useRef } from 'react';
import useIsInViewport from '~/hooks/useIsInViewPort';
import SecTitleFlower from '~/assets/images/bg/sec-title-flower.png';
import DSC_0969_min from '~/assets/images/wedding/DSC_0969-min.jpg';
import DSC_0976_min from '~/assets/images/wedding/DSC_0976-min.jpg';
import './BrideGroom.sass';
import Timeline from '../Timeline';

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
