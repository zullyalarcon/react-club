import React from 'react';
import axios from 'axios';

import './Item.css';
import Section from '../section/Section';
import Modal from '../modal/Modal';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
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
            item: res.data,
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

    render() {
        var { item = [], isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div>
                    <div className="list-item">
                        <div className="item-img">
                            <img src={item.acf.get_images_thumbs_src} alt={item.acf.get_subtitle} />
                        </div>
                        <div className="item-title">
                            {item.acf.get_title}
                        </div>
                        <div className="item-subtitle">
                            {item.acf.get_subtitle}
                        </div>
                        <div className="item-description">
                            <div className="sub-title">
                                {item.acf.get_title}  {item.id}
                            </div>
                            <div className="sub-body" dangerouslySetInnerHTML={{ __html: item.acf.get_description }}></div>
                            <div onClick={e => {this.onOpenModal(e, item.id);}} className="btn-link">Ver más</div>
                        </div>
                    </div>
                    <Modal onClose={this.hideModal} open={this.state.activeModal === item.id}>
                    {item.acf.get_title === 'Liderazgo 4.0' ? (<Section />) : (
                        <div className="contentModal">
                            <div className="section-image">
                                <img src={item.acf.get_images_column.url} alt="" />
                            </div>
                            <ul style={{ backgroundImage: 'url("https://clubliderazgo.com/wp-content/uploads/2020/04/Mesa-de-trabajo-1@2x.png")'}}>
                                <li>
                                    <div className="section-background">
                                        <div className="section-title">{item.acf.get_title}</div>
                                        <div className="section-description" dangerouslySetInnerHTML={{ __html: item.acf.get_description}}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                    </Modal>
                </div>
            )
        } else {
            return (<div><div className="list-item">Cargando...</div></div>)
        }
    }
}


export default Item;