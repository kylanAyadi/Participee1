import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';
import axios from 'axios'; */


export default class Progressbar extends Component {

    
   

    calculLikesRatio(){

        let sum = this.props.lk+this.props.dlk
        let like=this.props.lk;
        let ratio= (like / sum )*100
        let result = ratio + "%";
        
        return result;
    }

    calculDiLikesRatio(){
      
        let sum = this.props.lk+this.props.dlk
        let like=this.props.dlk;
        let ratio= (like*100)/sum;
        let result = ratio + "%";
       
        return result;

    }

    render() {
        
       return (
           <div className="progress" style={{marginBottom: "2%"}}>
                {this.calculLikesRatio}
                {this.calculDiLikesRatio}
                <div className="progress-bar" role="progressbar" style={{width: this.calculLikesRatio()}}  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"><span className="infoBulle" >{this.props.lk}</span></div>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: this.calculDiLikesRatio()}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">{this.props.dlk}</div>
            </div>
            )}
}