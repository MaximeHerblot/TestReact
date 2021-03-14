import React from 'react';

class Case extends React.Component{
    render(){
        return (
            <td width="50" height="50" onClick={()=>this.props.onClick()}>{this.props.value}</td>
        )
    }
}

export default Case;