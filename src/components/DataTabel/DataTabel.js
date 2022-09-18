import React from 'react';
import styled from 'styled-components';

import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from './DATA';



const DataTabel = () => {
  const actionsCell = [
    {
      field: 'action',
      headerName: 'Action',
      width: 400,
      renderCell: () => {
        return (
          <div className='cta'>
            <button classNAme="btn .view">View</button>
            <button classNAme="btn .delete">Delete</button>
          </div>
        )
      }
    }
  ]

  return (
    <Wrapper style={{ height: 600, width: '100%' }}>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionsCell)}
            pageSize={6}
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

    .btn {
      .view {
        border: 2px solid green;
      }
      .delete {
        border: 2px solid red;
      }
    }
    
`
export default DataTabel