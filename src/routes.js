import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';
import {MessengerRedux} from 'containers/MessengerContainer';

export const routes = [
    {
        path: ['/', '/chats/:id([0-9]+)'],
        exact: true,
        component: MessengerRedux,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    // {
    //     path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/1
    //     exact: true,
    //     component: MessengerRedux,
    // },
    {
        path: '*',
        exact: false,
        component: PageNotFound,
    },
];