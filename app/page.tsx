import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <section className="h-screen max-w-screen">
        <div className="mx-auto my-32 max-w-max text-center">
          <p className="mx-auto w-max text-6xl">Hi, I’m</p>
          <h1 className="text-8xl font-extralight tracking-wide">Adam Peter</h1>
        </div>
        <Image
          className="mx-auto my-12"
          src=""
          alt="---"
          width="300"
          height="300"
        />
        <div className="mx-auto flex w-max flex-col space-y-6 rounded p-8 text-center">
          <a className="group relative text-3xl" href="/#software">
            <span className="absolute -left-6 text-white opacity-100 group-hover:opacity-0">
              ...
            </span>
            software engineer
            <span className="absolute -right-6 text-blue-500 opacity-0 group-hover:opacity-100">
              ...
            </span>
          </a>

          <a className="group relative text-3xl" href="/#entrepreneurship">
            <span className="absolute -left-6 text-white opacity-100 group-hover:opacity-0">
              ...
            </span>
            entrepreneur
            <span className="absolute -right-6 text-blue-500 opacity-0 group-hover:opacity-100">
              ...
            </span>
          </a>
          <a className="group relative text-3xl" href="/#learning">
            <span className="absolute -left-6 text-white opacity-100 group-hover:opacity-0">
              ...
            </span>
            reader, writer, learner
            <span className="absolute -right-6 text-blue-500 opacity-0 group-hover:opacity-100">
              ...
            </span>
          </a>
        </div>
      </section>

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
          The internet only sped up my self-education. I’ve taken countless
          programming courses and built my own projects, teaching myself
          software engineering without ever touching the subject in school.
        </p>
      </section>

      <footer>Get in touch link social links @badmood111</footer>
    </div>
  );
};

export default Home;
