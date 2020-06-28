import React from "react";
import axios from 'axios';

import './Customer.css';

export class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            isLoaded: false,
        };
    }

    componentDidMount () {
        axios.get('https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/250')
        .then(res => this.setState({
            customer: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    downScreen = (e, url) => {
        let stateObj = { id: "100" };

        document.documentElement.scrollTop+= 712;
        window.history.replaceState(stateObj,"Page 6", "/#"+url);
    }

    render() {
        var { customer = [], isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div className="customer" style={{ backgroundImage: 'url(' + customer.acf.get_background_src.url + ')' }}>
                    <div className="content">
                        <div className="customer-subtitle">{customer.acf.get_title_post}</div>
                        <div className="customer-title" dangerouslySetInnerHTML={{ __html: customer.acf.get_subtitulo}}></div>
                        <div className="customer-logos slider">
                            <div className="slide-track">
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/utolima-300x211.png" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/colombia_minutodios_0-300x263.jpg" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/segurosbolivar-300x99.png" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/gabriel_firenlace-e1592259425182-300x104.jpg" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/basicfarm-300x89.jpeg" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/banco-occidente-e1592259497162-300x102.png" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/adl-e1592259556322.png" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/acestudiosexterior.png" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/1280px-Banco_Popular_Colombia_logo.svg_-300x54.png" alt="" /></div>
                                <div className="slide"><img src="https://clubliderazgo.com/wp-content/uploads/2020/06/1200px-Logo_Gasco_2016.svg_-300x125.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <img onClick={e => {this.downScreen(e, 'contacto');}} src={require('../../assets/images/arrow-down.svg')} alt="club de liderazgo Colombia" className="arrowDown" />
                </div>
            );
        } else {
            return (<div className="customer">Cargando...</div>)
        }
    }
}

export default Customer;