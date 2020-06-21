import React,{Component} from "react";
import "./Header.css"

export default class Header extends Component {

    render() {

        return(
            <header className="component-header">
                <img src={process.env.PUBLIC_URL + '/eqHeader.png'} width="10%" height="10%" alt="" />
                <div>
                    <h4 className="header-text">Data Presentation</h4>
                </div>
            </header>
        );
    }
}