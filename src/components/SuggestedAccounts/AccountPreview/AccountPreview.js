import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import Button from "~/components/Button";
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview({data}) {
    return ( 
        <div className={cx('wrapper')}>
           <div>
             <header className={cx('header')}>
                  <img 
                   className={cx('avatar')}
                   src={data.avatar} 
                   alt={data.nickname}
                   />
                 <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            
            </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick &&

                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        }
                      </p>
                      <p className={cx('name')}>{data.first_name} {data.last_name}</p>
                      <p className={cx('analytic')}>
                        <strong className={cx('value')}> {data.followers_count} </strong>
                        <span className={cx('label')}>Follower</span>
                        <strong className={cx('value')}> {data.likes_count} </strong>
                        <span className={cx('label')}>Like</span>
                      </p>
            </div>
        </div>
     );
}

AccountPreview.propTypes ={
  data: PropTypes.object.isRequired
}

export default AccountPreview;