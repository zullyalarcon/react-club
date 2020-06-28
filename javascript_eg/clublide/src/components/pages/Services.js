import React from 'react';

import { Item } from '../item/Item';

import './Services.css';

export class Services extends React.Component {
    render() {
        return (
            <div className="servicesD">
                <div className="title"><span>Conoce nuestro <strong>Servicios</strong></span></div>
                <div className="lists">
                    <Item render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/57" />
                    <Item render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/73" />
                    <Item render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/148" />
                    <Item render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/152" />
                    <Item render="https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts/158" />
                    <div className="services-more"> 
                        <a href="#mas-servicios">Más Servicios</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;