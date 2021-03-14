import React from 'react';
import Case from './Case';

class Ligne extends React.Component{

    setFirstPos1(x,y){
        console.log(x,y);
        this.props.func(x,y);
    }

    render(){

        const dataReturn = [];
    
        for (let ind= 1;ind<=this.props.colonne;ind++){
            

            if (this.props.ligneList[ind-1]){
                dataReturn.push(<Case 
                    key={ind+this.props.ligne*8} 
                    value={this.props.ligneList[ind-1]} 
                    onClick={()=>this.setFirstPos1(this.props.ligne,ind)}
                />)
            } else {
                dataReturn.push(<Case key={ind+this.props.ligne*8} value={this.props.ligneList[ind-1]}/>)
            }
        }

        return [
            <tr key={this.props.ligne}>
                {dataReturn}
            </tr>
        ]
            
        
    }

}

export default Ligne;