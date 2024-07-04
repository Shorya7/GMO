import React, { useState, ChangeEvent } from 'react';
import './form.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneerr, setPhoneerr] = useState<boolean>(false);
  const [erremail, seterremail] = useState<boolean>(false);
  const phonepattern: RegExp = /^[5-9]\d{9}$/;
  const emailpattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phone && email && !phoneerr && !erremail) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      navigate('/');
    } else {
      alert('Please fill in all details correctly.');
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setPhone(value);
    setPhoneerr(!phonepattern.test(value));
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setEmail(value);
    seterremail(!emailpattern.test(value));
  };

  return (
    <div className="fullsc">
      <div className="mainbody">
        <div className="left_side">
          <div className="left_logo">
            {/* <img src={HealthFood} alt="Healthy" /> */}
          </div>
          <div className="left_cont">
            <span id="welcome">Welcome </span> to the HealthOS
          </div>
        </div>
        <div className="right_side">
          <div className="container">
            <div className="head_log">Register</div>

            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 2,
                  width: "40ch",
                  "@media (max-width: 410px)": {
                    width: "30ch",
                  },
                  "@media (max-width: 338px)": {
                    width: "28ch",
                  },
                  "@media (max-width: 320px)": {
                    width: "26ch",
                  },
                  "@media (max-width: 300px)": {
                    width: "23ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
              className="input"
            >
              <TextField
                required
                label="Name"
                variant="outlined"
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                InputProps={{
                  style: { color: 'black' },
                  classes: { notchedOutline: 'black-border' },
                }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 2,
                  width: "40ch",
                  "@media (max-width: 410px)": {
                    width: "30ch",
                  },
                  "@media (max-width: 338px)": {
                    width: "28ch",
                  },
                  "@media (max-width: 320px)": {
                    width: "26ch",
                  },
                  "@media (max-width: 300px)": {
                    width: "23ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
              className="input"
            >
              <TextField
                required
                label="Phone Number"
                InputProps={{
                  inputMode: "numeric",
                  startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  inputProps: {
                    pattern: "[0-9]*",
                  },
                  style: { color: 'black' },
                    classes: { notchedOutline: erremail ? 'red-border' : 'black-border' },
                }}
                variant="outlined"
                type="tel"
                error={phoneerr}
                helperText={phoneerr ? "Enter a valid phone number" : ""}
                value={phone}
                onChange={handlePhoneChange}
                InputLabelProps={{ style: { color: 'black' } }}
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 2,
                  width: "40ch",
                  "@media (max-width: 410px)": {
                    width: "30ch",
                  },
                  "@media (max-width: 338px)": {
                    width: "28ch",
                  },
                  "@media (max-width: 320px)": {
                    width: "26ch",
                  },
                  "@media (max-width: 300px)": {
                    width: "23ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
              className="input"
            >
              <TextField
                required
                label="Email"
                variant="outlined"
                type="email"
                error={erremail}
                helperText={erremail ? "Enter a correct email" : ""}
                value={email}
                onChange={handleEmailChange}
                InputProps={{
                  style: { color: 'black' },
                  classes: { notchedOutline: erremail ? 'red-border' : 'black-border' },
                }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
            </Box>

            <div className="sub_btn_log">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
