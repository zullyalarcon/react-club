import React from "react";
import axios from 'axios';

import './Gallery.css';
import Modal from '../modal/Modal';

export class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: [],
            show: false,
            isLoaded: false,
            activeModal: null
        };
        this.onOpenModal = this.onOpenModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount () {
        axios.get('https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts')
        .then(res => this.setState({
            video: res.data,
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
        window.history.replaceState(stateObj,"Page 6", "/#"+url);
    }

    render() {
        var { video = [], isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div className="video">
                    <div className="content">
                    {(video.filter(u=>(u.acf.get_category === 'video')).map(
                        u => <div key={u.id} id={u.id} className="item-background" style={{ backgroundImage: 'url(' + u.acf.get_images_column.url + ')' }}>
                        <div  className="item-title">{u.acf.get_title}</div><div className="item-link" onClick={e => {this.onOpenModal(e, u.id);}}>ver video</div>
                        <Modal onClose={this.hideModal} open={this.state.activeModal === u.id}><div dangerouslySetInnerHTML={{ __html: u.acf.get_description}}></div></Modal></div>
                    ))}
                    </div>
                    <img onClick={e => {this.downScreen(e, 'clientes');}} src={require('../../assets/images/arrow-down.svg')} alt="club de liderazgo colombia" className="arrowDown" />
                </div>
            );
        } else {
            return (<div className="video">Cargando...</div>)
        }
    }
}

export default Gallery;