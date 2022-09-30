import React from 'react';
import styled from 'styled-components';

import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from './DATA';



const DataTabel = () => {
  const actionsCell = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className='cta flex'>
            <button className="btn view">View</button>
            <button className="btn delete">Delete</button>
          </div>
        )
      }
    }
  ]

  return (
    <Wrapper style={{ height: 500, width: '100%' }}>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionsCell)}
            pageSize={7}
            rowsPerPageOptions={[9]}
            checkboxSelection
      />
    </Wrapper>
  )
}

const Wrapper = styled.article`
    .img-cell {
        width: 50px;
        height: 50px;
        align-items: center;
        --gap: 1.5rem;
    }
    .user-image {
        border-radius: 50%;
    }

    .status-val {
      &.active {
        color: green
      }
      &.passive {
        color: red
      }
      &.pending {
        color: yellow
      }
      
    }

    .cta {
      --gap: 1.2rem;
      .view {
        background-color: green;
      }
      .delete {
        background-color: red;
      }
    }
    .btn {
      background: none;
      border: 0;
      cursor: pointer;
      color: #fff;
      border-radius: 5px;
      padding: .7rem 1.2rem;
    }
    
`
export default DataTabel