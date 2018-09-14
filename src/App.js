import React, {Component} from "react"

class App extends Component { 
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            age: '',
            gender: '',
            location: '',
            dietary: []
        }
    }
    
    handleInput = e => {
        const {value, name} = e.target;  
        this.setState({[name]: value});
    }
    
    render() {
        return (
            <main>
                <form>
                    <input value={this.state.first} name="first" type="text" placeholder="First Name" onChange={this.handleInput} /><br />
                    <input value={this.state.last} name="last" type="text" placeholder="Last Name" onChange={this.handleInput} /><br />
                    <input value={this.state.age} name="age" type="number" min="1" placeholder="Age" onChange={this.handleInput} /><br />
                    
                    <input value="male" name="gender" type="radio" id="r1" checked={this.state.gender === 'male'} onChange={this.handleInput} />
                    <label htmlFor="r1"> M</label>
                    <br />
                    <input value="female" name="gender" type="radio" id="r2" checked={this.state.gender === 'female'} onChange={this.handleInput} />
                    <label htmlFor="r1"> F</label>
                    <br />
                    
                    <select name="location" onChange={this.handleInput}>
                        <option value="Iceland" defaultValue={this.state.location === "Iceland"}>Iceland</option>
                        <option value="Cyprus" defaultValue={this.state.location === "Cyprus"}>Cyprus</option>
                        <option value="Wales" defaultValue={this.state.location === "Wales"}>Wales</option>
                    </select>
                    <br />
                    
                    <input type="checkbox" name="Cabage" value={this.state.dietary.includes('Cabage')} />
                    <input type="checkbox" name="Soup" value={this.state.dietary.includes('Soup')} />
                    <input type="checkbox" name="Mushrooms" value={this.state.dietary.includes('Mushrooms')} />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.first +' '+ this.state.last}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
