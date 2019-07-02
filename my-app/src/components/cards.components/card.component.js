
import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';
import axios from 'axios'; */

import Progressbar from './progressBar.component';
import Like from './like.component';

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state={

            new_like:0,
            new_dislike:0
        }
        this.callDelete = this.callDelete.bind(this);
        this.HandleClickLike = this.HandleClickLike.bind(this);
        this.HandleClickDislike = this.HandleClickDislike.bind(this);
    } 

    componentDidMount(){

        this.setState({
            new_like : this.props.movie.likes,
            new_dislike: this.props.movie.dislikes
        });
    } 

    callDelete() {
        
        this.props.delete_func(this.props.movie)
    }

    HandleClickLike(number){
        
        let temp = this.state.new_like + number;
        this.setState({
            new_like : temp
        });
    }
    HandleClickDislike(number){
        
        let temp = this.state.new_dislike + number;
        this.setState({
            new_dislike : temp
        })
    }

    render() {
       
        return (

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card border-primary" style={{ width: '18rem', marginBottom:"2%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Category: {this.props.movie.category}</h6>
                        <Like get_like={this.HandleClickLike} get_dislike={this.HandleClickDislike}/>
                        <Progressbar lk={this.state.new_like } dlk={this.state.new_dislike} />
                        <a href="#" className="btn btn-primary btn-block" onClick={ this.callDelete}>Delete</a>
                    </div>
                </div>
            </div>

        )
    }
}