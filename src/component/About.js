import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function About() {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <Container>
        <Button
          variant="outline-dark"
          className="side-btn border-0"
          onClick={() => setVisibility(!visibility)}
        >
          {visibility ? <div>close</div> : <div>about</div>}
        </Button>

        <div className={visibility ? "about-section active" : "about-section"}>
          <div className="about-section-content">
            Born and raised in France. Educated at Gobelins Paris. Former
            Designer at Unit9 and Fred&Farid. Currently associate creative
            director at Jam3 in Toronto.Clients include Google, Adidas, Spotify,
            Twitter, Oculus, La Mer, Audi, Instagram, Facebook, eBay, MTV,
            LuluLemon, THX, Warner Brothers, and more.
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
