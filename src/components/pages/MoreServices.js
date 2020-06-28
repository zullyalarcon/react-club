import React from 'react';

import './MoreServices.css';

export class MoreServices extends React.Component {

    downScreen = (e, url) => {
        let stateObj = { id: "100" };

        document.documentElement.scrollTop+= 712;
        window.history.replaceState(stateObj,"Page 6", "/#"+url);
    }

    render() {
        return (
            <div className="more-services-list" style={{ backgroundImage: 'url("https://clubliderazgo.com/wp-content/uploads/2020/04/black-and-white-chairs-conference-room-discussion-1181400@2x.jpg")'}}>
                <div className="list-subtitle"><span>Conferencias - Asesorías - Entrenamientos</span></div>
                <div className="list-title"><span>Puedes contar con nosotros también para</span></div>
                <ul>
                    <li>Dominancia cerebral.</li>
                    <li>Motivación y propósito de vida.</li>
                    <li>Poder del Ahora.</li>
                    <li>Felicidad en el Trabajo.</li>
                    <li>Salario Emocional.</li>
                    <li>Mundo de las ventas.</li>
                    <li>Inteligencial Emocional.</li>
                    <li>Resiliencia en las Ventas.</li>
                </ul>
                <img onClick={e => {this.downScreen(e, 'experiencias');}} src={require('../../assets/images/arrow-down.svg')} alt="club de liderazgo colombia" className="arrowDown" />
            </div>
        )
    }
}
export default MoreServices;
