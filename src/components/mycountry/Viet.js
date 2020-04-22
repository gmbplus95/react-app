import React, {Component} from 'react';
import './viet.css';
// Import React Table
import ReactTable from 'react-table-6';

import 'react-table-6/react-table.css';

class Viet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Corona Virus in Viet Nam',
      headerDisplay: this.prepareHeader(),
      data: this.prepareData()
    };
  }

  prepareHeader(){
    let comma = ',';
    let detail = this.props.data['gdata']['detail'];
    let detailArr = detail.split('\n');
    let headerArr = detailArr[0].split(comma);
    let headerDisplay =[headerArr[1], headerArr[2], headerArr[3], headerArr[7]];
    return headerDisplay;
  }

  prepareData() {
    let comma = ',';
    let detail = this.props.data['gdata']['detail'];
    let detailArr = detail.split('\n');
    let dataProvince = detailArr.splice(1, detailArr.length);
    let tempArr = [];
    dataProvince.forEach(p => {
      let dataArr = p.split(comma);
      let obj = {
        province: dataArr[1],
        total : dataArr[2].trim() ==='' ? 0 : Number(dataArr[2]),
        total_death : dataArr[3].trim() ==='' ? 0 : Number(dataArr[3]),
        total_recover : dataArr[7].trim() ==='' ? 0 : Number(dataArr[7]),
      };
      tempArr.push(obj);
    })
    return tempArr;
  }
  //
  // setData = (items) => {
  //   this.setState(state => ({
  //         dataDisplay: {
  //           ...state.dataDisplay,    // keep all other key-value pairs
  //           data: items       // update the value of specific key
  //         }
  //       }
  //     )
  //   )
  // }

  componentDidMount() {

  }

  render() {
    let province =  this.state.headerDisplay[0];
    let total =  this.state.headerDisplay[1];
    let total_death =  this.state.headerDisplay[2];
    let total_recover =  this.state.headerDisplay[3];
    let total_in_number = 0;
    let total_recover_in_number = 0;
    let total_death_in_number = 0;
    this.state.data.forEach(
      e => {
        total_in_number += e.total;
        total_death_in_number += e.total_death;
        total_recover_in_number += e.total_recover;
      }
    )
    const columns = [{
      Header: province,
      accessor: 'province' // String-based value accessors!
    }, {
      Header: total,
      accessor: 'total',
    }, {
      Header: total_death,
      accessor: 'total_death' // Custom value accessors!
    }, {
      Header: total_recover,
      accessor: 'total_recover'
    }]
    return (
      <div className='viet-nam'>
        <div className='general'>
          <p>Tổng số ca: <strong>{total_in_number}</strong></p>
          <p>Tổng số ca đã khỏi: <strong>{total_recover_in_number}</strong></p>
          <p>Số ca tử vong: <strong>{total_death_in_number}</strong></p>
        </div>
        <ReactTable
          data={this.state.data}
          columns={columns}
          defaultPageSize={20}
          style={{
            height: "600px"
          }}
          className="-striped -highlight"
        />
        <br/>
        <h2>Thống kê tình hình dịch bệnh tại Việt Nam</h2>
      </div>
    )
  };

}

export default Viet;