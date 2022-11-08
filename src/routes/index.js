//Layout
import {HeaderOnly} from '~/components/Layout'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/components/Layout/components/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/folowing', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout:null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
