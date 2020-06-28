import React from 'react';
import axios from 'axios';

import './Contact.css';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            single: [],
            isLoaded: false,
            open: false
        };
    }

    onOpenModal = e => {
        this.setState({
            open: !this.state.open
        });
    };

    componentDidMount () {
        axios.get('https://www.clubliderazgo.com/index.php/wp-json/acf/v3/pages/258')
        .then(res => this.setState({
            single: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    render() {
        
        var { single = [], isLoaded } = this.state;

        if (isLoaded) {
            const divStyle = {
                backgroundImage: 'url("https://clubliderazgo.com/wp-content/uploads/2020/04/black-rotary-telephone-on-white-surface-1416530-e1588377176912.png")',
            };
            return (
                <div id="mc_embed_signup" className={"single-content form-contact"} style={divStyle}>
                    <div className="single-content__title">
                        <div className="title-post">¿Preparado para ser un lider excepcional?</div>
                        <div className="subtitle-post">Contactenos Ahora</div>
                    </div>
                    <form action="https://clubliderazgo.us8.list-manage.com/subscribe/post?u=cb5785720e6af7a4b4653422f&id=da5f954976" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <label htmlFor="mce-NCOMPANY">Nombre de la Empresa  <span className="asterisk">*</span></label>
                                <input type="text" name="NCOMPANY" className="required" id="mce-NCOMPANY" placeholder="Nombre de la Empresa *" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">Nombre y Apellido  <span className="asterisk">*</span></label>
                                <input type="text" name="FNAME" className="required" id="mce-FNAME" placeholder="Nombre y Apellido *" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span></label>
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email *" />
                            </div>
                            <div className="mc-field-group size1of2">
                                <label htmlFor="mce-PHONE">Teléfono  <span className="asterisk">*</span></label>
                                <input type="text" name="PHONE" className="required" id="mce-PHONE" placeholder="Teléfono *" />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-SERVICES">Servicios de Interés </label>
                                <input type="text" name="SERVICES" className="" id="mce-SERVICES" placeholder="Servicios de Interés" />
                            </div>
                            <div className="mc-field-group message">
                                <label htmlFor="mce-MESSAGE">Mensaje </label>
                                <textarea name="MESSAGE" className="" id="mce-MESSAGE" placeholder="Mensaje"></textarea>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response"></div>
                                <div className="response" id="mce-success-response"></div>
                            </div>    
                            <div aria-hidden="true" className="input-x">
                                <input type="text" name="b_cb5785720e6af7a4b4653422f_da5f954976" tabIndex="-1" />    
                            </div>
                            <div className="clear">
                                <input type="submit" value="Contactar" name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                        </div>
                    </form>
                    <div className="single-content__description" dangerouslySetInnerHTML={{ __html: single.acf.get_body}}></div>
                    <div className="social-networks">
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
                </div>
            )
        } else {
            return (<div className="single-content">Cargando...</div>)
        }
    }

}
export default Contact;