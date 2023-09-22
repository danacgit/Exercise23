import React from "react";
//import {Component} from "react";
class IDcardClass extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    // state = {} 
    render() { 
        return (
            <div className="card w-25 float-start mx-2 my-2 bg-grey">     
            <div className="card-body bg-warning px-0 py-0">
                <h3 className="card-title px-2">{this.props.name}</h3>
                <h2 className="card-text bg-info my-0 px-2">{this.props.des}</h2>
                <h5 className="card-text bg-info px-2">{this.props.age}</h5>
            </div>
        </div>

        );
    }
}
 
export default IDcardClass ;