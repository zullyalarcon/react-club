/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';

import './Single.css';
import logo from "../../logo.png";

import Modal from '../modal/Modal';
import Article from '../pages/Article';

export class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            single: [],
            classes: '',
            isLoaded: false,
            open: false,
            activeModal: null,
        };
        this.onOpenModal = this.onOpenModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
 
    componentDidMount () {
        axios.get(this.props.render)
        .then(res => this.setState({
            single: res.data,
            classes: this.props.section,
            view: this.props.idView,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    onOpenModal = (e, index) => {
        this.setState({
            activeModal: index
        })
    }

    hideModal() {
        this.setState({ activeModal: null })
    }

    downScreen = (e, url) => {
        let stateObj = { id: "100" };

        document.documentElement.scrollTop+= 712;
        window.history.replaceState(stateObj,"Page 3", "/#"+url); 
    }

    render() {
        var { single = [], classes, isLoaded, view } = this.state;
        let urlItem1,urlItem2,urlItem3,urlItem4,urlItem5,urlItem6, urlScroll;

        if (isLoaded) {
            const divStyle = {
                backgroundImage: 'url(' + single.acf.get_background_src.url + ')',
            };
            if (single.acf.get_item_1.get_url_icon !== "") {
                const url = single.acf.get_item_1.get_url_icon.split('/');
                urlItem1 = '#' + url[4];
            }
            if (single.acf.get_item_2.get_url_icon !== "") {
                const url = single.acf.get_item_2.get_url_icon.split('/');
                urlItem2 = '#' + url[4];
            }
            if (single.acf.get_item_3.get_url_icon !== "") {
                const url = single.acf.get_item_3.get_url_icon.split('/');
                urlItem3 = '#' + url[4];
            }
            if (single.acf.get_item_4.get_url_icon !== "") {
                const url = single.acf.get_item_4.get_url_icon.split('/');
                urlItem4 = '#' + url[4];
            }
            if (single.acf.get_item_5.get_url_icon !== "") {
                const url = single.acf.get_item_5.get_url_icon.split('/');
                urlItem5 = '#' + url[4];
            }
            if (single.acf.get_item_6.get_url_icon !== "") {
                const url = single.acf.get_item_6.get_url_icon.split('/');
                urlItem6 = '#' + url[4];
            }
            if (classes === 'team') {
                urlScroll = 'servicios';
            }
            if (classes === 'about') {
                urlScroll = 'mision';
            }
            if (classes === 'mission') {
                urlScroll = 'metodologia';
            }
            if (classes === 'methodologie') {
                urlScroll = 'equipo';
            }

            return (
                <div className={"single-content " + classes} style={divStyle} id={view}>
                    {classes === 'contact' ? (<div className="logo"> <img alt="logo-club-liderazgo" src={logo} /></div> ) : null }
                    <div className="single-content__title">
                        <div className="title-post" dangerouslySetInnerHTML={{ __html: single.acf.get_title_post}}></div>
                        <div className="subtitle-post" dangerouslySetInnerHTML={{ __html: single.acf.get_subtitulo}}></div>
                    </div>
                    <div className="single-content__description" dangerouslySetInnerHTML={{ __html: single.acf.get_body}}>
                    </div>
                    <div className="single-content__list">
                        <ul>
                            {!single.acf.get_item_1.get_icons_img ? null : (<li className="single-content__item">
                            {classes === 'team' ? (
                            <div>
                                <div className="list-icon" onClick={e => {this.onOpenModal(e, '236');}}><img src={single.acf.get_item_1.get_icons_img} alt={single.acf.get_item_1.get_title_icon} /></div>
                                <div className="list-title" onClick={e => {this.onOpenModal(e, '236');}}>{single.acf.get_item_1.get_title_icon}</div>
                                <div className="list-description" onClick={e => {this.onOpenModal(e, '236');}} dangerouslySetInnerHTML={{ __html: single.acf.get_item_1.get_description_icon}}></div>
                                <Modal onClose={this.hideModal} open={this.state.activeModal === '236'}>
                                    <Article render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/236" classes="team-angelica" />
                                </Modal>
                            </div> ) : (
                            <a href={urlItem1}>
                                <div className="list-icon"><img src={single.acf.get_item_1.get_icons_img} alt={single.acf.get_item_1.get_title_icon} /></div>
                                <div className="list-title">{single.acf.get_item_1.get_title_icon}</div>
                                <div className="list-description" dangerouslySetInnerHTML={{ __html: single.acf.get_item_1.get_description_icon}}></div>
                            </a> )}
                            </li>)}
                            {!single.acf.get_item_2.get_icons_img ? null : (<li className="single-content__item">
                            {classes === 'team' ? (
                            <div>
                                <div className="list-icon" onClick={e => {this.onOpenModal(e, '229');}}><img src={single.acf.get_item_2.get_icons_img} alt={single.acf.get_item_2.get_title_icon} /></div>
                                <div className="list-title" onClick={e => {this.onOpenModal(e, '229');}}>{single.acf.get_item_2.get_title_icon}</div>
                                <div className="list-description" onClick={e => {this.onOpenModal(e, '229');}} dangerouslySetInnerHTML={{ __html: single.acf.get_item_2.get_description_icon}}></div>
                                <Modal onClose={this.hideModal} open={this.state.activeModal === '229'}>
                                    <Article render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/229" classes="team-alejandro" />
                                </Modal>
                            </div>) : (
                            <a href={urlItem2}>
                                <div className="list-icon"><img src={single.acf.get_item_2.get_icons_img} alt={single.acf.get_item_2.get_title_icon} /></div>
                                <div className="list-title">{single.acf.get_item_2.get_title_icon}</div>
                                <div className="list-description" dangerouslySetInnerHTML={{ __html: single.acf.get_item_2.get_description_icon}}></div>
                            </a>)}
                            </li>)}
                            {!single.acf.get_item_3.get_icons_img ? null : (<li className="single-content__item">
                            {classes === 'team' ? (
                            <div>
                                <div className="list-icon" onClick={e => {this.onOpenModal(e, '238');}}><img src={single.acf.get_item_3.get_icons_img} alt={single.acf.get_item_3.get_title_icon} /></div>
                                <div className="list-title" onClick={e => {this.onOpenModal(e, '238');}}>{single.acf.get_item_3.get_title_icon}</div>
                                <div className="list-description" onClick={e => {this.onOpenModal(e, '238');}} dangerouslySetInnerHTML={{ __html: single.acf.get_item_3.get_description_icon}}></div>
                                <Modal onClose={this.hideModal} open={this.state.activeModal === '238'}>
                                    <Article render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/238" classes="team-david" />
                                </Modal>
                            </div>) : (
                            <a href={urlItem3}>
                                <div className="list-icon"><img src={single.acf.get_item_3.get_icons_img} alt={single.acf.get_item_3.get_title_icon} /></div>
                                <div className="list-title">{single.acf.get_item_3.get_title_icon}</div>
                                <div className="list-description" dangerouslySetInnerHTML={{ __html: single.acf.get_item_3.get_description_icon}}></div>
                            </a>)}
                            </li>)}
                            {!single.acf.get_item_4.get_icons_img ? null : (<li className="single-content__item">
                                <a href={urlItem4}>
                                <div className="list-icon"><img src={single.acf.get_item_4.get_icons_img} alt={single.acf.get_item_4.get_title_icon} /></div>
                                <div className="list-title">{single.acf.get_item_4.get_title_icon}</div>
                                <div className="list-description" dangerouslySetInnerHTML={{ __html: single.acf.get_item_4.get_description_icon}}></div>
                                </a>
                            </li>)}
                            {!single.acf.get_item_5.get_icons_img ? null : (<li className="single-content__item" >
                                <a href={urlItem5}>
                                <div className="list-icon"><img src={single.acf.get_item_5.get_icons_img} alt={single.acf.get_item_5.get_title_icon} /></div>
                                <div className="list-title">{single.acf.get_item_5.get_title_icon}</div>
                                <div className="list-description" dangerouslySetInnerHTML={{ __html: single.acf.get_item_5.get_description_icon}}></div>
                                </a>
                            </li>)}
                            {!single.acf.get_item_6.get_icons_img ? null : (<li className="single-content__item">
                                <a href={urlItem6}>
                                <div className="list-icon"><img src={single.acf.get_item_6.get_icons_img} alt={single.acf.get_item_6.get_title_icon} /></div>
                                <div className="list-title">{single.acf.get_item_6.get_title_icon}</div>
                                <div className="list-description" dangerouslySetInnerHTML={{ __html: single.acf.get_item_6.get_description_icon}}></div>
                                </a>
                            </li>)}
                        </ul>
                    </div>
                    <img onClick={e => {this.downScreen(e, urlScroll);}} src={require('../../assets/images/arrow-down.svg')} alt="club de liderazgo colombia" className="arrowDown" />
                </div>
            )
        } else {
            return (<div className="single-content">Cargando...</div>)
        }
    }
}

export default Single;
