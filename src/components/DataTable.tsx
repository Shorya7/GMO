import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import '../pages/home/home.css';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
const [fetch, setFetch] = useState<boolean>(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setFetch(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const userDetails = localStorage.getItem('userDetails');
    if(userDetails&&!fetch){
      fetchPosts();
    }
  }, []);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div className='grid_table'>
    <Box sx={{ height: 400, width: '90%', }}>
      <DataGrid rows={posts} columns={columns} initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick />
    </Box>
    </div>
  );
};

export default DataTable;
