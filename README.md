<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
# YouTube Clone Coding
- Youtube api, react를 이용한 youtube 클론코딩 프로젝트

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#reason">프로젝트 목적</a></li>
    <li><a href="#use-tech">Use tech</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#structure">구조 및 구현내용</a></li>
    <li><a href="#new">알게된 것</a></li>
    <li><a href="#reference">Reference</a></li>
  </ol>
</details>

---

<div id="reason"/>

## 프로젝트 목적

- React에 대한 이해를 하기 위한 실전 연습 프로젝트
- public api에 대한 학습


<!--USE TECH-->

## Use tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
</span>

---

<!-- ABOUT THE PROJECT -->

## About The Project

[Demo link](https://kwonkunkun.github.io/React_youtube/)

### Default Page
***

<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 08 47" src="https://user-images.githubusercontent.com/59603575/105004696-ab828d80-5a77-11eb-8359-c9d177e5556e.png">
<img width="46%" alt="스크린샷 2021-01-16 오후 4 08 47" src="https://user-images.githubusercontent.com/59603575/105004700-acb3ba80-5a77-11eb-90f5-d29bb14a529c.png">
</div>

<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 08 47" src="https://user-images.githubusercontent.com/59603575/105004705-ade4e780-5a77-11eb-8b62-feaf7d1a154e.png">
<img width="45%" alt="스크린샷 2021-01-16 오후 4 08 47" src="https://user-images.githubusercontent.com/59603575/105004712-af161480-5a77-11eb-9596-45b634795a43.png">
</div>

- youtube api의 popular video의 데이터를 받아 화면에 보이게 구현
- 미디어쿼리를 이용하여 화면에 따른 반응형 화면 구현

### Search Page (view video searched keyword)
***
<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 09 47" src="https://user-images.githubusercontent.com/59603575/104805730-93133880-5815-11eb-8eeb-8efaf60912ca.png">
<img width="46%" alt="스크린샷 2021-01-16 오후 4 09 47" src="https://user-images.githubusercontent.com/59603575/105005989-62333d80-5a79-11eb-9bf4-d9dfd49bc9e2.png">
</div>

- 사용자가 search창에 입력한 keyword를 이용해서 youtube api의 search data를 받아와 화면에 보이게 구현
- 화면에 따른 반응형 화면 구현

### Play Page (view video clicked)
***

<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/105005981-5fd0e380-5a79-11eb-8254-4ac635cd33a6.png">
<img width="45%" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/105005975-5e9fb680-5a79-11eb-80b6-fbbed7d873ae.png">
</div>

- thumbnail을 눌렀을때 그 thumbnail의 videoid에 맞는 비디오를 화면에 보이게 구현
- 화면에 따른 반응형 화면 구현

### Mobile!!
<div>
<img width="30%" alt="image" src="https://user-images.githubusercontent.com/59603575/105007489-66605a80-5a7b-11eb-9b40-b2705c500957.png">
<img width="30%" alt="image" src="https://user-images.githubusercontent.com/59603575/105007992-028a6180-5a7c-11eb-9d77-5db73f8890eb.png">
</div>
---

## Structure

### 전체 구조

<img width="1680" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806018-b8a14180-5817-11eb-87f3-ebcf11d7e917.png">

***

### Search 기능

<img width="60%" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806022-bc34c880-5817-11eb-8ce1-bc1dbb7dfd07.png">

1. Search form (검색창) 입력</br>
2. App에서 PAGE state 변경 </br>
3. Search video list에서 config에 getApiData요청 </br>
4. 그 데이터를 이용해서 thumnail render

***

### Thumbnail click시 video page로 가는 기능


<img width="60%" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806020-ba6b0500-5817-11eb-910c-28f2f785ac98.png">
<span style="font-size: 1.1em; margin-left:1em; color: #3498db;"></br>
1. Thumbnail img or container click</br>
2. App에서 PAGE state 변경 </br>
3. config에 받은 video id를 이용해서 getApiData요청 </br>
4. 그 데이터를 이용해서 video title, like 등의 데이터들을 받아와서 video contanier에서 render

---

<div id="new"/>

## 알게된 것

- React의 state, props를 이해
- component와 pure component의 차이점 학습
- React hook 학습
- postcss 학습
- public api의 사용법, postman 이용방법 학습
- 부족한 css의 grid에 대한 이해

---

## Reference

Reference Link : </br>
[youtube api](https://developers.google.com/youtube/v3/getting-started?hl=ko) </br>
[create react](https://create-react-app.dev)</br>
[dream coding ellie](https://academy.dream-coding.com/enrollments#)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
