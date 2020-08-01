import React,{Component} from 'react'
import {Link} from 'react-router-dom'
const url = " http://localhost:8900/courses"
class Courses extends Component{
    
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((rsp)=>rsp.json())
        .then((resp) => {
            this.setState({
                data:resp
            })
        })
    }
    renderData = ({data}) =>{
        if(data){
            return data.map(data=>{
                return (
                    <div className="col-6" key={data.id}>
                        <br />
                    <div className="card justify-content-center">
                        <div className="card-header">
                        <h3>{data.name}</h3>
                        </div>
                        <div className="card-body">
                            {data.detail}
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-info" to="/enquiry">Enquiry</Link>
                        </div>
                    </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div>
                <br />
            <div className="row">
            {this.renderData(this.state)}
            </div>
            <br />
            </div>
        )
    }
}

export default Courses