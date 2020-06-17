import React from 'react';
import ReactDom from 'react-dom';

import {App} from './App';
import {App2} from './App2';
import {Messenger} from './Messenger';
// import './style.css';
import './main.scss';

//Вариант 1
// const element = React.createElement(
//     'h1',
//     {id: 'test', className: 'react-first'},
//     'Hello, React.js!',
// );

//Вариант 2. JSX
const element = (<h1 className="react-second" id="test2">Hello, React.js!</h1>);

const messagesData = ['Hi!', 'Hello', 'Привет!', 'Сообщение 1'];

const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
    //console.log(props);
    return data.map((item, index) => <Message text={item} key={index} />);
};

//Для ДЗ

//Неправильно, так как нарушается инкапсуляция
// const handleClick = (event) => {
//     console.log(event);
//     console.log('Btn click!');
// };
const Button = () => {
    //Правильно
    const handleClick = (event) => {
        console.log(event);
        console.log('Btn click!');
    };
    return <div onClick={handleClick}><b>Кнопка 1</b></div>
};

ReactDom.render(
    <div>
        {/* <MessagesList data={messagesData} />
        <Button /> */}
        {/* <App /> */}
        {/* <App2 /> */}
        <Messenger />
    </div>,
    document.getElementById('root'),
);