import ImageOne from "../assets/Miniatures/DSC_0484_result.png";
import ImageTwo from "../assets/Miniatures/DSC_0486_result.png";
import ImageThree from "../assets/Miniatures/DSC_0507_result.png";
import ImageFour from "../assets/Miniatures/DSC_0531_result.jpg";
import ImageFive from "../assets/Miniatures/DSC_0180.jpg";
import ImageSix from "../assets/Miniatures/DSC_0202.jpg";
import ImageSeven from "../assets/Miniatures/DSC_0207.jpg";
import ImageEight from "../assets/Miniatures/DSC_0219.jpg";
import ImageNine from "../assets/Miniatures/PXL_20240405_130929601.jpg";
import ImageTen from "../assets/Miniatures/PXL_20240624_011745559.jpg";
import ImageEleven from "../assets/Miniatures/PXL_20240720_024605978.jpg";
import ImageTwelve from "../assets/Miniatures/PXL_20240720_024612681.jpg";

const Hobbies = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "1em",
        marginTop: "1em",
      }}
    >
      <div>
        <h2>Hobbies</h2>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Personally, I have a few things that I love to do everyday:</p>
          <div>
            <ul style={{ display: "flex", width: "50em" }}>
              <li>
                <h4>Paint Miniatures</h4>
              </li>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <li>
                  <h4>Tabletop RPG Games/Board Games</h4>
                </li>
                My favorites right now:
                <li>Dungeons and Dragons</li>
                <li>Pathfinder</li>
                <li>Warhammer: Age of Sigmar</li>
                <li>Magic the Gathering</li>
              </ul>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <li>
                  <h4>Video Games</h4>
                </li>
                My favorites right now:
                <li>Baldurs Gate 3</li>
                <li>World of Warcraft</li>
                <li>League of Legends</li>
              </ul>
              <li>
                <h4>Disc Golf</h4>
              </li>
            </ul>
          </div>
          <p style={{ width: "40em", padding: "1em" }}>
            I am very passionate about a lot of things in life. My family will
            always be my first love. I just love spending time with them and
            sharing the things that I enjoy with them. Every day is a new
            journey with kids and its better than I could have imagined.
          </p>
        </div>
      </div>
      <div>
        <h3>Gallery</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
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
          <div>
            <img
              src={ImageFive}
              style={{ height: "15em", width: "20em", padding: ".5em" }}
            />

            <img
              src={ImageSix}
              style={{ height: "15em", width: "20em", padding: ".5em" }}
            />

            <img
              src={ImageSeven}
              style={{ height: "15em", width: "20em", padding: ".5em" }}
            />

            <img
              src={ImageEight}
              style={{ height: "15em", width: "20em", padding: ".5em" }}
            />
          </div>
          <div>
            <img
              src={ImageNine}
              style={{ height: "20em", width: "15em", padding: ".5em" }}
            />

            <img
              src={ImageTen}
              style={{ height: "20em", width: "15em", padding: ".5em" }}
            />

            <img
              src={ImageEleven}
              style={{ height: "20em", width: "15em", padding: ".5em" }}
            />

            <img
              src={ImageTwelve}
              style={{ height: "20em", width: "15em", padding: ".5em" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          <p style={{ width: "40em" }}>
            Painting Miniatures has become such an enjoyment for me that I post
            pictures of them online for others to see. If you're interested,
            check out my{" "}
            <a href="https://www.instagram.com/tmarrminis/">instagram!</a> I've
            even started doing painting competitions which have been a blast!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
