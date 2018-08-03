import React, {Component} from 'react';


class Nav extends Component {


render(){
    return(
        <div>
            <nav className="main-nav">
                <ul className="main-nav__list">
                    <li className="main-nav__item"><a href="#">home</a></li>
                    <li className="main-nav__item"><a href="#">all tournaments</a></li>
                </ul>
            </nav>
        </div>
    )

    
}

}
export default Nav;

