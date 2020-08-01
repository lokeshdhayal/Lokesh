import React from 'react'

const url="http://localhost:8900/user"
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            data:''
        }
    }

    componentDidMount(){
        fetch(url,{method:"GET"})
        .then(rsp=>rsp.json())
        .then(rsp=>{
            this.setState({
                data:rsp
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
                            {data.enquiry}
                        </div>
                    </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="row justify-content-center p-3">
                {this.renderData(this.state)}
            </div>
        )
    }
}

export default Home