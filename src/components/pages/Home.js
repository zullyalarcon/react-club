import React from 'react';
import axios from 'axios';

import './Home.css';
import logo from "../../logo.png";

import Gallery from './Gallery';
import Single from '../single/Single';
import Contact from './Contact';
import Customer from './Customer';
import Services from './Services';
import MoreServices from './MoreServices';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: [],
            isLoaded: false
        };
        
    }
    
    componentDidMount () {
        axios.get('https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/26')
        .then(res => {
            this.setState({
                pages: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
    }

    downScreen = (e, url) => {
        let stateObj = { id: "100" };

        document.documentElement.scrollTop+= 712;
        window.history.replaceState(stateObj,"Page 3", "/#"+url); 
    }

    render() {
        var { pages = [], isLoaded } = this.state;
        
        if (isLoaded) {
            const divStyle = {
                backgroundImage: 'url(' + pages.acf.get_background_src.url + ')',
            };
            return (
                <div className="content app-main">
                    <div className="app-home" style={divStyle}>
                        <div className="title">
                            <img alt="logo-club-liderazgo" src={logo} />CLUB DE <strong>LIDERAZGO</strong>
                        </div>
                        <div className="subtitle" dangerouslySetInnerHTML={{ __html: pages.acf.get_subtitulo}}>
                        </div>
                        <div className="body" dangerouslySetInnerHTML={{ __html: pages.acf.get_body }}>
                        </div>
                        <div className={this.props.sticky ? "social-networks sticky" : "social-networks"}>
                            <ul className="social-nav">
                                <li className="social-item">
                                    <a className="social-link" href="https://www.facebook.com/clubdeliderazgocolombia/">
                                        <img alt="facebook" src={require('../../assets/images/bxl-facebook.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link linkedin" href="https://linkedin.com/in/club-de-liderazgo-colombia-922a39187">
                                        <img alt="linkedin" src={require('../../assets/images/bxl-linkedin.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="https://www.instagram.com/clubdeliderazgocolombia/">
                                        <img alt="instagram" src={require('../../assets/images/bxl-instagram.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link youtube" href="https://www.youtube.com/channel/UCMZK4ABW_LsbfYOaQIdFx-Q">
                                        <img alt="youtube" src={require('../../assets/images/bxl-youtube.svg')} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <img onClick={e => {this.downScreen(e, 'nosotros');}} src={require('../../assets/images/arrow-down.svg')} alt="club de liderazgo colombia" className="arrowDown" />
                    </div>
                    <div className="about-us" id="nosotros">
                        <Single render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/179" section="about" idView="nosotros" />
                        <Single render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/184" section="mission" idView="mision" />
                        <Single render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/170" section="methodologie" idView="metodologia" />
                        <Single render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/222" section="team" idView="equipo" />
                    </div>
                    <div className="services" id="servicios">
                        <Services />
                        <img onClick={e => {this.downScreen(e, 'mas-servicios');}} src={require('../../assets/images/arrow-down.svg')} alt="club de liderazgo colombia" className="arrowDown" />
                    </div>
                    <div className="moreservices" id="mas-servicios">
                        <MoreServices />
                    </div>
                    <div className="articles" id="experiencias">
                        <Gallery />
                    </div>
                    <div className="customer" id="clientes">
                        <Customer />
                    </div>
                    <div className="contact" id="contacto">
                        <Contact />
                    </div>
               </div>
            )
        } else {
            return (<div className="app-main">Cargando...</div>)
        }
    }
}

export default Home;
