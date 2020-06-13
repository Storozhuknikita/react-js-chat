import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

/*const element = React.createElement(
    'h1',
    {id: 'test', className: 'react-first'},
    'Hello React JS',
);*/

const element = (<h1 className="react-second" id="test2">Hello react JJJS</h1> );

const messagesData = ['Hi!', 'Hello', 'Привет', 'Сообщение 1'];
const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
    return data.map((item, index) => <Message text={item} key={index} />);
};

const handleClick = (event) => {
    console.log(event);
    console.log('Btn click!');
};

const Button = () => {
    return <div onClick={handleClick}>Кнопка 1</div>
};

ReactDom.render(
    <MessagesList data={messagesData} />,
    document.getElementById('root')
);

