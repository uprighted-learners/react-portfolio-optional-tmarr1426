import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Work = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        width: "70em",
      }}
    >
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "5em" }}>
            <div>
              <h1>Work History</h1>
              <h2>Web Developer Experience</h2>
              <h4>UEI Group Services -- Marketing Web Developer</h4>
              <h5>December 2023 - present</h5>
              <p>
                As a Marketing Web Developer for UEI Group Services I
                collaborate with a team of marketing designers to help create,
                and maintain wesbites for the 5 main companies that fall under
                the UEI Group Services Umbrella. My main task is to handle
                website updates such as product updates, or page updates, as
                well as maintain and fix any errors or issues that arise for the
                websites. I handle frontend and backend updates and fixes.
              </p>
              <h4>C&S Mailing -- Web Developer/Project Manager</h4>
              <h5>July 2021 - December 2023</h5>
              <p>
                As a Web Developer and Project Manager for C&S Mailing I work
                with a group of designers to deliver high quality websites for
                ecommerce brands, politicians, rental complexes, and other
                companies. My main tasks included communicating with the client
                about their needs, setting up the work order for the team and
                facilitating due dates, setting up frontend and backend coding,
                and setting up backend marketing programs.
              </p>
            </div>
            <div>
              <h2>Career Goals</h2>
              <p>
                My current goal is to get into some form of App development. My
                work with Websites and Marketing has pushed me into wanting to
                develop Apps that help people in this field. Whether it be for
                easier analytics tracking, or just more clarity, I think it
                would be fun to make an App that helps people in this field.
              </p>
              <p>
                I also have a passion for video games and board games and would
                love to get into the field of game development. I would love to
                find a career either creating a game I love, or help make an app
                or website for a boardgame that assists playing the boardgame.
              </p>
            </div>
            <div>
              <p>
                If you would like a copy of my Resume, please click the download
                link below.
              </p>
              <a href="/assets/Resume/Resume.pdf" download>
                Download
              </a>
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              backgroundColor: "bisque",
              color: "darkslategrey",
              borderRadius: "2.5em",
              padding: "1em",
              height: "50em",
            }}
          >
            <h2>Personal Skills and experience</h2>
            <h4>Technical Skills</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Prisma</li>
              <li>Domain Hosting/Transferring</li>
              <li>Microsoft Powerpoint, Excel, Word</li>
              <li>Computer Technologies and Hardware</li>
            </ul>
            <h4>Soft Skills</h4>
            <ul>
              <li>Leadership</li>
              <li>Organization</li>
              <li>Management</li>
              <li>Team Building</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
      <Box maw={400} mx="auto">
        <Group justify="center" mb={5}>
          <Button onClick={toggle} style={{ marginTop: "5em" }}>
            Past History
          </Button>
        </Group>

        <Collapse in={opened}>
          <Text
            style={{
              display: "flex",
              flexDirection: "flex-start",
              justifyContent: "center",
            }}
          >
            <div>
              <h3>Past History</h3>
              <h4>C&S Mailing -- Product Fulfillment</h4>
              <h5>July 2021 - December 2023</h5>
              <p>
                As a product fulfillment employee for C&S Mailing I work in our
                fulfillment room and ensure any orders that are placed to our
                ecommerce clients gets prepped, boxed, and shipped properly to
                the customer. I check for any quality control errors on the
                products being shipped, and ensure the correct products are
                being fulfilled quickly. I also helped create inventory
                management for the products we have in our warehouse.
              </p>
              <h4>City of Overland Park -- Police Dispatcher</h4>
              <h5>July 2016 - July 2021</h5>
              <p>
                As a police dispatcher I have experience every day gathering
                information from callers and getting that information to our
                patrol officers, detectives, and other varying law enforcement
                officials.
              </p>
              <h4>Children's Treehouse Learning Center - Assistant Teacher</h4>
              <h5>January 2016 - July 2016</h5>
              <p>
                Assisted the lead teacher with kids aged 1.5 years - 3 years.
                Also promoted to lead teacher for the Art enrichment program for
                kids aged 1 to 5 years.
              </p>
              <h4>Derby Dining Center - Supervisor</h4>
              <h5>August 2011 - December 2015</h5>
              <p>
                Led team of kitchen staff of 20+ employees in set up, serving,
                and clean up through each major serving time at dining center on
                campus.
              </p>

              <h4>Wheatstate Pizza - Manager</h4>
              <h5>July 2014 - December 2015</h5>
              <p>
                Led team of 15 employees through day to day business of a
                pizzeria. While there I was an opening manager and closing
                manager depending on the day. Opening the store required me to
                set up cash tills for employees and start the process of making
                food for the day. Closing entailed balance cash tills and
                creating deposits for the banks, as well as cleaning and
                preparing for the next day.
              </p>
            </div>
          </Text>
        </Collapse>
      </Box>
    </div>
  );
};

export default Work;
