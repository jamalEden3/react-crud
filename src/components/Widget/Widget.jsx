import React from 'react';
import styled from'styled-components';
import { Link } from 'react-router-dom';
import Person3Icon from '@mui/icons-material/Person3';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';


const Widget = ({ type }) => {

  let data;
  const amount = 100;
  const diff = 10;
  switch (type) {
    case 'user':
      data=  {
        title: 'USERS',
        isMoney: false,
        link: 'See All Users',
        toLink: '/users',
        icon: <Person3Icon className='icon' style={{color: '#c40d00', backgroundColor: '#ff7369'}}/>,
      };
      break;
  
      case 'orders':
      data=  {
        title: 'ORDERES',
        isMoney: false,
        link: 'See All Orders',
        toLink: '',
        icon: <ShoppingBasketIcon className='icon' style={{color: 'blue', backgroundColor: '#7a97ff'}}/>,
      };
      break;

      case 'earnings':
      data=  {
        title: 'EARNINGS',
        isMoney: true,
        link: 'See All Earnings',
        toLink: '',
        icon: <LocalAtmIcon className='icon' style={{color: 'brown', backgroundColor: '#ffa35cz'}}/>,
      };
      break;

      case 'balance':
      data=  {
        title: 'BALANCE',
        isMoney: true,
        link: 'See All Balance',
        toLink: '',
        icon: <AccountBalanceWalletIcon className='icon' style={{color: 'yellow', backgroundColor: '#bfac00'}}/>,
      };
      break;

    default:
      break;
  }
  return (
    <Wrapper>
      <div>
        <div className='title-info flex'>
          <div>
            {data.icon}
            <h4 className='fs-300 text-neutral-100 '>{data.title}</h4>
            <h3 className='fs-500'>{data.isMoney ? '$' : ''}{amount}</h3>
            <p className='fs-300'><span className='percentage negative'>{diff}% </span>from last week</p>
          </div>
          <div className='more'>
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='all flex fs-300'>
        <Link to={data.toLink}>{data.link} </Link>
        <KeyboardDoubleArrowRightIcon />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  box-shadow: 1px 2px 15px -8px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px 2px 15px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 2px 15px -8px rgba(0,0,0,0.75);
  border-radius: 10px;
  height: 150px;
  background-color: var(--clr-rose);
  min-width: 250px;
  max-width: 250px;
  padding: 5px;

  .title-info {
    justify-content: space-between;

    .icon {
      background-color: var(--clr-bg-1);
      padding: 4px;
      border-radius: 5px;
      width: 30px;
      height: 30px;
    }
    h3 {

    }
    .percentage {
      &.positive {
        color: green;
      }
      &.negative {
        color: red;
      }
    }
  }
  .line {
    width: 100%;
    height: 1.5px;
    background-color: var(--clr-light-grey);
    opacity: 0.4;
  }
  .all {
    align-items: center;
  }
`


export default Widget