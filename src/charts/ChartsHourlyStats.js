import React, { Component } from 'react';
import moment from 'moment'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const monthTickFormatter = (tickProps) => {
    const { y, payload } = tickProps
    const { value } = payload;
    let dateVal = moment(value).format('MMM-DD');
    let date = moment(value).format('DD');
    return <text x={date + 24 } y={y} textAnchor="middle">{dateVal}</text>;
};

export default class ChartsHourlyStats extends Component {
  constructor(props){
      super(props);
      this.state = { data : this.props.apiData};
  }
  render() {
    return (
      <BarChart
        width={1100}
        height={500}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <XAxis dataKey="date"  axisLine={false} tickLine={false} 
            interval={5} tick={monthTickFormatter} height={1} scale="band" xAxisId="date"/>
        
        
       
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
