## GitHubPages

https://jiyeonkim23.github.io/react-cat-jjal-maker/

---

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

> document.querySelector('')  
> ReactDOM.render(컴포넌트, 위치)

<br/><br/>

> #### JSX

: JavaScript + XML

- xml : mark-up 언어
- JavaScript에 HTML 태그를 끼얹은 문법
- HTML 태그 안에서 중괄호({})를 사용해서 JS를 쓸 수 있음
  - {} : JS의 표현식 출력
    <br/><br/>

> #### Babel

: 최신 문법을 브라우저가 이해할 수 있는 JavaScript로 통역

- 브라우저는 JSX를 이해하지 못함
- Babel : JSX -> JavaScript
- head 태그 내부의 script에서 바뀐 js를 볼 수 있음
  <br/><br/>

> ### element

: const 변수명 = ( )

- **{ 변수명 } 형태로 추가할 수 있음**
  <br/><br/>

> ### Component

: 재사용 가능한 UI 코드 조각

- element 보다 강력한 점 : 속성을 가질 수 있음

1. function 함수명() { return () }
2. const 함수명 = () => { return () }

- **<함수명 /> 형태로 추가할 수 있음**
- 대문자로 시작하도록 할 것
  <br/><br/>

> ### 상태(State)

: 컴포넌트 안에서 자유롭게 변경할 값이 필요할 때

- 컴포넌트 안에서 만들 수 있다.
- useState 함수로 상태를 추가 가능
- const [상태명, 상태변경함수명] = React.useState(초기값);  
  eg) const [counter, setCounter] = React.useState(1);  
  eg) setCounter(counter+1);  
      setCounter(prev => prev + 1); -> [state의 비동기성 처리 가능](https://ko.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)


<br/><br/>

> #### 리스트

: 배열로 반복되는 UI 그리기

- 배열에서 map을 돌면서 리액트 UI를 반환한다.
  eg) myImages.map(image => <img src={image}</img>)

<br/><br/>

> ### JS에서 API 호출 방법
1. fetch('URL')
.then((response)=> response.json())

+ Promise, 비동기에 대한 학습 필요
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch  
[JS 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)  
[JS Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)  
[JS async, await](https://joshua1988.github.io/web-development/javascript/js-async-await/)  
-> [인프런 async-await 예제 무료 강의](https://www.inflearn.com/course/vue-js/lecture/17061)  
  

2. async await fetch('URL')
- await : .then과의 기능이 동일함

<br/><br/>

> ### UseEffect()
UseEffect( ()=>{
}, [] )
- 두번째 인자가 없으면, 항상 해당 함수들이 호출됨
- 두번째 인자 : 해당 배열[] 안에 있는 값이 바뀔 때만 해당 함수를 호출
  - 빈 배열 : 컴포넌트가 맨 처음에 나타날 때만 불림

- 첫번째 인자가 값일 경우, 매번 해당 값을 읽어온 후, 값을 무시하지만,  
함수일 경우엔, 초기 렌더링에만 실행되어 더 효율적(지연초기화)

<br/><br/>

> #### 폼

```
function onValueChange(e) {
  setValue(e.target.value);
}

<form onSubmit={}>
	<input value={value} onChange={onValueChange} />
	<button type="submit">버튼</button>
</form>
```

<br/><br/>

> #### HTML property -> React

eg) class -> className  
onclick -> onClick
<br/><br/>

> #### CSS 스타일링

- 인라인 스타일링 : style={{스타일속성:스타일값}}
  <br/><br/>

> #### 리액트 이벤트 핸들러 함수 작명 convention

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

> ### TODO
1. Production 버전 React Library 사용
- 개발용 경고 등이 불포함되어 용량 작음

2. Babel 제거
- 브라우저에서 매번 JSX를 JS로 통역하는 게 아니라, 이미 통역된 JS로 올림
<br /><br />

> ## create-react-app
1. 간단한 앱 껍데기 생성
2. React Library Setup(개발/운영용)
3. 테스트 셋업
4. 빌드 셋업
5. [web-pack](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html#%EC%9B%B9%ED%8C%A9%EC%97%90%EC%84%9C%EC%9D%98-%EB%AA%A8%EB%93%88) 셋업
- 서버
- JS로 변환
- 코드 용량 최소화, 압축
<br /><br />

[node](https://joshua1988.github.io/webpack-guide/build/node-npm.html) 설치
```
$npx create-react-app 디렉토리명
$cd 디렉토리명
$npm start
```
- [import, export](https://joshua1988.github.io/vue-camp/es6+/modules.html#%E1%84%86%E1%85%A9%E1%84%83%E1%85%B2%E1%86%AF%E1%84%92%E1%85%AA%E1%84%8B%E1%85%B4-%E1%84%91%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%AD%E1%84%89%E1%85%A5%E1%86%BC) : 파일을 모듈처럼 가져오고 내보냄
<br /><br /><br /><br />

---

## 기타

### CSS 스타일링 하기 좋은 라이브러리

1. https://emotion.sh/docs/introduction
2. https://tailwindcss.com/

### GitHub Pages로 배포

- Settings > Pages 에서 설정
   
### OpenAPI 모음 Git Repository
- https://github.com/public-apis/public-apis

<br/><br/><br/>
