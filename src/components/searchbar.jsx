import React, {Component} from 'react';
import './searchbar.css'



class SearchBar extends Component {
    render() {
        return (
    <>
        <div>
            <input type="text" className="input" placeholder="Pesquise pelo nome" />  
            <button className="bntsearch">Pesquisar</button>
        </div>
    </>  
     )
}}

export default SearchBar;

