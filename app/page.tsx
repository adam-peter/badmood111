import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <p>Hi, I'm</p>
      <h1>Adam Peter</h1>
      <Image src="" alt="---" width="50" height="50" />
      <div className="flex flex-col">
        <a href="/#software">...software engineer...</a>
        <a href="/#entrepreneurship">...entrepreneur...</a>
        <a href="/#learning">...reader, writer, learner...</a>
      </div>

      <section className="mt-4 bg-myWhite text-myBlack">
        <h2 id="software">I 🖤 software.</h2>
        <p>
          Really. Tinkering with technology was one of my deepest passions ever
          since childhood.
        </p>
        <p>
          Building legos, reading tech magazines and repairing (read: breaking
          functional) electronics was a daily ocupation of mine.
        </p>
        <p>No wonder I decided to become a developer.</p>
      </section>

      <section className="mt-4">
        <h2 id="entrepreneurship">Entrepreneurship is my raison d'être.</h2>
        <p>
          Operating and scaling online businesses allows me to provide leveraged
          value to a large population and **impact millions**.
        </p>
        <p>
          With extensive education and experience in management, copywriting,
          and selling in general, I have worked on numerous professional
          projects, mainly concerning web application development.
        </p>
        <p>
          Whether working solo or as part of a team, in a personal or enterprise
          setting, I have honed my skills and gained valuable insights.
        </p>
        <p>
          I strive to ballance my love for technology with my burning desire to
          make a difference in the world. That desire, I portray through
          entrepreneurship.
        </p>
      </section>

      <section className="mt-4 bg-myWhite text-myBlack">
        <h2 id="learning">There’s always something new to learn.</h2>
        <p>
          My grandfather taught me to read when I was 4 years old. I’ve been
          reading everything that caught my interest, until I developed a love
          for reading itself.
        </p>
        <p>
          The internet only sped up my self-education. I've taken countless
          programming courses and built my own projects, teaching myself
          software engineering without ever touching the subject in school.
        </p>
      </section>
    </div>
  );
};

export default Home;
