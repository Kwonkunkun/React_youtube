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
<header>
  <span style = "color: #EA2027; font-family:courier; font-size:300%;" >YOUTUBE</span>
  <span style = "color: #ffffff; font-family:verdana; font-size:200%; margin: 20px;" >clone colding</span>
</header>

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#use-tech">Use tech</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#structure">구조 및 구현내용</a></li>
    <li><a href="#reference">Reference</a></li>
  </ol>
</details>

---

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

<span style="font-size:1.1em;">Default Page (view most popular video)</span>
<img width="1680" alt="스크린샷 2021-01-16 오후 4 08 47" src="https://user-images.githubusercontent.com/59603575/104805728-91e20b80-5815-11eb-86a7-c35528058358.png">

<span style="font-size:1.1em;">Search Page (view video searched keyword)</span>
<img width="1680" alt="스크린샷 2021-01-16 오후 4 09 47" src="https://user-images.githubusercontent.com/59603575/104805730-93133880-5815-11eb-8eeb-8efaf60912ca.png">

<span style="font-size:1.1em;" >Play Page (view video clicked)</span>
<img width="1680" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104805733-97d7ec80-5815-11eb-8f52-df801d5b676a.png">

[Demo link](https://kwonkunkun.github.io/React_youtube/)

---

## Structure

<span style="font-size:1.1em ;">전체 구조</span>

<img width="1680" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806018-b8a14180-5817-11eb-87f3-ebcf11d7e917.png">

<span style="font-size:1.1em; color: #e67e22;">Search 기능</span>

<div style="display: flex">
<img width="60%" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806022-bc34c880-5817-11eb-8ce1-bc1dbb7dfd07.png">
<span style="font-size: 1.1em; margin-left:1em; color: #e67e22;">
1. Search form (검색창) 입력</br>
2. App에서 PAGE state 변경 </br>
3. Search video list에서 config에 getApiData요청 </br>
4. 그 데이터를 이용해서 thumnail출력
</span>
</div>

<span style="font-size:1.1em; color: #3498db;">Thumbnail click시 video page로 가는 기능</span>

<div style="display: flex">
<img width="60%" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/104806020-ba6b0500-5817-11eb-910c-28f2f785ac98.png">
<span style="font-size: 1.1em; margin-left:1em; color: #3498db;">
1. Search form (검색창) 입력</br>
2. App에서 PAGE state 변경 </br>
3. Search video list에서 config에 getApiData요청 </br>
4. 그 데이터를 이용해서 thumnail출력
</span>
</div>

---

## Reference

Reference Link : </div>
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
