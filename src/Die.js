import { Component } from "react";
import "./Die.css";
class Die extends Component {

    render(){

        const faces = ['one', 'two', 'three', 'four', 'five', 'six'];
        
        return(
            <div className="Die">
                <i className={`fas fa-dice-${faces[(this.props.face) - 1]} ${this.props.isRolling && 'rolling'}`}></i>
            </div>
            
        );
    }
}

export default Die;