import {Component} from "react";
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <h1>Recipe App</h1>
                </div>
                <div className="buttons">
                    <span>New Recipe</span>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact Us</span>
                </div>
            </div>
        )
    }
}

export default NavBar;
