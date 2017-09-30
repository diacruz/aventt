import React from 'react';


class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
          if(this.state.value !== 'shellhacks'){
            alert('The event "' + this.state.value + '" is not a listed event.');
          }
        else{
            alert('welcome');   
            window.location.href = "http://localhost:3000/grid?";
        }
      }

      componentDidMount(){

      }
    render(){

        return(
      <div className="container">
        <form  className="search" onSubmit={this.handleSubmit}>
                <input className="event-name" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Even name"/>
                <input type="submit" value="✓ Brew" className="btn btn-primary font" className="button"/>
        </form>   
     </div>
        )
    }
};

export default Landing;