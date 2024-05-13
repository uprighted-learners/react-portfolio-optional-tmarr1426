import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const About = () => {
  return (
    <div style={{ marginLeft: "8em", marginRight: "8em" }}>
      <div>
        <h2>Want to know a little about me?</h2>
      </div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <div style={{ padding: "0.5rem" }}>
          <Card
            style={{
              width: "40em",
              margin: "1em",
              boxShadow: "4px 4px 4px #000000",
              borderRadius: "1em",
              backgroundColor: "#ECEAED",
            }}
          >
            <Box>
              <h3>Growing Up</h3>
              <p>
                I grew up in Orange County New York. I moved around a bunch, but
                generally stayed within the Orange County area. I have three
                biologcial brothers, two step-brothers, one step-sister, and one
                adopted sister. My parents split when I was eight, and evntually
                got remarried. My mother moved to Kansas when I was going into
                ninth grade. I stayed in New York with my father to finish out
                High School.
              </p>
              <p>
                I moved to Kansas for College, where I went to Kansas State
                University in 2010. I graduated from Kansas State University
                with a Bachelors of Science in Sociology. I have lived in Kansas
                ever since.
              </p>
            </Box>
          </Card>
          <div style={{ padding: "0.5rem" }}>
            <Card
              style={{
                width: "40em",
                margin: "1em",
                boxShadow: "4px 4px 4px #000000",
                borderRadius: "1em",
                backgroundColor: "#ECEAED",
              }}
            >
              <Box>
                <h3>Why I got into Programming</h3>
                <p>
                  I got into programming because I felt stuck. After college I
                  got a job as a Police Dispatcher. While it was great being
                  able to help others in times of crisis, having a family made
                  the lifestyle hard. I was working at 2am quite abit, or having
                  to miss holiday dinners, or even birthdays. It just became too
                  much. Eventually I decided to leave, and got a job working for
                  my in-laws where I began to help out with the backend of the
                  websites they created for marketing clients. I helped set up
                  domains, create the website, connect various programs (like
                  mailchimp, or apps like divi) to the websites. Eventually
                  steam ran out and they couldn't find more websites to create
                  for clients and my job was limited. I recently just started a
                  new job as a marketing web designer for a large engraving
                  company, and am helping them renovate their websites to make
                  them up to date. Now that I have dabbled in the backend and
                  frontend designs of website so much, I decided to jump head
                  first into programming as a full career. I think my love of
                  video games has led me to want to learn more about
                  programming, and software development to hopefully learn
                  enough to help create the things that I have enjoyed.
                </p>
              </Box>
            </Card>
          </div>
        </div>
        <div style={{ padding: "0.5rem" }}>
          <Card
            style={{
              width: "40em",
              margin: "1em",
              boxShadow: "4px 4px 4px #000000",
              borderRadius: "1em",
              backgroundColor: "#ECEAED",
            }}
          >
            <Box>
              <h3>My Interests</h3>
              <p>
                I've always been into computers and technology. I grew up in a
                somewhat poorer household, so when I got my first computer I
                dove head first into everything it could do. With the help of my
                brother I was even able to put my computer together from
                scratch. Technology has always been one of the things thats
                interested me the most. Seeing what technology could do, and how
                its being used in so many facets of life is very interesting.
              </p>
              <p>
                I also loved playing video games. Growing up, my brothers and I
                would get a new game console and would spend hours upon hours
                playing games. One of my favorites was Final Fantasy IX. Between
                my brothers and I, we had one save file in which we all shared
                and got through the game together. I was always into fantasy
                books and fantasy stories, and that game took the storytelling
                up to a whole new level I was not prepared for. I still love
                playing video games, and will always make time to play them.
                This all led to my love for boardgames as well. I currently live
                and breath tabletop roleplaying games like Dungeons and Dragons,
                and Pathfinder.
              </p>
              <p>
                When I went to Kansas State University, I originally went for
                graphic design before I changed my major. Playing video games
                made me love art, between the graphics that were shown, art from
                the books you could get about them and everything in between.
                I've always had a passion for art, and recently have gotten into
                painting again. Thanks to tabletop gaming, I found painting to
                be a great way to decompress, connect with my kids, and enjoy
                art again. I now paint miniature figures for the tabletop games
                I play for fun, and for others!
              </p>
            </Box>
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default About;
