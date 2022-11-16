import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'; 

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss'
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (<div className={cx('preview')} tabIndex="-1" {...props}>
              <PopperWrapper>
                <AccountPreview/>
              </PopperWrapper>
        </div>)
    }

    return ( 
        <div>
            <HeadlessTippy
            
                  interactive
                  placement='bottom'
                  delay={[800,0]}
                  offset={[-20,0]}
                  render={renderPreview}
             
             >
                <div className={cx('account-item')}>
                   <img
                       className={cx('avatar')}
                       src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/293057539_761399251969466_4878727224357313239_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K4bcg3DiocwAX_iamYP&_nc_oc=AQkrtSUAhj4ZdfkuArioDJ_zODsIMzlLPEyAnmJ8J8zR2tjCRG4-AWkLiFv2K6QkdOo&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBJZBtjl4aFVf_4A_sUDzxWq7XF0zCSipexZLJS-fnELA&oe=6379974F"
                       alt=""
                   />
                   <div className={cx('item-info')}>
                      <p className={cx('nickname')}>
                        <strong>nguyễn</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                      </p>
                      <p className={cx('name')}>nguyễn văn a</p>
                   </div>
                </div>
            </HeadlessTippy>
        </div>
     );
}

AccountItem.propTypes = {

}

export default AccountItem;