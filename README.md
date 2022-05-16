# 학습 출처

### [만들면서 배우는 리액트 : 기초 ](https://www.inflearn.com/course/%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88/dashboard)

최종 프로젝트 : https://milooy.github.io/cat-jjal-maker/  
진유림 깃허브 : https://github.com/milooy/cat-jjal-maker
<br /><br />

## 개발 환경 설정

- VSCode
- Live Server 플러그인 설치
- Preferences > Settings > format on save 체크
  <br /><br />

---

<br />

# React

> #### Babel

- head 태그 내부의 script에서 바뀐 js를 볼 수 있음
  <br/><br/>

> #### {}

: JS의 표현식 출력
<br/><br/>

> ### element

: const 변수명 = ( )

- **{ 변수명 } 형태로 추가할 수 있음**
  <br/><br/>

> ### Component

1. function 함수명() { return () }
2. const 함수명 = () => { return () }  
   : contents를 담은 일관적인 UI를 보여줄 수 있음

- **<함수명 /> 형태로 추가할 수 있음**
- 대문자로 시작하도록 할 것
  <br/><br/>

> #### HTML property -> React

eg) class -> className
onclick -> onClick
<br/><br/>

> #### 리액트 이벤트 핸들러 함수 작명 시 convention

: handle로 시작

- prop으로 전달할 시, on을 앞에 붙임
  <br/><br/>

> #### Local Storage : 브라우저 자체 DB

- 브라우저를 새로고침해도 남아 있게 됨
- String으로 저장됨

eg) localStorage.setItem("name", "지연")  
localStorage.getItem("name");

- 개발자 도구 -> Application -> Local Storage에서 확인 가능  
  <br/><br/><br/>

---

## 기타

### CSS 스타일링 하기 좋은 라이브러리

1. https://emotion.sh/docs/introduction
2. https://tailwindcss.com/

### GitHub Pages로 배포

- Settings > Pages 에서 설정

<br/><br/><br/>
