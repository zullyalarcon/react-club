import React from "react";
import axios from 'axios';

import './Section.css';

export class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            section: [],
            isLoaded: false
        };
    }

    componentDidMount () {
        axios.get('https://www.clubliderazgo.com/index.php/wp-json/acf/v3/posts')
        .then(res => this.setState({
            section: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    render() {
        var { section = [], isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div className="section">
                    <div className="content">
                        <div className="section-image">
                            <img src="https://clubliderazgo.com/wp-content/uploads/2020/04/68479420_509348373157004_9144889334950789120_n_2x.jpg" alt="" />
                        </div>
                        <ul style={{ backgroundImage: 'url("https://clubliderazgo.com/wp-content/uploads/2020/04/Mesa-de-trabajo-1@2x.png")'}} >
                        {(section.filter(u=>(u.acf.get_category === 'liderazgo')).map(
                            u => <li key={u.id}><div key={u.id} id={u.id} className="section-background">
                            <div className="section-title">{u.acf.get_title}</div>
                            <div className="section-description" dangerouslySetInnerHTML={{ __html: u.acf.get_description}}></div>
                            </div></li>
                        ))}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (<div className="section">Cargando...</div>)
        }
    }
}

export default Section;