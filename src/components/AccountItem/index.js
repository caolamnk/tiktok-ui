import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx =classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
             <img className={cx('avatar')} src="https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/306649664_5704193729639174_5463995109850137306_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lyOWt8_0_j8AX8cbpNN&_nc_ht=scontent.fhan18-1.fna&oh=03_AdSjMSArU7NBLEKMEK6gf1X2LJn0OG0Dxe9i-YI2XLQnkg&oe=637E52D7" alt="anh" />
             <div className={cx('info')}>
                 <h4 className={cx('name')}>
                    <span>Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                 </h4>
                 <span className={cx('username')}>nguyenvana</span>
             </div>
        </div>
      );
}

export default AccountItem;