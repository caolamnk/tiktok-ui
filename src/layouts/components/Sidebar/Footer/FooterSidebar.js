import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <footer className={cx('footerContainer')}>
                <div className={cx('progams')}>
                    <span className={cx('letterContact')}>
                        <a href="#">About</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Newsroom</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Contact</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Careers</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">ByteDance</a>
                    </span>
                </div>
                <div className={cx('progams')}>
                    <span className={cx('letterContact')}>
                        <a href="#">Tiktok for Good</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Advertise</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Developers</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Tiktok Rewards</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Tiktok Browse</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Tiktok Embeds</a>
                    </span>
                </div>
                <div className={cx('progams')}>
                    <span className={cx('letterContact')}>
                        <a href="#">Help Center</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Safety Center</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Creator Portal</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Community Guidelines</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Transparency</a>
                    </span>
                    <span className={cx('letterContact')}>
                        <a href="#">Accessibility</a>
                    </span>
                </div>
                <div className={cx('progams')}>
                    <span className={cx('letterContact')}>
                        
                        <a href="#" className={cx('plusContact')}>Thêm</a>
                    </span>
                </div>
                <div className={cx('letterContact')}>© 2023 TikTok clone</div>
            </footer>
        </div>
    );
}

export default Footer;
