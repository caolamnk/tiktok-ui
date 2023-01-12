import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';


import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import Image from '~/components/Image';

import styles from './Video.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Video({ video }) {
    const preview = () => {
        

        <div tabIndex={-1}>
            <PopperWrapper>
                <AccountPreview data={video.user} />
            </PopperWrapper>
        </div>
        
    }

  

    return(
    <div className={cx('containerContent')}>
         <HeadlessTippy interactive delay={[0,500]} offset={[12,8]} render={preview} placement="bottom-start">
            <a href={`@${video.user.nickname}`} className={cx('videoLink')}>
                <Image
                src={video.user.avatar}
                alt={video.user.nickname}
                className={cx('videoImage')}
                fallback="https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/259698456_952796938983773_6293294570597152880_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=31pnshjK2eQAX_uQe3t&_nc_ht=scontent.fhan18-1.fna&oh=03_AdQzfnLN2R-ZDWSrcB7X4IQUnizU_pq-WOz2Q_mfsAAOmg&oe=63897E39"
                />
                <h3 className={cx('fullName')}>{`${video.user.first_name} ${video.user.last_name}`}</h3>
                
            </a>

         </HeadlessTippy>
         
    </div>

    )

}

export default Video;
