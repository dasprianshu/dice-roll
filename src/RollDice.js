import { Component } from "react";
import Die from './Die';
import './RollDice.css'

class RollDice extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            dieFace1 : 1,
            dieFace2 : 2,
            isRolling : false
        };
        this.randomFace = this.randomFace.bind(this);
    }
    randomFace(){

        let dieRoll1 = ( Math.floor(Math.random() * 6) + 1) ;
        let dieRoll2 = ( Math.floor(Math.random() * 6) + 1) ;
        this.setState(
            {isRolling : true }
        );
        setTimeout(() => {
            this.setState({dieFace1 : dieRoll1, dieFace2 : dieRoll2});
        }, 500);
        setTimeout(() => {
            this.setState({isRolling : false});
        }, 1000);
    }

    render() {
        return(
            <div className="RollDice">
                <div className="RollDice-Dice">
                    <div className={`Container ${this.state.isRolling && 'Swing'}`}>
                        <Die face = {this.state.dieFace1} isRolling = {this.state.isRolling}/>
                        <Die face = {this.state.dieFace2} isRolling = {this.state.isRolling}/>
                    </div>
                </div>
                
                <button onClick={this.randomFace} disabled={this.state.isRolling} >
                {this.state.isRolling ? "Rolling..." : "Roll Dice!!!"}
                </button>
            </div>
            
        );
    }
}

export default RollDice;