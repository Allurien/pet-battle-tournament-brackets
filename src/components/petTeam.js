import React from 'react';
import dummyPets from './dummyPets';


export default props =>{
    return(
        <div className={props.teamClass}>
            <p className="petTeam__title">Pet Team Name</p>
            <div className={props.iconClass}>
                <img className="petTeam__icons__image" src={`https://wow.zamimg.com/images/wow/icons/large/${dummyPets.bronzeDrake.icon}.jpg`}/>
                <img className="petTeam__icons__image" src={`https://wow.zamimg.com/images/wow/icons/large/${dummyPets.seaPony.icon}.jpg`}/>
                <img className="petTeam__icons__image" src={`https://wow.zamimg.com/images/wow/icons/large/${dummyPets.sunfurPanda.icon}.jpg`}/>
            </div>
        </div>
    );
}