import styled from 'styled-components';

import { Sidebar, Navbar } from './components';
import { Ecommerce } from './pages'



import { useStateContext } from './contexts/ContextProvider';

import { AiFillSetting } from "react-icons/ai";

import { GlobalStyle } from './styles/gobal.style';
import { Routes, Route } from "react-router-dom";

function App() {

  const { activeMenu } = useStateContext();

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
            <Navbar />

          <Routes>
            {/* dashboard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path='/ecommrce' element={<Ecommerce />} />
          </Routes>
          </div>{/* navbar div */}
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
  .sidebar {
    transition: 0.05s;
  }
  .sidebar-visible {
    width: 18rem;
    border-right: 2px solid #888;
  }

  .sidebar-invisible {
    width: 0px;
    overflow: hidden
  }

  .nav-box {
    width: 100%;
    height: 100vh;
    padding-inline: 1rem;

    &.menuOpen {
      margin-left: 18rem;
    }

    &.menuClosed {
      flex: 2;
    }
    nav {
      width: 100%;
    }
  }
  
`
  export default App;