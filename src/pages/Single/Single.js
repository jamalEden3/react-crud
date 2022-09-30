import React from 'react';
import styled from 'styled-components';

import Navigation from '../../components/Navigation';
import Sidebar from '../../components/Sidebar';
import Chart from '../../components/Chart';
import Tabel from '../../components/Tabel';

const Single = () => {
  return (
    <Wrapper className='flex'>
      <Sidebar />
      <main>
        <Navigation />
        <div>
          <article className='top-article flex'>
            <div className='user-info'>
              <h2>User Information</h2>
              <div className='user-details flex'>
                <div className='user-image'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg" alt="user" />
                </div>
                <div className='user-detail'>
                  <p>Email: <span>aredn@12.com</span></p>
                  <p>Phone: <span>0445325</span></p>
                  <p>Address: <span>New Zealand - first street - forth building</span></p>
                  <p>Country: <span>New Zealand</span></p>
                </div>
              </div>
            </div>
            <div className='user-chart'>
              <Chart aspect={3 / 1} title='Last 6 months revenue'/>
            </div>
          </article>
          <article className='bottom-article'>
            <Tabel />
          </article>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    --gap: 0;
    main {
      flex: 6;

      .top-article {
        border: 1px solid #000
        --gap: 1.3rem;

        .user-info {
          border: 1px dotted red;
          flex: 1;
          display: flex;
          flex-direction: column;

          h2 {
            margin-bottom: 50px
          }

          .user-details {
            border: 1px solid #000;
            --gap: 1rem;
            justify-content: space-between;
            

            .user-image {
              width: 70px;
              height: 70px;

              img {
                border-radius: 50%;
              }
            }

            .user-detail {
              
              p{
                color: red;
                
                span {
                  color: grey
                }
              }
            }

          }
        }
        .user-chart {
            border: 1px dotted red;
          flex: 2;
        }
      }

      .bottom-article {
        border: 1px solid #000
      }
}
`
export default Single