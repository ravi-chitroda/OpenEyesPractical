import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";
import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box>
      <Grid container>
        <ul className="users">
          {users.map((user) => {
            const { id, email, avatar, first_name } = user;
            return (
              <li key={id}>
                <img src={avatar} alt={email} />
                <Box>
                  <Typography>{email}</Typography>
                  <Typography href={first_name}>Profile</Typography>
                </Box>
              </li>
            );
          })}
        </ul>
      </Grid>
    </Box>
  );
};

export default UseEffectFetch;
