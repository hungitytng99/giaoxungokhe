import { useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CTS02130 from '~/assets/images/wedding/CTS02130.jpg';
import AppButton from '~/components/atomic/AppButton';
import useIsInViewport from '~/hooks/useIsInViewPort';
import DSC_0969_min from '~/assets/images/wedding/DSC_0969-min.jpg';
import DSC_0976_min from '~/assets/images/wedding/DSC_0976-min.jpg';
import './Events.sass';
function Events({ name }) {
    const groomMap = useRef(null);
    const bridgeMap = useRef(null);
    const viewRef = useRef(null);
    const isInViewPort = useIsInViewport(viewRef, true);
    return (
        <div name={name} className={`events ${isInViewPort && 'active'}`}>
            <div className="events__cover">
                <img className="events__cover-img" src={CTS02130} />
            </div>
            <div className="events__content">
                <div className="events__content-title">Sự Kiện Cưới</div>
                <div className="events__content-desc">
                    ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...
                </div>
            </div>

            <div className="events__content-box flex-center">
                <div
                    className="events__content-item left"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <div className="events__content-item-title">Tiệc cưới nhà gái</div>
                    <div className="events__content-item-box">
                        <img className="events__content-item-img" src={DSC_0969_min} alt="" />
                    </div>
                    <div className="events__content-item-date">10:30 AM 12/02/2023</div>
                    <div className="events__content-item-addr">Đình Làng Hà Hồi, Thường Tín, TP Hà Nội</div>
                    <a
                        ref={bridgeMap}
                        style={{ display: 'none' }}
                        href="https://goo.gl/maps/BKvtV9gxf1zYbtVm7"
                        target={'_blank'}
                    ></a>
                    <div
                        className="flex-center"
                        style={{
                            marginTop: '35px',
                        }}
                    >
                        <AppButton
                            title="Xem trên bản đồ"
                            onClick={() => {
                                bridgeMap.current.click();
                            }}
                        ></AppButton>
                    </div>
                </div>
                <div ref={viewRef}></div>
                <div
                    className="events__content-item"
                    style={{
                        '--delay': '0s',
                    }}
                >
                    <div className="events__content-item-title">Tiệc cưới nhà trai</div>
                    <div className="events__content-item-box">
                        <img className="events__content-item-img" src={DSC_0976_min} alt="" />
                    </div>
                    <div className="events__content-item-date">16:30 AM 11/02/2023</div>
                    <div className="events__content-item-addr">
                    Nhà Văn Hóa khu Ngô Khê, Phường Phong Khê, TP Bắc Ninh
                    </div>
                    <a
                        ref={groomMap}
                        style={{ display: 'none' }}
                        href="https://goo.gl/maps/2i3sGbaCjX65KhRz6"
                        target={'_blank'}
                    ></a>
                    <div
                        className="flex-center"
                        style={{
                            marginTop: '10px',
                        }}
                    >
                        <AppButton
                            title="Xem trên bản đồ"
                            onClick={() => {
                                groomMap.current.click();
                            }}
                        ></AppButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
