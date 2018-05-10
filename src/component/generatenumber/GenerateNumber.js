import React, {Component} from 'react';

class GenerateNumber extends Component {
    tempHundredTicket = [];
    
    constructor(props) {
        super(props);
        this.state = {
            oneTicket: []
        }
    }

    componentDidMount() {
        for(var i = 0 ; i <100 ; i++){
            this.generateATicket();
        }
    }
    
    generateATicket = () => {
        var tempArray = [] , tempNumber = -1;
        while(tempArray.length !== 5){
            tempNumber = this.getRandomArbitrary(1,69);
            if(!tempArray.includes(tempNumber)){
                tempArray.push(tempNumber);
            }
        }
        
        while(tempArray.length !== 6){
            tempNumber = this.getRandomArbitrary(1,26);
            if(!tempArray.includes(tempNumber)){
                tempArray.push(tempNumber);
            }
        }
        this.tempHundredTicket.push(tempArray);

        this.setState({
           oneTicket : tempArray    
        });

    }

    getRandomArbitrary = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        
        return (   
            <div className="container border border-primary"> 
            {this.tempHundredTicket.map(function (eachTicket){
                var count = 0;
                return (<div key={eachTicket.toString()} className="row">
                    {eachTicket.map(function (item) {
                        if(5 === count){
                            count ++;
                            return (    
                                <div key={item.toString()} className="col-sm text-center rounded-circle bg-danger text-white">
                                    {item}
                                </div>)        
                        } else {
                            count ++;
                            return (    
                                <div key={item.toString()} className="col-sm rounded-circle bg-dark text-white text-center">
                                    {item}
                                </div>) 
                        } 
                    })}
                </div>)
                })}
            </div>
        );
    }
}

export default GenerateNumber;