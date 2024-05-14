import { Box, Card, CardContent } from "@mui/material";

const Projects = ({ repos }) => {
  return (
    <div>
      <div></div>
      <div>
        <h1>Github Repos:</h1>
        <h4>Github Username: tmarr1426</h4>
        {repos.map((obj) => {
          console.log(obj);
          return (
            <Card
              key={obj.id}
              style={{
                width: "40em",
                margin: "1em",
                boxShadow: "4px 4px 4px #000000",
                borderRadius: "1em",
                backgroundColor: "#ECEAED",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box>
                    <a
                      href={obj.html_url}
                      style={{
                        fontSize: 32,
                        textDecoration: "underline 2px",
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                      color="#494888"
                      gutterBottom
                    >
                      {obj.name}
                    </a>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
