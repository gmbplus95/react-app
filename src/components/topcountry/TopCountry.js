import React from 'react';
import './TopCountry.css';
import Chart from "chart.js";

class TopCountry extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Top 10 most-affected countries',
      not_a_country: ['Bắc Mỹ', 'Nam Mỹ', 'Châu Phi', 'Châu Á', 'Châu Âu']
    }
  }
  componentDidMount(){
    let table_left = this.props.corona_data.data.data[0]['table_left'];
    let filter_data = table_left.filter(c => {
      return !(c instanceof Array) &&
      (c.country && !this.state.not_a_country.includes(c.country));
    });
    let top_10;
    if(filter_data && filter_data.length >= 10){
      top_10 = filter_data.slice(0, 10);
      console.log(top_10);
      let country_labels= [];
      let data_infected = [];
      top_10.forEach(t => {
        country_labels.push(t['country_vn']);
        data_infected.push(t['cases']);
      })
    //chart total
      let ctx = document.getElementById('myChart').getContext('2d');
      ctx.canvas.parentNode.style.width = "600px";
      ctx.canvas.parentNode.style.height = "600px";
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: country_labels,
          datasets: [{
            label: '# of Cases',
            data: data_infected,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 1)',
              'rgb(9,56,113)',
              'rgb(50,203,83)',
              'rgb(231,121,95)',
              'rgb(239,89,207)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgb(9,56,113)',
              'rgb(50,203,83)',
              'rgb(231,121,95)',
              'rgb(239,89,207)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          events: ['click', 'mousemove'],
          responsive: true,
          maintainAspectRatio: false,
          onClick : function (evt, item) {
            console.log(evt);
            console.log(item);
          }
        }
      });
    }
  }


  render() {
    return (
    <div className="content">
      <h1>{this.state.title}</h1>
      <canvas id="myChart">
      </canvas>
    </div>
    )
  };
}

export default TopCountry;
