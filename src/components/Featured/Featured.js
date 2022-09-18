import React from 'react';
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <Wrapper>
        <div className='title flex'>
            <h2>Total Revenu</h2>
            <MoreVertIcon />
        </div>
        <div className='featured-charts center flex'>
            <CircularProgressbar value={80} text='80%' strokeWidth='5' className='progress-box'/>
        </div>
        <div className='desc flex'>
          <div className='point'>
              <p className='title'>Target</p>
              <span>100$</span>
          </div>
          <div className='point'>
              <p className='title'>Today</p>
              <span>100$</span>
          </div>
          <div className='point'>
              <p className='title'>Last Week</p>
              <span>100$</span>
          </div>
          <div className='point'>
              <p className='title'>Last Month</p>
              <span>100$</span>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    flex: 2;
    -webkit-box-shadow: 5px 6px 10px 0px rgba(214,214,214,0.73);
    -moz-box-shadow: 5px 6px 10px 0px rgba(214,214,214,0.73);
    box-shadow: 5px 6px 10px 0px rgba(214,214,214,0.73);
    background-color: var(--clr-light-blue);

    .title {
      justify-content: space-between;
    }
    .featured-charts {
      flex-direction: column;
      --gap: 2rem
    }
    
    .progress-box {
      width: 150px;
      height: 150px;
    }

    .desc {
      flex-wrap: wrap;
      text-align: center;
    }
    .point {
      flex: 1;
      min-width: 40%;
      position: relative;

      .title {
        &:before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #000;
          position: absolute;
          top: 7px;
          left: 10px;
        }
      }
    }
`
export default Featured