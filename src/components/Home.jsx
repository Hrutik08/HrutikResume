import React from "react";
import vg from "../assets/AppDevelopment.jpg";
import hrutik from "../assets/Hrutik.png"
import js from "../assets/Js.png"
import iOS from "../assets/iOS.jpg"
import react from "../assets/react.png"
import ReactNative from "../assets/react-native.png"
import swift from "../assets/swift.jpg"
import nivesh from "../assets/Nivesh.png"
import medisetter from "../assets/Medisetter.png"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    
      <div className="home" id="home">
        <main>
          <h1>Hello,<br/> I am Hrutik <br/>Mhatre</h1>
          <p>Mobile Application developer</p>
         
            < img src={hrutik}/>
         
        </main>
      </div>
      
      <div className="home2" id="about">
      
        <img src={vg} alt="Graphics" />
       
        <div>
          
          <p>
            I am expertise in developing mobile applications for an iOS and Android platforms. I am proficiently managing a team and experience in writing, optimising, debugging Swift and JS code, and solving complex issues. My strengths are Creative, Time Management and Quick learning.
          </p>
        </div>
      </div>

      <div className="home3" id="Projects">
        <div>
          <h1>Projects Undertaken</h1>
          <p>
            <div > 
              <a href="https://nivesh.com/en"  target="_blank" rel="noreferrer">
              <img src={nivesh}/>
              </a>
              
              
              <p>
                Year : 2022(June) - 2023 (Current) <br />
                Technology Used : iOS, Swift 5 , Cocoa Touch
              </p>
            </div>
           
           <div> 
           <a href="https://medisetter.com/"  target="_blank" rel="noreferrer"><img src={medisetter}/></a>
           <p>
           Year : 2022(August) - 2023 (Feb) <br />
            Technology Used : JavaScript, React Native
           </p>
           </div>
           
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Technologies Known</h1>

          <article>
            <div
              style={{
             //   animationDelay: "0.3s",
              }}
            >
             <img src={js}/>
              {/* <p>JavaScript</p> */}
            </div>

            <div
              style={{
              //  animationDelay: "0.5s",
              }}
            >
               <img src={ReactNative}/>
              {/* <p>React Native</p> */}
            </div>

            <div
              style={{
              //  animationDelay: "0.7s",
              }}
            >
            <img src={react}/>
              {/* <p>React</p> */}
            </div>

            <div
              style={{
             //   animationDelay: "1s",
              }}
            >
               <img src={iOS}/>
              {/* <p>Instagram</p> */}
            </div>

            <div
              style={{
               // animationDelay: "1.2s",
              }}
            >
               <img src={swift}/>
              {/* <p>Instagram</p> */}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;