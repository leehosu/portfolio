import React from 'react';
import { Element } from "react-scroll";
import './Experience.css';

const Experience = () => {

  return (
    <Element className="contents-Experience" name="experience">
      <h2 className="Experience-heading">Experience</h2>

      <div className="Experience-timeline">
        <div className="vtimeline-point">
          <div className="vtimeline-icon"></div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">April 2019 – Proceeding</span>
            <div className="vtimeline-content">
              <h3>연구실 Blog 개발</h3>
              <h4>TypeScript, React.JS, Redux.JS, Spring, JPA 등</h4>
              <p>
                TypeScript, React.JS, Redux.JS, Spring을 활용한 연구실 blog
                개발입니다.
                <br /> 현재 현업 개발자이신 선배님들과 함께 개발중인
                프로젝트이며 여기서 저는 전체적인 TypeScript, Recat.js 환경 설정
                및 Component 설계와 구상을 하였습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="vtimeline-point">
          <div className="vtimeline-icon"></div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">March 2019 – November 2019</span>
            <div className="vtimeline-content">
              <h3>Error Tracking Flatform 개발</h3>
              <h4>TypeScript, React.JS, GraphQL, Material-UI 등</h4>
              <p>
                TypeScript와 React.JS, GraphQL등을 이용한 Error Tracking
                Platform 입니다.
                <br />
                개발자가 개발 후 운영 서비스중에 파악하지 못한 error들에 대해
                Tracking해주고 DashBoard를 이용하여 통계를 내주는 서비스 입니다.
                저는 여기서 TypeScript와 React.JS, Marterial-ui를 활용하여
                Component 설계 및 Data flow를 구상하고 개발하였습니다. <br />
                교내 Capston Design에서 금상을 받았으며, 현재 담당 교수님과
                학회지 논문 작업중에 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="vtimeline-point">
          <div className="vtimeline-icon"></div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">May 2019 – June 2019</span>
            <div className="vtimeline-content">
              <h3>Simple-AES 보안 프로젝트 </h3>
              <h4>Python</h4>
              <p>
                정보보호론 수업때 진행했던 프로젝트로써 Python과 library를
                활용한 brute-force 방법으로 구현하는 simple-aes 암호화
                기법입니다. round를 걸쳐서 암호화된 문자를 해독하는
                프로그래밍입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="vtimeline-point">
          <div className="vtimeline-icon"></div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">May 2018 – June 2018</span>
            <div className="vtimeline-content">
              <h3> CGV 영화 홈페이지 개발</h3>
              <h4> JSP, JDBC, MySQL, JAVA, HTML</h4>
              <p>
                팀 프로젝트로 영화 예매 홈페이지인 CGV를 구현하였습니다. <br />
                HTML로 기초 홈페이지 틀을 제작하고 MySQL로 DB를 입력하여
                사용가능한 데이터를 입력 받고 JDBC로 DB와 HTML을 연동시킨 후{" "}
                <br />
                JSP로 form태그 및 bean로 HTML에서 DB를 사용하도록
                구현하였습니다. 이때, 제가 맡은 역할은 HTML로 웹사이트 틀을
                구현하고 DB 스키마를 구상하여 JSP로 입력 받는 전체적인 역할을
                하였습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="vtimeline-point">
          <div className="vtimeline-icon"></div>
          <div className="vtimeline-block">
            <span className="vtimeline-date">October 2017 – October 2017</span>
            <div className="vtimeline-content">
              <h3> 빅데이터 기반 서울 안심먹거리 어플 제작 </h3>
              <h4> Android Studio </h4>
              <p>
                교내 해커톤 대회에 참가하여 2인 1조로 본 어플을 제작하여 은상을
                받았습니다. <br />
                특히 서울시 홈페이지에 등록되어있는 안심먹거리 가게들의 GOOGLE
                map 좌표를 받아와서 gps에 연동시킨 후 자신 주변에 있는
                안심먹거리 가게들의 위치와 정보, 번호를 나타나게 만들었습니다.
                그래서 그 가게를 터치하게 되면 전화번호를 받아와 문의를 할 수
                있게끔 구현하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;