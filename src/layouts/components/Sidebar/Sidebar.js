import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from './Menu';
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserGroupIcon, UserGroupIconActive } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
          <Menu>
            {/* Truyền icon vào dưới dạng 1 component */}
            <MenuItem  title="For you" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeIconActive/>}/>
            <MenuItem  title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon ={<UserGroupIconActive/>}/>
            <MenuItem  title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon ={<LiveIconActive/>}/>
          </Menu>

          <SuggestedAccounts label="Suggested accounts"/>
       {/*    <SuggestedAccounts label="Following"/> */}
       
    </aside>
}

export default Sidebar;