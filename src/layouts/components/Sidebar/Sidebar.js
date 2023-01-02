import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import DiscoveryItem  from './Discovery';
import {
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
    UserGroupIcon,
    UserGroupIconActive,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import Footer from './Footer/FooterSidebar';




/* import { AuthUserContext } from '~/App'; */

const cx = classNames.bind(styles);

const PER_PAGE = 5;
/* const INIT_PAGE = 1; */

function Sidebar() {
    const [isSeeAll, setIsSeeAll] = useState(PER_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followPerPage, setFollowPerPage] = useState(PER_PAGE);
    const [followingUsers, setFollowingUser] = useState([]);
    /* const authUser = useContext(AuthUserContext); */
    /* const accessToken = authUser && authUser.meta.token ? authUser.meta.token : ''; */

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: isSeeAll })
            .then((data) => {
                if (Array.isArray(data)) {
                    setSuggestedUsers(data);
                }
            })

            .catch((error) => console.log(error));
    }, [isSeeAll]);

    //User Suggested
    const onViewChange = () => {
        // Get perPage = 20
        if (suggestedUsers.length === PER_PAGE) {
            setIsSeeAll(PER_PAGE * 4);
        } else {
            setIsSeeAll(PER_PAGE);
        }
    };

    //User Following
    useEffect(() => {
        /*   if(accessToken) { */
        userService
            .getSuggested({ page: 3, perPage: followPerPage })
            .then((data) => {
                if (Array.isArray(data)) {
                    setFollowingUser(data);
                }
            })

            .catch((error) => console.log(error));

        /* } else {
            setFollowingUser([])
        } */
    }, [/* accessToken, */ followPerPage]);

    function onViewMoreFollowing() {
        if (followingUsers.length === PER_PAGE) {
            setFollowPerPage(PER_PAGE * 4);
        } else {
            setFollowPerPage(PER_PAGE);
        }
    }
    // Discovery Item for Discover
   
    return (
        <aside className={cx('wrapper', 'scrollBar')}>
            <Menu>
                {/* Truyền icon vào dưới dạng 1 component */}
                <MenuItem
                    title="For you" 
                    to={config.routes.home} 
                    icon={<HomeIcon />} 
                    activeIcon={<HomeIconActive />} 
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem 
                    title="LIVE" 
                    to={config.routes.live} 
                    icon={<LiveIcon />} 
                    activeIcon={<LiveIconActive />} 
                />
            </Menu>

            <SuggestedAccounts
                label="Suggested accounts"
                longLabel={suggestedUsers.length === PER_PAGE ? 'See All' : 'See Less'}
                data={suggestedUsers}
                onViewChange={onViewChange}
            />
            <SuggestedAccounts
                label="Following"
                longLabel={followingUsers.length === PER_PAGE ? 'See more' : 'See less'}
                data={followingUsers}
                onViewChange={onViewMoreFollowing}
            />
           
                
            <DiscoveryItem
                 label="Khám phá"
                 to={config.routes.home}
             /> 

            <Footer/>    
           
        </aside>
    );
}

export default Sidebar;
