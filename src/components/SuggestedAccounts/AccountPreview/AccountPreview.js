import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import Button from "~/components/Button";
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
           <div>
             <header className={cx('header')}>
                  <img 
                   className={cx('avatar')}
                   src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/293057539_761399251969466_4878727224357313239_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K4bcg3DiocwAX_iamYP&_nc_oc=AQkrtSUAhj4ZdfkuArioDJ_zODsIMzlLPEyAnmJ8J8zR2tjCRG4-AWkLiFv2K6QkdOo&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBJZBtjl4aFVf_4A_sUDzxWq7XF0zCSipexZLJS-fnELA&oe=6379974F" 
                   alt=""
                   />
                 <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            
            </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                        <strong>nguyễn</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                      </p>
                      <p className={cx('name')}>nguyễn văn a</p>
                      <p className={cx('analytic')}>
                        <strong className={cx('value')}> 10M </strong>
                        <span className={cx('label')}>Follower</span>
                        <strong className={cx('value')}> 10M </strong>
                        <span className={cx('label')}>Like</span>
                      </p>
            </div>
        </div>
     );
}

export default AccountPreview;