import React, {Component} from 'react';
import '../assets/css/app.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            pets: [],
        }
    }

    componentDidMount(){
        fetch('https://us.api.battle.net/wow/pet/?locale=en_US&apikey=nsyrekgfx9hzwxkav7bzed8pxygzd7h8')
            .then(res => res.json())
            .then(pets => {
                this.setState({
                    pets: pets.pets
                })
            });
    }

    render() {
        const petsArr = this.state.pets.map(pet => {
            return <li key={pet.creatureId}>{pet.name}</li>
        });
        return (
            <ul>
                {petsArr}
            </ul>
        )
    }
}
export default Home;