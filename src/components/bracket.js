import React, {Component} from 'react';

class Bracket extends Component {

    render(){
        return(
            <div className="bracket">
                <div className="bracket__quarterFinals">
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                    <div className="bracket__quarterFinals__pair">
                        <div className="bracket__quarterFinals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__quarterFinals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                </div>
                <div className="bracket__semiFinals">
                    <div className="bracket__semiFinals__pair">
                        <div className="bracket__semiFinals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__semiFinals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                    <div className="bracket__semiFinals__pair">
                        <div className="bracket__semiFinals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__semiFinals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                </div>
                <div className="bracket__finals">
                    <div className="bracket__finals__pair">
                        <div className="bracket__finals__pair__top-item"><p className="bracket__pair__paragraph">0</p></div>
                        <div className="bracket__finals__pair__bottom-item"><p className="bracket__pair__paragraph">0</p></div>
                    </div>
                </div>
                <div className="bracket__winner">0</div>
            </div>
        )
    }
}
export default Bracket;