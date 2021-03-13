import React from 'react';
import Ligne from './Ligne';
class Game extends React.Component {

    constructor(props){
        
        super(props);
        let list = Array(this.props.ligne).fill(Array(this.props.colonne).fill(null));
        list[0] = [null,"B",null,"B",null,"B",null,"B",null,"B"];
        list[1] = ["B",null,"B",null,"B",null,"B",null,"B",null];

        list[8] = [null,"W",null,"W",null,"W",null,"W",null,"W"];
        list[9] = ["W",null,"W",null,"W",null,"W",null,"W",null];
        console.log(list);
        this.state= {
            colonne: this.props.colonne,
            ligne: this.props.ligne,
            whiteIsNext: true, 
            etat: list,
        }
    }

    move(){
        const list = this.state.etat.slice();
        console.log(list);
        list[1][0] = null;
        list[2][1] = "B";
        console.log(list);
        this.setState({ etat: list});
    }

    render(){
        const dataReturn = [];
        
        for (let ind= 1;ind<=this.state.ligne;ind++){
            dataReturn.push(<Ligne key={ind} colonne={this.state.colonne} ligne={ind} ligneList={this.state.etat[ind-1]}/>)
        }

        return [
            <table key={1} onClick={()=>this.move()}>
                <tbody>
                    {dataReturn}
                </tbody>
                
            </table>
        ]
    
                
    }
}

export default Game;