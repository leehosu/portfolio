import React from 'react';
import { Element } from "react-scroll";
import './Experience.css';
import ExperienceItem from '../ExperienceItem';

const projectList = [
  {
    id: 0,
    date: "April 2019 - Proceeding",
    title: "연구실 Blog 개발",
    stack: "TypeScript, React.JS, Redux.JS, Spring, JPA 등",// eslint-disable-next-line
    contents: "TypeScript, React.JS, Redux.JS, Spring을 활용한 연구실 blog개발입니다.\
                 현재 현업 개발자이신 선배님들과 함께 개발중인\
                프로젝트이며 여기서 저는 전체적인 TypeScript, Recat.js 환경 설정\
                및 Component 설계와 구상을 하였습니다.",
    url: "https://github.com/selabRepo/seBlog-Front-csr",
  },
  {
    id: 1,
    date: "March 2019 - November 2019",
    title: "Error Tracking Platform 개발",
    stack: "TypeScript, React.JS, Material-UI 등",// eslint-disable-next-line
    contents: "TypeScript와 React.JS 을 이용한 Error Tracking Platform 입니다.\
                개발자가 개발 후 운영 서비스중에 파악하지 못한 error들에 대해\
                Tracking해주고 DashBoard를 이용하여 통계를 내주는 서비스 입니다.\
                저는 여기서 TypeScript와 React.JS, Marterial- ui를 활용하여\
                Component 설계 및 Data flow를 구상하고 개발하였습니다.\
                교내 Capston Design에서 금상을 받았으며, 현재 담당 교수님과\
                학회지 논문 작업중에 있습니다.",
    url: "https://github.com/y0c/errorify",
  },
  {
    id: 2,
    date: "May 2019 - June 2019",
    title: "Simple-AES 보안 프로젝트 ",
    stack: "Python",// eslint-disable-next-line
    contents: "정보보호론 수업때 진행했던 프로젝트로써 Python과 library를\
                활용한 brute- force 방법으로 구현하는 simple - aes 암호화\
                기법입니다.round를 걸쳐서 암호화된 문자를 해독하는\
                프로그래밍입니다.",
    url: "https://github.com/leehosu/simpleAES-python",
  },
  {
    id: 3,
    date: "May 2018 - June 2018",
    title: " CGV 영화 홈페이지 개발 ",
    stack: " JSP, JDBC, MySQL, JAVA, HTML",// eslint-disable-next-line
    contents: "팀 프로젝트로 영화 예매 홈페이지인 CGV를 구현하였습니다.\
                HTML로 기초 홈페이지 틀을 제작하고 MySQL로 DB를 입력하여 \
                사용가능한 데이터를 입력 받고 JDBC로 DB와 HTML을 연동시킨 후\
                JSP로 form태그 및 bean로 HTML에서 DB를 사용하도록 \
                구현하였습니다.이때, 제가 맡은 역할은 HTML로 웹사이트 틀을 \
                구현하고 DB 스키마를 구상하여 JSP로 입력 받는 전체적인 역할을 \
                하였습니다.",
    url : "#",
  },
]

const Experience = () => {
  return (
    <Element className="contents-Experience" name="experience">
      <h2 className="Experience-heading">Experience</h2>
      {projectList.map(
        ({
          id,date,title,stack,contents,url
        }) => (
          <ExperienceItem key={id} date={date} title={title} stack={stack} contents={contents} url={url} />
        )
      )}
      
    </Element>
  );
};

export default Experience;