export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 350,
        renderCell: (params) =>  {
        return (
            <div className="img-cell flex">
                <img src={params.row.image} alt='avatar' className="user-image"/>
                <p>{params.row.firstName}</p>
            </div>
        )} 
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 250,
    },
    {
        field: 'status',
        headerName: 'Status',
        widthL: 250,
        renderCell: (params) => {
            return (
                <div className="status-box">
                    <span className={`status-val ${params.row.status}`}>{params.row.status}</span>
                </div>
            )
        }
    }
    
]

export const userRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'active' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'passive' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'passive' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'active' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'pending' },
  { id: 6, lastName: 'Melisandre', firstName: 'Melisandre', age: 150, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'pending' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'passive' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, image: "https://i.pinimg.com/564x/b7/a6/45/b7a645b8690be8b70d7477da0b6436ae.jpg", email:'123@gimmylanceter@@gmail.con', status: 'passive' },
]