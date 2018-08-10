import React, {Component} from 'react';
import PetTeam from './petTeam';

class Bracket extends Component {

    render(){
        return(
            <div className="bracket">
                <div className="bracket__quarterFinals">
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                    </div>
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                    </div>
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                    </div>
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><PetTeam teamClass="petTeam" iconClass="petTeam__quarterFinals__icons" /></div>
                    </div>
                </div>
                <div className="bracket__semiFinals">
                    <div className="bracket__semiFinals__pair">
                        <div className="bracket__semiFinals__pair__top-item"><PetTeam teamClass="petTeam__semiFinals" iconClass="petTeam__semiFinals__icons" /></div>
                        <div className="bracket__semiFinals__pair__bottom-item"><PetTeam teamClass="petTeam__semiFinals" iconClass="petTeam__semiFinals__icons" /></div>
                    </div>
                    <div className="bracket__semiFinals__pair">
                        <div className="bracket__semiFinals__pair__top-item"><PetTeam teamClass="petTeam__semiFinals" iconClass="petTeam__semiFinals__icons" /></div>
                        <div className="bracket__semiFinals__pair__bottom-item"><PetTeam teamClass="petTeam__semiFinals" iconClass="petTeam__semiFinals__icons" /></div>
                    </div>
                </div>
                <div className="bracket__finals">
                    <div className="bracket__finals__pair">
                        <div className="bracket__finals__pair__top-item"><PetTeam teamClass="petTeam__finals" iconClass="petTeam__finals__icons" /></div>
                        <div className="bracket__finals__pair__bottom-item"><PetTeam teamClass="petTeam__finals__bottom-item" iconClass="petTeam__finals__icons" /></div>
                    </div>
                </div>
                <div className="bracket__winner"><PetTeam teamClass="petTeam__winner" iconClass="petTeam__winner__icons" /></div>
            </div>
        )
    }
}
export default Bracket;