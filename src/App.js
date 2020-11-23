import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import Form from './components/Form';
class App extends Component {
  state = { currentCity: 'campos', searchTerm: '',}


  async fetchData(currentCity) {

      const myKey = '52d0c91c2edcba6691baa415df78b966';
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${myKey}`, {mode: 'cors'})
      const data = await res.json();
      this.setState({data: data})
  }

  async componentDidMount() {
    this.fetchData(this.state.currentCity);
  }

  handleSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({currentCity: this.state.searchTerm});
    this.fetchData(this.state.searchTerm)
  }
  render() { 
    return (
      <div className="App">
        <Form onChange={this.handleSearchTerm} value={this.state.searchTerm} onSubmit={this.handleSubmit}/>
       {this.state.data && <Main data={this.state.data}/>}
      </div>
    );
  }
}
 
export default App;