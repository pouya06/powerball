import React, {Component} from 'react';

class GenerateNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneTicket: []
        }
    }

    componentDidMount() {
        this.gererateNumbers();
    }

    gererateNumbers = () => {
        var tempArray = [];
        for (var i = 0; i < 5; i++) {
            tempArray.push(this.getRandomArbitrary(1,69));
        }
        tempArray.push(this.getRandomArbitrary(1,26));
        this.setState({
           oneTicket : tempArray     
        });
        console.log("length", this.state.oneTicket.length);
    }

    getRandomArbitrary = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        return (
            <div class="container border border-primary">
                <ul>
                    {this.state.oneTicket.map(function (item) {
                            console.log("each item", item);
                            return <li>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default GenerateNumber;