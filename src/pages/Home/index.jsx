import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { getData } from "../../service";
import dateFormat from "dateformat";


const Home = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");

  const getUserFromGitHub = async () => {
    const user = await getData(`/users/${username}`);
    const repos = await getData(`/users/${username}/repos`);

    setUser(user);
    setRepos(repos);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      m={5}
    >
      <div>
        <h1>Buscar usuario</h1>
      </div>
      <div>
        <TextField id="outlined-basic" variant="outlined"
          color="secondary" size="small" focused
          label="Write the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button id="btn" variant="contained" color="primary" onClick={getUserFromGitHub}>
          Search
        </Button>
      </div>
      <div>
      <div id="user">
      <table >
        <tr>
          <td>
          <img src={user?.avatar_url} alt="" width="200"/><br></br>
              <tr><strong>{user?.name}</strong></tr>
              <tr><span>{user?.login}</span></tr>
              <tr><span>{user?.bio}</span></tr>
              <tr><span>{user?.location}</span></tr>
              <tr><span>{"@"+user?.twitter_username}</span></tr>
              <tr><span>{user?.followers} followers</span> | <span>{user?.following} following</span> </tr>
          </td>
        </tr>
      </table>
      </div>

      <div id="repositories">
        
        {repos.length > 0 &&
          repos.map((repos) => (
            <div class="containerCard">
            <div class="card">
            <div class="card-header">
            <h3><a href={repos?.html_url} target="_blank">{repos?.name}</a></h3>
            </div>
              <div class="card-body">
                <p>☆ {repos?.stargazers_count}</p>
                <p>👁 {repos?.watchers_count}</p>  
                <p>branch: {repos?.default_branch}</p>
                <p>{repos?.topics}</p>           
              </div>
            <div class="card-footer">
                <p>Created | <strong>{dateFormat(repos?.created_at, "fullDate")}</strong></p>
                <p>{repos?.language} </p>
            </div>
        </div>
        </div>
          ))}
      </div>

      </div>
    </Box>
  );
};

export default Home;