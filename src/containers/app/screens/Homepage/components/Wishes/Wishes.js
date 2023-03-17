import { useRef } from 'react';
import InvitationLeft from '~/assets/images/bg/invitation-left-img.png';
import InvitationRight from '~/assets/images/bg/invitation-right-image.png';
import AppButton from '~/components/atomic/AppButton';
import useIsInViewport from '~/hooks/useIsInViewPort';
import Calendar from '../Calendar';
import anhnhatho from '~/assets/images/wedding/anhnhatho.jpg';
import './Wishes.sass';

function Wishes(props) {
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name="wishes" className={`wishes flex-center ${isInViewPort && 'active'}`}>
            <div className="flex-center">
                <div
                    className="wishes__container"
                    style={{
                        '--delay': '0s',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            marginBottom: '8px',
                            fontSize: '18px',
                        }}
                    >
                        Địa chỉ:
                    </div>
                    <div
                        style={{
                            marginBottom: '12px',
                            fontSize: '18px',
                            fontWeight: '700',
                        }}
                    >
                        Nhà thờ giáo xứ Ngô Khê
                    </div>
                    <img
                        style={{
                            width: '85%',
                            marginBottom: '22px',
                        }}
                        src={anhnhatho}
                    ></img>
                    <AppButton
                        onClick={() => {
                            let a = document.createElement('a');
                            a.target = '_blank';
                            a.href = 'https://goo.gl/maps/atst3KDjLzxa6r697';
                            a.click();
                        }}
                        title="Xem trên bản đồ"
                    ></AppButton>
                    <img className="wishes__image left" src={InvitationLeft}></img>
                </div>
                <div
                    style={{
                        position: 'relative',
                        '--delay': '0.8s',
                    }}
                    className="wishes__calendar"
                >
                    <Calendar />
                    <img className="wishes__image right" src={InvitationRight}></img>
                    <div ref={viewRef}></div>
                </div>
            </div>
        </div>
    );
}

export default Wishes;
