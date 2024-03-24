import { useState, useEffect } from "react";

const Projects = () => {
  const GithubRepos = () => {
    const [repos, setRepos] = useState([]);
  };

  useEffect(() => {
    const getAllRepos = async () => {
      try {
      const response = await( await fetch(`https://api.github.com/users/tmarr1426/repos`));
      console.log(response)
      setRepos(response.data);
      } catch (err) {
        console.log(`There was an error fetching the data from Github`, err);
      }
    };
    getAllRepos();
  });

  return <div>Projects</div>;
};

export default Projects;
