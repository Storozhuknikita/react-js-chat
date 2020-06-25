import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';
import {Messenger} from 'components/Messenger';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Messenger,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/1
        exact: true,
        component: Messenger,
    },
    {
        path: '*',
        exact: false,
        component: PageNotFound,
    },
];