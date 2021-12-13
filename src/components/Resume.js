import React from 'react'
import { useState } from 'react'

const Resume = () => {
    
    const [readMore1, setReadMore1] = useState([false])
    const [readMore2, setReadMore2] = useState([false])
    const [readMore3, setReadMore3] = useState([false])
    const [readMore4, setReadMore4] = useState([false])

    const text1 = "I achevied the Codecademy Full stack career path course and went through different topics and technologies like Nodejs, Expressjs, Passportjs and Mongodb but also around protocols security and other sub-subjects wich all are mainly essentiels. I did it with pleasure and now i hope to find a company to improve my skills and learning and helping as much as i'm motivate and enthousiastic.";
    const text2 = "Time to get more understanding of web development. I realised a bit more the width  and height of the web, his mecanisms and languages. I stayed focus on Javascript and React. I started Codecademy pro courses like 'Learn Javascript', or 'Learn React.js', also some sides videos on youtube as well and almost all courses was part of the Full stack career path course still on Codecademy. ";
    const text3 = "I started to learn coding and his basics wich are HTLM and CSS. I appreciate to discover new skills, it was the beginning of an amazing coding experience. It wasn't that hard for a swimming teacher and with enthousiasm i kept going. Then i started to write code on the side just to practice and watch videos like advanced css, flexbox etc... , and others comparing differents technologies around Javascript wich was recommended by a Web Developer friend";
    const text4 = "I worked for 5 years as self-employed swimming teacher and aquafitness instructor in pools, spa, hotels and sport centers. That was a really good experience wich teached me to work with differents publics and differents structures. Also as work in team and respect protocols. I really enjoyed it but i decided to change my activity when the Covid came and close everything about sport. Then i started to learn wev development.";
    return (
        
        <div id="experiencesId" className="box-timeline">  

            <h2 className='experiences'>Experiences</h2>       

            <div className="box b1" data-anim="1">
                <h5>Full Stack Engineer</h5>
                <p>2021</p>
                <p>{!readMore1 ? text1 : `${text1.substring(0, 100)}...`}
                    <a href="https://www.codecademy.com/profiles/Arnaud-ca-dev" target='_blank' rel='noreferrer' alt="timeline" className="btn">www.Codecademy.com</a>
                    <button className="btn-readmore" onClick={() => {
                        setReadMore1(!readMore1)}}>{readMore1 ? "read more" : "show less"}
                    </button>
                </p>
                
            </div>
               
            <div className="box b2" data-anim="2">
                <h5>JavaScript and React</h5>
                <p>2020-2021 </p>
                <p>{!readMore2 ? text2 : `${text2.substring(0, 100)}...`}
                    <a href="https://www.codecademy.com/profiles/Arnaud-ca-dev" target='_blank' rel='noreferrer' alt="timeline" className="btn">www.Codecademy.com</a>
                    <button className="btn-readmore" onClick={() => {
                        setReadMore2(!readMore2)}}>{readMore2 ? "read more" : "show less"}
                    </button>
                </p>
                
            </div>

            <div className="box b3" data-anim="3">
                <h5> Html, and Css</h5>
                <p>2020</p>
                <p>{!readMore3 ? text3 : `${text3.substring(0, 100)}...`}
                    <a href="https://www.codecademy.com/profiles/Arnaud-ca-dev" target='_blank' rel='noreferrer' alt="timeline" className="btn">www.Codecademy.com</a>
                    <button className="btn-readmore" onClick={() => {
                        setReadMore3(!readMore3)}}>{readMore3 ? "read more" : "show less"}
                    </button>
                </p>
                
            </div>

            <div className="box b4" data-anim="4">
                <h5>What did i do before development :</h5>
                <p>2016-2020</p>
                <p>{!readMore4 ? text4 : `${text4.substring(0, 100)}...`}
                    <button className="btn-readmore" onClick={() => {
                        setReadMore4(!readMore4)}}>{readMore4 ? "read more" : "show less"}
                    </button>
                </p>
            </div>
           
        </div>
    )
}

export default Resume;