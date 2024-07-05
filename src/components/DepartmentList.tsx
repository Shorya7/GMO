import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import '../pages/home/home.css';
interface Department {
  department: string;
  sub_departments: string[];
}

const departments: Department[] = [
  {
    department: "customer_service",
    sub_departments: [
      "support",
      "customer_success"
    ]
  },
  {
    department: "design",
    sub_departments: [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }
];

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = React.useState<{ [key: string]: boolean }>({});
  const [selected, setSelected] = React.useState<{ [key: string]: boolean }>({});

  const handleExpandClick = (department: string) => {
    setExpanded(prev => ({ ...prev, [department]: !prev[department] }));
  };

  const handleDepartmentChange = (department: string) => {
    const isSelected = selected[department];
    const newSelected = { ...selected, [department]: !isSelected };
    const subDepartments = departments.find(dep => dep.department === department)?.sub_departments || [];
    
    subDepartments.forEach(sub => {
      newSelected[sub] = !isSelected;
    });
    
    setSelected(newSelected);
  };

  const handleSubDepartmentChange = (subDepartment: string, department: string) => {
    const isSelected = selected[subDepartment];
    const newSelected = { ...selected, [subDepartment]: !isSelected };
    
    const subDepartments = departments.find(dep => dep.department === department)?.sub_departments || [];
    
    const allSelected = subDepartments.every(sub => newSelected[sub]);
    newSelected[department] = allSelected;
    
    setSelected(newSelected);
  };

  return (
    <div className='dept_selection'>
        <h1>Select Department</h1>
      {departments.map((dep) => (
        <Box key={dep.department} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!selected[dep.department]}
                  indeterminate={dep.sub_departments.some(sub => selected[sub]) && !selected[dep.department]}
                  onChange={() => handleDepartmentChange(dep.department)}
                />
              }
              label={dep.department}
            />
            <p className='sub_count'>{`(${dep.sub_departments.length})`}</p>
            <IconButton onClick={() => handleExpandClick(dep.department)}>
              {expanded[dep.department] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            
          </Box>
          {expanded[dep.department] && (
            <Box sx={{ ml: 4 , display: 'flex', flexDirection:'column'}}>
              {dep.sub_departments.map(sub => (
                <FormControlLabel
                  key={sub}
                  control={
                    <Checkbox
                      checked={!!selected[sub]}
                      onChange={() => handleSubDepartmentChange(sub, dep.department)}
                    />
                  }
                  label={sub}
                />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </div>
  );
};

export default DepartmentList;
