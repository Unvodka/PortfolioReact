import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context';
import './About.css';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [readMore1, setReadMore1] = useState([false]);
  const [readMore2, setReadMore2] = useState([false]);
  const [readMore3, setReadMore3] = useState([false]);
  const [readMore4, setReadMore4] = useState([false]);

  const text1 =
    "I achevied the Codecademy Full stack career path course and enjoyed learning differents topics and technologies like Nodejs, Expressjs, Passportjs and Mongodb but also Postman, Stripe, Bootstrap, MaterialUi, Fontawesome, and other libraries. I'm still learning with enthousiastism and i'm excited by what is coming when i think about real world applications. ";
  const text2 =
    "Time to get more understanding of web development. I realised what is web development, his mecanisms and languages. I stayed focus on Javascript and React, and started Codecademy pro courses like 'Learn Javascript', or 'Learn React.js', also some sides videos on youtube as well and almost all courses was part of the Full stack career path course on Codecademy.com. ";
  const text3 =
    'I started to learn coding and his basics wich are HTLM and CSS. I loved to discover new skills, it was the beginning of an amazing coding experience. It was though for a swimming teacher but with enthousiasm i kept going. Then i started to write code on the side just to practice and watch videos like advanced css, flexbox etc... , and others comparing differents technologies around Javascript that was recommended by a friend of mine. ';
  const text4 =
    'I worked for 5 years as self-employed swimming teacher and aquafitness instructor in pools, spa, hotels and sport centers. That was a really good experience and that taught me how to work with differents publics and differents structures but also work in team and respect protocols. I really liked it but i decided to change my activity when the Covid came and close everything about sport. That is when i started to learn web development. ';

  return (
    <>
      <div id="aboutId" className="top">
        <h2>About Me</h2>
        <div className="container-about">
          <div className="about"></div>
          <p
            className="description"
            style={{ backgroundColor: darkMode ? '#222' : 'wheat' }}
          >
            Hi, My name is Arnaud and i'm a junior Web Developer. I have been a
            swimming teacher, aquafitness instructor and lifeguard for 6 years.
            I also traveled to New-Zealand for a year where i was working in
            farms, construction and traveling around this amazing country. After
            that, I did a full-stack Javascript course on{' '}
            <a
              href="https://www.codecademy.com."
              rel="noreferrer"
              target="_blank"
            >
              https://www.codecademy.com
            </a>{' '}
            and that gave me the fondamentals of Javascript and technologies
            around it like MongoDb, Express.js, React.js, and Node.js to follow
            the MERN stack. I have done small web applications trying to improve
            my skills that you can see{' '}
            <a href="#portfolioId" rel="noreferrer">
              below
            </a>
            .<br></br>
            <br />
            Now i want to put my recent acquired skills to your service while i
            can still learn from your experience to take the best of it, and
            make our collaboration a real synergy in term of work, results and
            conditions.
            <br></br>
            I'm seeking for a company who need a brand new web developer to find
            quickly my place in the coding ship. <br></br>
            Here is my Github :{' '}
            <a
              href="https://github.com/Unvodka"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/Unvodka
            </a>{' '}
            <br></br>
            Im a happy person, not shy, enthousiast and good learner. <br></br>
            Please let me know if we could help each other and find something.
            Best regards
          </p>
        </div>
      </div>

      <div id="experiencesId" className="box-timeline">
        <h2 className="experiences">Experiences</h2>

        <div className="boxes">
          <div
            className="box b1"
            data-anim="1"
            style={{
              backgroundColor: darkMode ? '#222' : 'rgb(250, 238, 216)',
            }}
          >
            <h5>Full Stack Engineer</h5>
            <p>2021</p>
            <p>
              {!readMore1 ? text1 : `${text1.substring(0, 150)}...`}
              <a
                href="https://www.codecademy.com/profiles/Arnaud-ca-dev"
                style={{ color: darkMode ? 'rgb(250, 238, 216)' : '#222' }}
                target="_blank"
                rel="noreferrer"
                alt="timeline"
                className="btn"
              >
                www.Codecademy.com
              </a>
              <button
                className="btn-readmore"
                onClick={() => {
                  setReadMore1(!readMore1);
                }}
              >
                {readMore1 ? 'read more' : 'show less'}
              </button>
            </p>
          </div>

          <div
            className="box b2"
            data-anim="2"
            style={{
              backgroundColor: darkMode ? '#222' : 'rgb(250, 238, 216)',
            }}
          >
            <h5>JavaScript and React</h5>
            <p>2020-2021 </p>
            <p>
              {!readMore2 ? text2 : `${text2.substring(0, 150)}...  `}
              <button
                className="btn-readmore"
                onClick={() => {
                  setReadMore2(!readMore2);
                }}
              >
                {readMore2 ? 'read more' : 'show less'}
              </button>
            </p>
          </div>

          <div
            className="box b3"
            data-anim="3"
            style={{
              backgroundColor: darkMode ? '#222' : 'rgb(250, 238, 216)',
            }}
          >
            <h5> Html, and Css</h5>
            <p>2020</p>
            <p>
              {!readMore3 ? text3 : `${text3.substring(0, 150)}...  `}

              <button
                className="btn-readmore"
                onClick={() => {
                  setReadMore3(!readMore3);
                }}
              >
                {readMore3 ? 'read more' : 'show less'}
              </button>
            </p>
          </div>

          <div
            className="box b4"
            data-anim="4"
            style={{
              backgroundColor: darkMode ? '#222' : 'rgb(250, 238, 216)',
            }}
          >
            <h5>What did i do before development :</h5>
            <p>2016-2020</p>
            <p>
              {!readMore4 ? text4 : `${text4.substring(0, 150)}... `}
              <button
                className="btn-readmore"
                onClick={() => {
                  setReadMore4(!readMore4);
                }}
              >
                {readMore4 ? 'read more' : 'show less'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
