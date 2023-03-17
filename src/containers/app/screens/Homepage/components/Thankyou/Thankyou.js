import FooterCouple from '~/assets/images/bg/footer-couple.png';
import QR from '~/assets/images/wedding/qr.jpg';
import './Thankyou.sass';

function Thankyou(props) {
    return (
        <div className="thankyou flex-center">
            <img src={FooterCouple} alt="" className="thankyou__frame" />
            <div className="thankyou__qr">
                <div className="flex-center">Hiệp thông</div>
                <img className="qr__ngoc" src={QR} alt="" />
                <div
                    className="flex-center"
                    style={{
                        flexDirection: 'column',
                        marginTop: '10px',
                    }}
                >
                    <div
                        style={{
                            fontSize: '18px',
                            marginTop: '6px',
                        }}
                    >
                        NGUYEN XUAN TRUONG
                    </div>
                    <div
                        style={{
                            fontSize: '18px',
                            marginTop: '6px',
                        }}
                    >
                        Ngân hàng Ngoại Thương Việt Nam(VCB)
                    </div>
                    <div
                        style={{
                            fontSize: '18px',
                            marginTop: '6px',
                        }}
                    >
                        0351000091588
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thankyou;
