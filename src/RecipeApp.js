import './RecipeApp.css';
import {Component} from "react";
import NavBar from "./NavBar";
import RecipeList from "./RecipeList";

class RecipeApp extends  Component {

    render(){

        return (
            <div>
                <NavBar/>
                <RecipeList/>
            </div>
        );
    }
}

export default RecipeApp;
