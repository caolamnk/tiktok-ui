import classNames from 'classnames/bind';

import styles from './Discovery.module.scss';
/* import PropTyles from 'prop-types'; */
import Button from '~/components/Button';
import { MusicDiscover, TopDiscover } from '~/components/Icons';

const cx = classNames.bind(styles);

const DataItems = [
    {
        icon: <TopDiscover />,
        title: 'suthatla',
    },
    {
        icon: <TopDiscover />,
        title: 'mackedoi',
    },
    {
        icon: <TopDiscover />,
        title: 'sansangthaydoi',
    },
    {
        icon: <MusicDiscover />,
        title: 'Yêu Đơn Phương Là Gì(MEE REMIX)',
    },
    {
        icon: <MusicDiscover />,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyetcvvvvvvvvvvvvvvv',
    },
    {
        icon: <MusicDiscover />,
        title: 'Thiên Thần Tình Yêu - RICSTAR',
    },
    {
        icon: <TopDiscover />,
        title: '7749hieuung',
    },
    {
        icon: <TopDiscover />,
        title: 'genzlife',
    },
    {
        icon: <MusicDiscover />,
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        icon: <MusicDiscover />,
        title: 'Thằng Hầu (Thái Hoàng Remix)',
    },
];

function DiscoveryItem({ to, label }) {
    return (
        <div className={cx('discoverContainer')}>
            <p className={cx('label')}>{label}</p>

            <div className={cx('discoverListItem')}>
                {DataItems.map((value, index) => (
                    <div key={index}>
                        <Button className={cx('discoverItem')} to={to} end>
                            <span className={cx('iconDiscover')}>{value.icon}</span>
                            <p className={cx('item')}>{value.title}</p>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscoveryItem;
