import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component { 
    constructor() {
        super()
        this.state = {
            first: '',
            last: '',
            age: 0,
            male: false,
            female: false
        }
    }
    
    handleInput = e => {
        const x = e.target.value;      
        e.target.type === "radio" ? 
        this.setState({male: false, female: false}, 
                      () => this.setState(prev => ({[x]: !prev[x]}))) : 
        this.setState({[e.target.name]: x});
    }
    
    render() {
        return (
            <main>
                <form>
                    <input value={this.state.first} name="first" type="text" placeholder="First Name" onChange={this.handleInput} /><br />
                    <input value={this.state.last} name="last" type="text" placeholder="Last Name" onChange={this.handleInput} /><br />
                    <input value={this.state.age} name="age" type="number" placeholder="Age" onChange={this.handleInput} /><br />
                    
                    <input value="male" name="gender" type="radio" id="r1" onChange={this.handleInput} />
                    <label htmlFor="r1"> M</label>
                    <br />
                    <input value="female" name="gender" type="radio" id="r2" onChange={this.handleInput} />
                    <label htmlFor="r1"> F</label>
                    <br />
                    
                    <div>{this.state.male +' '+ this.state.female}</div>
                    
                    {/* Create select box for location here */}
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.first +' '+ this.state.last}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.female +' '+ this.state.female}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
