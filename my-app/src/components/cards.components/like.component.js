import React, { Component } from 'react';

//import LikeStatus from "./like_vars";
const LikeStatus ={
    None:0,
    Like:1,
    Dislike:2
}

export default class Like extends Component{
    constructor(props){
        super(props)

        this.state={
            color_like:"grey",
            color_dislike:"grey",
            
            like: LikeStatus.None,
            dislike:LikeStatus.None
        }
    }
    
    addLike(e){
        e.preventDefault();

        if(this.state.dislike === LikeStatus.Like){
            console.log("if");
            this.setState({
                color_like:"Dodgerblue",
                like: LikeStatus.Like,
                dislike: LikeStatus.None,
                color_dislike:"grey"
            })

            this.props.get_like(1);
            this.props.get_dislike(-1);

        }else if(this.state.like === LikeStatus.None){
            console.log("else if 1");
            this.setState({
                color_like:"Dodgerblue",
                like:LikeStatus.Like
            });

            this.props.get_like(1);

        }else if(this.state.like === LikeStatus.Like){
            console.log("else if 2");
            this.setState({
                like: LikeStatus.None,
                color_like:"grey"
            })

            this.props.get_like(-1);
        }
    }

    addDislike(e){
        e.preventDefault();
        if(this.state.like === LikeStatus.Like){
            console.log("D IF");
            this.setState({
                color_dislike:"red",
                like: LikeStatus.None,
                color_like:"grey",
                dislike: LikeStatus.Like
            })

            this.props.get_dislike(1);
            this.props.get_like(-1);
        }
        else if(this.state.dislike === LikeStatus.None){
            console.log("D ELSE IF 1");
            this.setState({
                color_dislike:"red",
                dislike:LikeStatus.Like
            });

            this.props.get_dislike(1)

        }else if(this.state.dislike === LikeStatus.Like){
            console.log("D ELSE IF 2");
            this.setState({
                dislike: LikeStatus.None,
                color_dislike:"grey"
            })

            this.props.get_dislike(-1)
        }
        
    }

    render(){

        return(
            <div className ="container" >
                 <i className="fas fa-thumbs-up fa-lg pointer" id="fa" onClick={(e)=>this.addLike(e)} style={{color:this.state.color_like, marginLeft:"25%", }}></i>
                <i className="fas fa-thumbs-down fa-lg pointer" onClick={(e)=>this.addDislike(e)} style={{color:this.state.color_dislike, marginLeft:"25%"}}></i>
            </div>
        )
    }
}