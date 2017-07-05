import React, {Component} from 'react'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {players: 5};
        this.updateQueue = this.updateQueue.bind(this);
        this.getPlayersInQueue = this.getPlayersInQueue.bind(this);
    }

    componentDidMount() {
        this.getPlayersInQueue();
    }

    getPlayersInQueue() {
        return fetch('https://gampre.pl/play-api/getPlayers/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    players: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateQueue() {
        let number = this.state.players+1;
        let url = 'https://gampre.pl/play-api/updatePlayers?number='+number;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        this.getPlayersInQueue();
    }

    render() {
        return (
            <div className="content">
                <h1>Ludzi w kolejce: {this.state.players}</h1>
                <button className="btn btn-red" onClick={this.updateQueue}>Dołącz</button>
            </div>
        )
    }
}

export default Main

