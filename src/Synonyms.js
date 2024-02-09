import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="SynonymDisplay">
                <p> Similar words:
                    <br/>
                <ul className="Synonym">
                    {props.synonyms.map(function(synonym, index) {
                        return (
                        <li classNAme="col-2" key={index}>
                             {synonym}
                        </li>
                                )
})}
                </ul>
                </p>
            </div>
        );
    } else {
        return null;
    }
}