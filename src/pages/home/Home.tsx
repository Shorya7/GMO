import React from 'react';
import DataTable from '../../components/DataTable';
import DepartmentList from '../../components/DepartmentList';

const Home: React.FC = () => {
  return (
    <div>
        <DataTable/>
        <DepartmentList/>
    </div>
  )
}

export default Home;