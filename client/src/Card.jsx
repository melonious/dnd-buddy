// import { useContext } from "react";
// import { ClassContext } from "./Classes.jsx";
import { Icon } from '@iconify/react';

function Card({description}){

    // const klass = useContext(ClassContext);

    return(
        <div className="card">
            <Icon className="card-image" icon={Object.values(description)[1][0]}/>
            <div className="card-content">
                <h3 className="card-title">{Object.keys(description)[0]}</h3>
                <p className="card-text">{description[Object.keys(description)[0]]}</p>
            </div>
        </div>
    );
}

export default Card