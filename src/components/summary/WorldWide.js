import React from 'react';
import './WorldWide.css';

class WorldWide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: 'Worldwide statistics'
    }
  }

  render() {
    if (this.props.isLoading) {
      return (<h1>Summary</h1>);
    } else {
      let world_wide = this.props.corona_data.data.data[0]['table_world'];
      let updated_at_str = this.props.corona_data.data['updated_at'];
      let updated_at = new Date(updated_at_str);
      return (
      <div>
        <h1>{this.state.label}</h1>
        <div className="summary">
          <h3>New Case : {world_wide['new_cases']}</h3>
          <h3 className='red-text'>New Deaths : {world_wide['new_deaths']}</h3>
          <h3>New Recovered : {world_wide['new_recovered']}</h3>
          <h3>Total Case : {world_wide['total_cases']}</h3>
          <h3 className='red-text'>Total Deaths : {world_wide['total_deaths']}</h3>
          <h3>Total Recovered : {world_wide['total_recovered']}</h3>
          <p className='margin-top__100'>Last updated: </p>
          <h5>
            {updated_at.toLocaleDateString()} - {updated_at.toLocaleTimeString()}
          </h5>
          <p>Source: <a href="https://vnexpress.net">vnexpress.net</a></p>
        </div>
      </div>
      );
    }
  }
}

export default WorldWide;
