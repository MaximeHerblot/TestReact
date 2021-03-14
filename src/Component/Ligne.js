import React from 'react';
import Case from './Case';

class Ligne extends React.Component{

    

    render(){
        
        const dataReturn = [];
    
        for (let ind= 1;ind<=this.props.colonne;ind++){
        
            dataReturn.push(<Case 
                    key={ind+this.props.ligne*8} 
                    value={this.props.ligneList[ind-1]} 
                    onClick={()=>this.props.func(this.props.ligne,ind)}
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