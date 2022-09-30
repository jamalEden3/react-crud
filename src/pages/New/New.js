import React, { useState } from 'react';
import styled from'styled-components';

import Sidebar from '../../components/Sidebar';
import Navigation from '../../components/Navigation';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';


const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  console.log(file)

  return (
    <Wrapper className='flex'>
      <Sidebar />
      <main>
        <Navigation />
        <div>
          <h1>{ title }</h1>
          <div className='form-box flex center'>
            <div className='uploaded-image'>
              <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } alt="uploaded"/>
            </div>{/* uploaded-image */}
            <form>
              <div className='input-box'>
                <label htmlFor="image">
                  Image : <CreateNewFolderIcon />
                </label>
                <input
                  id="image"
                  type="file"
                  style={{display: "none"}}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {
                inputs.map((input) => (
                  <div className='input-box' key={input.id}>
                    <label htmlFor="name">{input.label}</label>
                    <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    />
              </div>
                ))
              }
            <button type="submit">Submit</button>
          </form>
          </div>{/* form-box */}
        </div>
      </main>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  --gap: 0;
  main {
    flex: 6;
  }

  h1 {
    margin-bottom: 50px
  }

  .form-box {
    --gap: 1.5rem;
    box-shadow: 1px 2px 15px -8px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 2px 15px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 2px 15px -8px rgba(0,0,0,0.75);
    justify-content: space-between;
    padding-inline: 25px;

    .uploaded-image {
     flex: 1;
     text-align: center;

     img {
       width: 150px;
       height: 150px;
       border-radius: 50%;
       border: 1px solid #000;
       object-fit: cover;
     }
    }
    form {
     flex: 2;
     display: flex;
     flex-wrap: wrap;
     gap: 20px;
     justify-content: flex-around;

     .input-box {
      width: 45%;

      label {
        display: flex;
        align-items: center;
      }
      input {
        width: 100%;
        border: none;
        padding: 5px;
        border-bottom: 1px solid grey;
        outline: none;
      }
     }

     button {
      width: 180px;
      padding: 10px;
      cursor: pointer;
      border: none;
      background-color: teal;
      color: #fff;
      border-radius: 5px;
      margin-top: 50px;
     }
    }
  }

`  

export default New;