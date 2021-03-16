import React from 'react';
import Ligne from './Ligne';


class Game extends React.Component {

    constructor(props){
        
        super(props);

        let etatPartie = Array(this.props.ligne).fill(Array(this.props.colonne).fill(null).slice());
        etatPartie[0] = [null,"B",null,"B",null,"B",null,"B",null,"B"];
        etatPartie[1] = ["B",null,"B",null,"B",null,"B",null,"B",null];

        for (let index = 2; index <= this.props.ligne-2; index++) {
            etatPartie[index] = [null,null,null,null,null,null,null,null,null,null]
            
        }

        etatPartie[this.props.ligne-2] = [null,"W",null,"W",null,"W",null,"W",null,"W"];
        etatPartie[this.props.ligne-1] = ["W",null,"W",null,"W",null,"W",null,"W",null];
        const listEtatPion = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let obj;
                if ( ( ((i%2===0) && (j%2===1)) || ((i%2===1) && (j%2===0)) ) && (i<2) ){
                    
                    const json = `{"pos":[${i},${j}],"color" : "W", "avancement" : "haut"}`;
                    obj = JSON.parse(json);
                    listEtatPion.push(obj);
                } else if ( ( ((i%2===0) && (j%2===1)) || ((i%2===1) && (j%2===0)) ) && (i>7) ){
                    const json = `{"pos":[${i},${j}],"color" : "B", "avancement" : "bas"}`;
                    obj = JSON.parse(json);
                    listEtatPion.push(obj);
                }
                
            }
            
        }
        console.log(listEtatPion);
        

        this.state= {
            colonne: this.props.colonne,
            ligne: this.props.ligne,
            whiteTurn: true, 
            etat: etatPartie,
            firstPos : null,
            etatPion : listEtatPion,
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
    
    getListPion(color){
        const listPion=[];
        this.state.etat.forEach((ligne,ligneKey) => {
            ligne.forEach((colonne,colonneKey) => {
                if (colonne===color){
                    listPion.push([ligneKey,colonneKey]);
                }
            });
        });
        return listPion;
    }

    whichCaseClickable(){
        let listPion = [];
        if (this.state.whiteTurn){
            listPion = this.getListPion("W");
        } else {
            listPion = this.getListPion("B");
        }
        listPion.forEach((pos) => {
            
        });
        console.log(listPion);
    }

    getDirection
    render(){
        this.whichCaseClickable();
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