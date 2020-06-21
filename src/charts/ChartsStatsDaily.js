import React, { Component } from 'react';
import moment from 'moment'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default class ChartsStatsDaily extends Component {
  constructor(props){
      super(props);
      
      this.state = { data : this.props.apiData};
  }
  render() {
    return (
      <BarChart
        width={900}
        height={500}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        <XAxis dataKey = 'date' name = 'date' tickFormatter={ timeStr => moment(timeStr).format('MMM-DD')} />
       
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="impressions" fill="#8884d8" />
        <Bar dataKey="clicks" fill="#886777" />
        <Bar dataKey="revenue" fill="#1234d8" />

      </BarChart>
    );
  }
}
