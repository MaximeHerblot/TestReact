import React from 'react';


class Case extends React.Component{
    constructor(props){
        super(props);
        this.state={
            test: "test",
        }
    }
    render(){
        return (
            <td width="50" height="50" className={"background"+this.props.class} onClick={()=>this.props.onClick()}>{this.props.value}</td>
        )
    }
}

export default Case;