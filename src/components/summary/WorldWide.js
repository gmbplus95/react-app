import React from 'react';
import './WorldWide.css';
import corona_img from './corona.jpg';
class WorldWide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: 'Worldwide statistics'
    }
  }

  render() {
    let world_wide = this.props.corona_data.data.data[0]['table_world'];
    let updated_at_str = this.props.corona_data.data['updated_at'];
    let updated_at = new Date(updated_at_str);
    return (
      <div>
        <h1>{this.state.label}</h1>
        <div className="summary">
          <h3 className='blue-text'>New Case : {world_wide['new_cases']} <i className="fas fa-angle-double-up"></i></h3>
          <h3 className='red-text'>New Deaths : {world_wide['new_deaths']} <i className="fas fa-angle-double-up"></i> </h3>
          <h3 className='green-text'>New Recovered : {world_wide['new_recovered']} <i className="fas fa-angle-double-up"></i></h3>
          <h3 className='blue-text'>Total Case : {world_wide['total_cases']}</h3>
          <h3 className='red-text'>Total Deaths : {world_wide['total_deaths']}</h3>
          <h3 className='green-text'>Total Recovered : {world_wide['total_recovered']}</h3>
          <div>
            <img src={corona_img} alt="corona_virus" width="125px" height="125px" className='corona-img'/>
            <h3>Let's fight against corona virus !!!</h3>
          </div>
          <p className='margin-top__100'>Last updated: {updated_at.toLocaleDateString()} - {updated_at.toLocaleTimeString()} </p>
          <p>Source: <a href="https://vnexpress.net">VNExpress.net (WorldOMeters)</a></p>
        </div>
      </div>
    );
  }
}

export default WorldWide;
