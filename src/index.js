import React,{Component} from "react";
import ReactDom from "react-dom";
import './scss/app'


class HelloWorld extends Component{
    render(){
        return(
            <div className="content">
                <h1>Hi this is React & Parcel</h1>
                <p>So start doing a cool things</p>
            </div>
        )
    }
}

ReactDom.render(<HelloWorld/>,document.getElementById('root'))