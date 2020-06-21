import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid
} from 'recharts'

const ChartDailyEvents = ({ chartData}) => (
 
  
  <ResponsiveContainer width = '95%' height = {500} >
    <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey = 'date' name = 'date' tickFormatter={ timeStr => moment(timeStr).format('MMM-DD')}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="events" stroke="#8884d8" activeDot={{ r: 8 }} />
        
      </LineChart>

   
  </ResponsiveContainer>
)

ChartDailyEvents.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      value: PropTypes.number
    })
  ).isRequired
}

export default ChartDailyEvents;