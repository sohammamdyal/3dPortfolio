import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {/* {[...Array(6)].map((_value, index) => ( */}
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>01</h3>

                  <div>
                    <h4>Uber Clone</h4>
                    <p>Web Application</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Nextjs, MongoDB</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>02</h3>

                  <div>
                    <h4>Personal Assistant</h4>
                    <p>Web Application</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Python, MongoDB, HTML, CSS</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>

                  <div>
                    <h4>Todo-list Tracker</h4>
                    <p>Mobile Application</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>React-Native, MongoDB, Android Studio</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
            
            
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Work;
