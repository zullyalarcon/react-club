import React from "react";
import axios from 'axios';

import './Article.css';
import logo from "../../logo.png";

export class Article extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            classes: '',
            isLoaded: false
        };
    }
    componentDidMount () {
        this._isMounted = true;

        axios.get(this.props.render).then(res => {
            if (this._isMounted) {
                this.setState({
                    article: res.data,
                    classes: this.props.classes,
                    isLoaded: true
                })
            }
        }).catch(err => console.log(err))
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    render() {
        var { article = [], classes, isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div className={"article "+ classes} id={article.acf.get_category}>
                    <div className="logo"> <img alt="logo-club-liderazgo" src={logo} /></div>
                    <div className="content">
                        <div className="text">
                            <div className="article-content__title" dangerouslySetInnerHTML={{ __html: article.acf.get_title}}></div>
                            <div className="article-content__subtitle" dangerouslySetInnerHTML={{ __html: article.acf.get_subtitle}}></div>
                            <div className="article-content__description" dangerouslySetInnerHTML={{ __html: article.acf.get_description}}></div>
                        </div>
                        <div className="article-content__img"><img src={article.acf.get_images_column.url} alt={article.acf.get_title} /></div>
                    </div>
                </div>
            );
        } else {
            return (<div className="single-content">Cargando...</div>)
        }
    }
}

export default Article;