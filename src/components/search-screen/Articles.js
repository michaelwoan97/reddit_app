/*
    NAME        : Articles.js
    PROJECT     : Frontend programming assignment
    PROGRAMMER  : Nghia Nguyen
    DATE        : February 20, 2021
    DESCRIPTION : This file contain the Search component of the project
*/

import React from 'react';


class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLike: false,
        }
        this.likePost = this.likePost.bind(this)
    }

    likePost() {
        this.setState({isLike: !this.state.isLike})
    }
    render() {
        let base_url = 'https://reddit.com';

        return (
            <article className="Article">
            <a href={ base_url + this.props.article.permalink } target="_blank">
                <h3>{ this.props.article.title }</h3>
            </a>
            <button onClick={this.likePost}>
                { this.state.isLike
                    ? <i className="material-icons">star</i>
                    : <i className="material-icons" >star_border</i>
                }
                    
                
                </button>
            </article>
        )
    }
}

export default Article;