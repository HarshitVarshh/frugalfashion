import React from "react";
import Card from "./Card";
import logo1 from '../Images/Picture1.jpg';
import logo2 from '../Images/Picture2.png';
import logo3 from '../Images/Picture3.png';
import logo4 from '../Images/Picture4.jpg';
import logo5 from '../Images/Picture5.png';
import logo6 from '../Images/Picture6.jpg';
import logo7 from '../Images/Picture7.png';
import logo8 from '../Images/Picture8.jpg';
import logo9 from '../Images/Picture9.png';
import logo10 from '../Images/Picture10.jpg';
import logo11 from '../Images/Picture11.png';
import logo12 from '../Images/Picture12.png';
import logo13 from '../Images/Picture13.png';
import logo14 from '../Images/Picture14.png';
import logo15 from '../Images/Picture15.jpg';
import logo16 from '../Images/Picture16.png';
import logo17 from '../Images/Picture17.png';
import logo18 from '../Images/Picture18.jpg';
import logo19 from '../Images/Picture19.jpg';
import logo20 from '../Images/Picture20.jpg';
import logo21 from '../Images/Picture21.png';
import logo22 from '../Images/Picture22.png';
import logo23 from '../Images/Picture23.jpg';
import logo24 from '../Images/Picture24.jpg';
import logo25 from '../Images/Picture25.jpg';
import logo26 from '../Images/Picture26.jpg';

function AboutUs() {
  var cards_data = [
    {
      title: "Vero est similique",
      img: logo1,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo2,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo3,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo4,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo5,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo6,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo7,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo8,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo9,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo10,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo11,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo12,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo13,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo14,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo15,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo16,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo17,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo18,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo19,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo20,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo21,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo22,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo23,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo24,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo25,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    },
    {
      title: "Vero est similique",
      img: logo26,
      content:
        "Vero est similique sunt, fugitreprehenderit vel aliquid nobis, sequi accusamus ad expedita, autemmaxime ipsam error asperiores ratione quis!",
    }
  ];
  return (
    <div id="aboutus" className="body_content">
      <h1>Our Story</h1>
      <img></img>
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
    <div >
        {cards_data.map((cd) => {
          return (<div><p><Card title={cd.title} content={cd.content} img={cd.img} /> </p></div>
          );
        })}
      </div>
  </div>
    
  );
}

export default AboutUs;
