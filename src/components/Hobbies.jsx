import ImageOne from "../assets/Miniatures/DSC_0484_result.png";
import ImageTwo from "../assets/Miniatures/DSC_0486_result.png";
import ImageThree from "../assets/Miniatures/DSC_0507_result.png";
import ImageFour from "../assets/Miniatures/DSC_0531_result.jpg";

const Hobbies = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <h2>Hobbies</h2>
      </div>
      <div>
        <p>
          I am very passionate about a lot of things in life. My family will
          always be my first love. I just love spending time with them and
          sharing the things that I enjoy with them. Every day is a new journey
          with kids and its better than I could have imagined.
        </p>
        <p>Personally, I have a few things that I love to do everyday:</p>
        <ul style={{ textAlign: "left" }}>
          <li>
            <h4>Paint Miniatures</h4>
          </li>
          <li>
            <h4>Play Tabletop Games</h4>
          </li>
          <ul>
            My favorites right now:
            <li>Dungeons and Dragons</li>
            <li>Pathfinder</li>
            <li>Warhammer: Age of Sigmar</li>
            <li>Magic the Gathering</li>
          </ul>
          <li>
            <h4>Video Games</h4>
          </li>
          <ul>
            My favorites right now:
            <li>Baldurs Gate 3</li>
            <li>World of Warcraft</li>
            <li>League of Legends</li>
          </ul>
          <li>
            <h4>Play Disc Golf</h4>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Painting Miniatures has become such an enjoyment for me that I post
          pictures of them online for others to see. If you're interested, check
          out my <a href="https://www.instagram.com/tmarrminis/">instagram!</a>{" "}
          I've even started doing painting competitions which have been a blast!
        </p>
        <img
          src={ImageOne}
          style={{ height: "15em", width: "20em", padding: ".5em" }}
        />
        <img
          src={ImageTwo}
          style={{ height: "15em", width: "20em", padding: ".5em" }}
        />
        <img
          src={ImageThree}
          style={{ height: "15em", width: "20em", padding: ".5em" }}
        />
        <img
          src={ImageFour}
          style={{ height: "15em", width: "20em", padding: ".5em" }}
        />
      </div>
    </div>
  );
};

export default Hobbies;
