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
            whiteTurn: true, 
            etat: list,
            firstPos : null,
            
        }
    }

    move(x,y){
        this.setState({
            secondPos:[x,y],
        });
        const list = this.state.etat.slice();
        list[this.state.firstPos[0]][this.state.firstPos[1]]=null;
        list[x][y]= this.state.whiteTurn? "W" : "B";
        
        this.setState({ etat: list, firstPos:null, secondPos:null,whiteTurn: this.state.whiteTurn ? false: true});

    }

    //Quand est ce qu'on peut cliquer sur la premiere pos

    changeTurn(){
        this.setState({
            whiteTurn: !this.state.whiteTurn,
        })
    }    

    handleClick(x,y){
        if (this.state.firstPos===null){
            this.setFirstPos(x,y);
        } else {
            this.move(x,y);
        }
    }

    setFirstPos(x,y) {
        let turnColor;
        if (this.state.whiteTurn ===true){
            turnColor = "W";
        } else{
            turnColor = "B";
        }
        
        if (this.state.etat[x][y]===(turnColor)){
            this.setState({
                firstPos:[x,y],
            })
        }
        
    }
    
    

    render(){
        
        const dataReturn = [];
        for (let ind=0;ind<this.state.ligne;ind++){
            dataReturn.push(<Ligne 
                key={ind} 
                colonne={this.state.colonne} 
                ligne={ind} 
                ligneList={this.state.etat[ind]}
                func ={this.handleClick.bind(this)}
            />);
        }
        return [
            <p key={1}>
                Turn : {this.state.whiteTurn ? "White" : "Black"}
            </p>
            ,
            <table key={2} >
                <tbody>
                    {dataReturn}
                </tbody>
                
            </table>
        ]
    
                
    }
}

export default Game;