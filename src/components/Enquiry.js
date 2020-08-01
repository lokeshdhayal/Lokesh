import React, { Component } from 'react'
const url = "http://localhost:8900/user"
class Enquiry extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            detail:''
        }
    }
    onChangeHandler = (e) =>{
        this.setState({
            username:e.target.value
        })
    }
    onChangeHandler1 = (e) =>{
        this.setState({
            detail:e.target.value
        })
    }
    onClickHandler = () =>{
        var id = Math.floor(Math.random()*1000)
        var data = {
            id:id,
            name:this.state.username,
            enquiry:this.state.detail
        }
        fetch(url,
            {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
    })
    .catch(err=>console.log(err))

        this.setState({
            username:'',
            detail:''
        })
    }
    render(){
    return(
        <div className="row justify-content-center p-3">
            <div className="col-6">
                <div className="card">
                    <div className="card-header">
                        Enter the detail for enquiry
                    </div>
                    <div className="card-body">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Enter your Name" value={this.state.username} onChange={this.onChangeHandler}/><br />
                        <label>Enquiry:</label>
                        <input  type="text" className="form-control" placeholder="Enter your Enquiry" value={this.state.detail} onChange={this.onChangeHandler1}/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={this.onClickHandler}>Submit your Enquiry</button>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Enquiry