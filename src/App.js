import React from 'react';
import './App.css';
import TopCountry from './components/topcountry/TopCountry';
import WorldWide from "./components/summary/WorldWide";
import Viet from "./components/mycountry/Viet";

import Error from "./components/error/Error";
import http from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import Navbar from "./components/navbar/navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corona_data: {},
      isLoading: true,
      last_updated: 'N/A'
    }
  }

  setCoronaData = (data) => {
    this.setState({corona_data: data, isLoading: false})
  }

  componentDidMount() {
    const self = this;
    //api from vnexpress.net
    http.get('https://cors-anywhere.herokuapp.com/https://vnexpress.net/microservice/corona')
      .then(function (response) {
        // handle success
        self.setCoronaData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    if(this.state.isLoading) {
      return (
      <div className='center-screen'>
        <FadeLoader
          size={150}
          color={"#ff4b2c"}
          loading={this.state.isLoading}
        />
      </div>
      )
    }
    return (
      <Router>
        <Switch>
          <Route exact path="/(|world)" render={props =>
            <div className="App">
              <Navbar/>
              <div id="wrapper">
                <div id="part-one">
                  <TopCountry isLoading={this.state.isLoading} corona_data={this.state.corona_data}/>
                </div>
                <div id="part-two">
                  <WorldWide isLoading={this.state.isLoading} corona_data={this.state.corona_data}/>
                </div>
              </div>
            </div>
          }/>
          <Route path="/vietnam" render={props =>
            <div className="App">
              <Navbar/>
              <Viet data={this.state.corona_data}/>
            </div>
          }/>
          <Route path="*" component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
