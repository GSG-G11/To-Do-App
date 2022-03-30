import React from "react";
import './Additem.css'
class Additem extends React.Component{
state={
    desc:""
}

handleChange=(e)=>{
    // console.log(e.target.value)
    this.setState({
    desc : e.target.value
}
    )
}
onSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.state)
    this.props.addItem(this.state)
}


    render(){
        return(
            <div className="AddItemForm">
                <form onSubmit={this.onSubmit} >
                    <h1>To Do App</h1>
                    <input type="text" id="desc" placeholder="Add task" onChange={this.handleChange} />
                    <input type="submit" value="Add" className="Add" />
                </form>
            </div>
        )
    }
}

export default Additem
