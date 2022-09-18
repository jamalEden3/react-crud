import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mars',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }
];
const Chart = () => {
  return (
    <Wrapper >
      <h2>Last 6 months revenue</h2>
      <div style={{width: '100%', height: 300}}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className='cartesian-grid'/>
            <XAxis dataKey="name" stroke="#880" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    flex: 5;
    background-color: var(--clr-light-blue);
    -webkit-box-shadow: 5px 6px 10px 0px rgba(214,214,214,0.73);
    -moz-box-shadow: 5px 6px 10px 0px rgba(214,214,214,0.73);
    box-shadow: 5px 6px 10px 0px rgba(214,214,214,0.73);

    h2 {
      color: grey;
    }
    .cartesian-grid {
      stroke: rgb(228, 225, 225);
    }
`
export default Chart