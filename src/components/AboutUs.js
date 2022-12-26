import React from "react";
import Card from "./Card";

function AboutUs() {
  var cards_data = [
    {
      title: "Vero est similique",
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
  ];
  return (
    <div id="aboutus" className="body_content">
      <h1>Our Story</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae
        eos reiciendis quisquam repellendus labore nihil expedita aliquid cum
        necessitatibus? Vero est similique sunt, fugit reprehenderit vel aliquid
        nobis, sequi accusamus ad expedita, autem maxime ipsam error asperiores
        ratione quis!Vero est similiqu
      </p>
      <br />
      <br />
      <p>
        Vero est similique sunt, fugit reprehenderit vel aliquid nobis, sequi
        accusamus
      </p>
      <br />
      <p>
        1.Vero est similique sunt, fugit reprehenderit vel aliquid nobis, sequi
      </p>
      <br />
      <p>
        2.Vero est similique sunt, fugit reprehenderit vel aliquid nobis, sequi
      </p>
      <br />
      <p>
        3.Vero est similique sunt, fugit reprehenderit vel aliquid nobis, sequi
      </p>
      <br />
      <br />
      <div className="card_container">
        {cards_data.map((cd) => {
          return <Card title={cd.title} content={cd.content} />;
        })}
      </div>
    </div>
  );
}

export default AboutUs;
