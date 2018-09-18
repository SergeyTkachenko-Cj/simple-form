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
        name === 'dietary' ? 
        this.setState(prev => (
            prev.dietary.includes(value) ? 
            { dietary: prev.dietary.filter(i => i !== value) } : 
            { dietary: prev.dietary.concat(value) }
        )) : this.setState({[name]: value});
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        value={this.state.first} 
                        name="first" 
                        type="text" 
                        placeholder="First Name" 
                        onChange={this.handleInput} 
                    />
                    <br />
                    <input 
                        value={this.state.last} 
                        name="last" 
                        type="text" 
                        placeholder="Last Name" 
                        onChange={this.handleInput} 
                    />
                    <br />
                    <input 
                        value={this.state.age} 
                        name="age" 
                        type="number" 
                        min="1" 
                        placeholder="Age" 
                        onChange={this.handleInput} 
                    />
                    <br />
                    
                    <input 
                        value="male" 
                        name="gender" 
                        type="radio" 
                        id="r1" 
                        checked={this.state.gender === 'male'} 
                        onChange={this.handleInput} 
                    />
                    <label htmlFor="r1"> M</label>
                    <br />
                    <input 
                        value="female" 
                        name="gender" 
                        type="radio" 
                        id="r2" 
                        checked={this.state.gender === 'female'} 
                        onChange={this.handleInput} 
                    />
                    <label htmlFor="r1"> F</label>
                    <br />
                    
                    <select name="location" onChange={this.handleInput}>
                        <option 
                            value="Iceland" 
                            defaultValue={this.state.location === "Iceland"}
                            >Iceland
                        </option>
                        <option 
                            value="Cyprus" 
                            defaultValue={this.state.location === "Cyprus"}
                            >Cyprus
                        </option>
                        <option 
                            value="Wales" 
                            defaultValue={this.state.location === "Wales"}
                            >Wales
                        </option>
                    </select>
                    <br />
                    
                    <input 
                        type="checkbox" 
                        name="dietary" 
                        checked={this.state.dietary.includes('Cabage')} 
                        value='Cabage' 
                        onChange={this.handleInput} 
                    />
                    <label>Cabage</label>
                    <input 
                        type="checkbox" 
                        name="dietary" 
                        checked={this.state.dietary.includes('Soup')} 
                        value='Soup' 
                        onChange={this.handleInput} 
                    />
                    <label>Soup</label>
                    <input 
                        type="checkbox" 
                        name="dietary" 
                        checked={this.state.dietary.includes('Mushrooms')} 
                        value='Mushrooms' 
                        onChange={this.handleInput} 
                    />
                    <label>Mushrooms</label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.first.toUpperCase() +' '+ this.state.last.toUpperCase()}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your dietary restrictions: {this.state.dietary.join(', ')}</p>
            </main>
        )
    }
}

export default App
