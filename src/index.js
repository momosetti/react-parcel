import React,{Component} from "react";
import ReactDom from "react-dom";


class HelloWorld extends Component{
    render(){
        return(
            <div>
                <h1>Helloworld</h1>
            </div>
        )
    }
}

ReactDom.render(<HelloWorld/>,document.getElementById('root'))