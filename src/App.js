import styled from 'styled-components';

import {Sidebar} from './components';

import { AiFillSetting } from "react-icons/ai";



import { GlobalStyle } from './styles/gobal.style';
import { Routes, Route } from "react-router-dom";

function App() {

  const activeMenu = true;
    return (
      <>
        <GlobalStyle />
        <Wrapper className="dark">
          <div className='flex relative'>
            <button className='setting-icon fixed' style={{zIndex: '1000', backgroundColor: 'blue'}}>
              <AiFillSetting />
            </button>
          </div> {/* setting icon div */}
          
          {/* Sidebar */}
          {
            activeMenu ? (
              <div className='sidebar sidebar-visible fixed'>
                <Sidebar />
              </div> 
              ) : (
              <div className='sidebar sidebar-invisible'>
                <Sidebar />
              </div>
            )
          }

          {/* Navbar */}
          <div className={`nav-box ${activeMenu ? 'menuOpen' : 'menuClosed'}`}>
            <nav
             className='fixed'
            >
              Navbar
            </nav>
          </div>{/* navbar div */}

          <Routes>
            {/* dashboard */}
            
          </Routes>
        </Wrapper>
      </>
    );
  }

const Wrapper = styled.div`
  display: flex;
  position: relative;

  .setting-icon {
    bottom: 10px;
    right: 10px;
    font-size: 1.875rem;
    color: #fff;
    border-radius: 50%;
    padding: 0.3rem;

    &:hover {
      background-color: #333;
    }
  }
  .sidebar-visible {
    width: 18rem;
    border: 1px solid #000;
  }

  .sidebar-invisible {
    width: 0px;
    overflow: hidden
  }

  .nav-box {
    width: 100%;
    height: 100vh;
    border: 2px solid red;

    &.menuOpen {
      margin-left: 18rem;
    }

    &.menuClosed {
      flex: 2;
    }
    nav {
      border: 3px solid yellow;
      width: 100%;
      
    }
  }
  
`
  export default App;