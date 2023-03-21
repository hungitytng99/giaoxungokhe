import classNames from 'classnames/bind';
import styles from './Timeline.module.css';

let cx = classNames.bind(styles);

const TIMELINES = [
    {
        duration: 'Ngày 29.4, thứ Bảy',
        desc: "Vietnam's largest university of technology",
        timeline: ['16h30: Thánh lễ cầu cho tổ tiên tại nghĩa trang', '19h30: Gặp mặt đồng hương – văn nghệ'],
        logoWidth: 30,
        spaceBottom: 60,
    },
    {
        duration: 'Ngày 30.4, Chúa Nhật',
        desc: 'A premium software development corporation based in Hanoi, Vietnam and a global network of sub-companies in Japan, the US and Sweden',
        timeline: [
            '9h30 : Thánh lễ kỷ niệm cung hiến nhà thờ',
            '11h00: Tiệc mừng khách Miền Nam, Hải ngoại',
            '18h30: Cung nghinh kiệu Thánh Giuse và Đức Mẹ',
            '20h00: Diễn nguyện, hoan ca',
        ],
        logoWidth: 34,
        spaceBottom: 40,
    },
    {
        duration: 'Ngày 1.5, thứ Hai',
        desc: 'Open-source company',
        timeline: ['9h30 : Thánh lễ mừng kính Thánh Giuse quan thày', '11h00: Tiệc mừng chung '],
        logoWidth: 36,
        spaceBottom: 60,
        durationStyle: {
            color: '#DC0000',
            fontWeight: 700,
        }
    },
    {
        duration: 'Ngày 2.5, thứ Ba',
        desc: 'Develop software which applies Blockchain/AI technology',
        timeline: ['7h00 : Hành hương, du lịch: Hạ Long hoặc Ninh Bình'],
        logoWidth: 30,
        spaceBottom: 30,
    },
];

function Timeline({ isStartAnimation }) {
    return (
        <div className={cx('timeline', isStartAnimation ? 'active' : '')}>
            {TIMELINES.map((timeline, index) => {
                const isRight = (index + 1) % 2 === 0;
                return (
                    <div key={index}>
                        <div className={cx('block', isRight ? 'right' : 'left')} style={{ '--delay': `${index}s` }}>
                            <div className={cx('title')} style={timeline?.durationStyle ?? {}}>{timeline.duration}</div>
                            <ul>
                                {(timeline?.timeline ?? []).map((time, index) => (
                                    <li className={cx('description')} key={index}>
                                        {time}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            style={{
                                height: timeline.spaceBottom,
                                '--delay': `${index + 0.5}s`,
                            }}
                            className={cx('break-space', isRight ? 'right' : 'left')}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}

export default Timeline;
