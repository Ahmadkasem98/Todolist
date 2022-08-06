import React , {Component} from "react";

class AddItems extends Component {

    state = {
        name : '',
        age : ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === ""){
        return false 
    } else {
        this.props.AddItem(this.state)
        this.setState({
            name:'',
            age:''
        })
    }
}
    render (){
        return (
            <div className="Add">
             <form onSubmit={this.handleSubmit}>
                 <input type="text" placeholder="Enter your Name" id="name" onChange={this.handleChange} value={this.state.name} />
                 <input type="number" placeholder="Enter Your Age" id="age" onChange={this.handleChange} value={this.state.age} />
                 <input type="submit" value="Add Todo" />
                 
             </form>
            </div>
        )
    }
}
export default AddItems