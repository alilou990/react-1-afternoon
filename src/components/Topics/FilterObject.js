import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            people: [
                {
                    name: "Ali Stout",
                    age: 29,
                    hairColor: "Brown"
                },
                {
                    name: "Gemma Fillmore",
                    favoriteAnimal: "Unicorn",
                    age: 5
                },
                {
                    name: "Allen Stout",
                    title: "Self-Proclaimed Village Idiot",
                    townStatus: "Begrugingly Beloved"
                }
            ],
            userInput: '',
            filteredPeople: []
        }
        
       
    }
    handleChange(val){
        this.setState({userInput: val})
    }


    filterPeople(prop){
        let people = this.state.people;
        let filteredPeople = []

        for(let i = 0; i < people.length; i++){
            if(people[i].hasOwnProperty(prop)){
            filteredPeople.push(people[i])
        }
    }
    this.setState({filteredPeople: filteredPeople})
}
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.people, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterPeople(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectsRB">Filtered: {JSON.stringify(this.state.filteredPeople, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;