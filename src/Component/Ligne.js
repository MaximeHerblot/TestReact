import React from 'react';
import Case from './Case';

class Ligne extends React.Component{

    constructor(props){
        super(props);
        this.state={
            test: this.props.func,
        }
    }

    render(){
        
        const dataReturn = [];
    
        for (let ind= 1;ind<=this.props.colonne;ind++){
            
            dataReturn.push(<Case 
                    key={ind+this.props.ligne*8} 
                    value={this.props.ligneList[ind-1]} 
                    ind = {ind}
                    onClick={()=>this.props.func(this.props.ligne,ind)}
                    class={(ind+this.props.ligne)%2}
            />)
            
            
        }
        
        return [
            <tr key={this.props.ligne}>
                {dataReturn}
            </tr>
        ]
            
        
    }

}

export default Ligne;