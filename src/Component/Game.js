import React from 'react';
import Ligne from './Ligne';
class Game extends React.Component {

    constructor(props){
        
        super(props);

        let list = Array(this.props.ligne).fill(Array(this.props.colonne).fill(null).slice());
        list[0] = [null,"B",null,"B",null,"B",null,"B",null,"B"];
        list[1] = ["B",null,"B",null,"B",null,"B",null,"B",null];

        for (let index = 2; index <= this.props.ligne-2; index++) {
            list[index] = [null,null,null,null,null,null,null,null,null,null]
            
        }

        list[this.props.ligne-2] = [null,"W",null,"W",null,"W",null,"W",null,"W"];
        list[this.props.ligne-1] = ["W",null,"W",null,"W",null,"W",null,"W",null];
        this.state= {
            colonne: this.props.colonne,
            ligne: this.props.ligne,
            whiteIsNext: true, 
            etat: list,
            firstPos : null,
            secondPos : null,
        }
    }

    move(firstPos,secondPos){
        const list = this.state.etat.slice();
        list[firstPos[0]][firstPos[1]]=null;
        list[secondPos[0]][secondPos[1]]="B";
        
        this.setState({ etat: list});
    }

    //Quand est ce qu'on peut cliquer sur la premiere pos

    setFirstPos(x,y) {
        if (this.state.etat[x-1][y-1]!=null){
            this.setState({
                firstPos:[x,y],
            })
        }
        
    }

    render(){
        const dataReturn = [];
        for (let ind= 1;ind<=this.state.ligne;ind++){
            dataReturn.push(<Ligne 
                key={ind} 
                colonne={this.state.colonne} 
                ligne={ind} 
                ligneList={this.state.etat[ind-1]}
                func ={this.setFirstPos.bind(this)}
            />);
        }
        console.log(this.state)
        return [
            <table key={1} >
                <tbody>
                    {dataReturn}
                </tbody>
                
            </table>
        ]
    
                
    }
}

export default Game;