import React, { Component } from "react";
//npm install axios
import axios from "axios";
import { render } from "@testing-library/react";

export default class Footer extends Component {
    state = { details: [] }
    //componentDidMount() - Mounting Phase -> trainees[] -> filled with https://fakestoreapi.com/users
    componentDidMount() {
        axios.get('http://localhost:3000/investment').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }

render()
{
    return(
        <div className="row">
            {this.state.details.filter(details=>details.id<15).map(det =>
                <div className="col-md-2" key={det.id}>
                    
                            <img src={det.image} style={{ height:'150px', width:'250px',padding:'10px' }}></img>
                       
                </div>
            )}
        </div>
    )
}
}