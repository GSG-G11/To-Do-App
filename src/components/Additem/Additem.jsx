import React from "react";

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
    console.log(this.state)
}


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} >
                    <input type="text" id="desc" placeholder="Enter the task" onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default Additem
