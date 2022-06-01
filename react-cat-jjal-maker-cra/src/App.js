import React from 'react';
import './App.css';

import Title from './components/Title'

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const Form = ({ updateMainCat }) => {                // const 함수이름 = () => // 화살표 함수
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(e) {
    const userValue = e.target.value;
    setErrorMessage("");
    if (includesHangul(userValue)) {
      setErrorMessage('한글은 입력할 수 없습니다.');
    }
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    if (value === "") {
      setErrorMessage("빈 값으로 만들 수 없습니다.");
      return;
    }
    updateMainCat(value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="영어 대사를 입력해주세요"
          onChange={handleInputChange}
          value={value} />
        <button type="submit">생성</button>
      </form>
      <p style={{ color: 'red' }}>
        {errorMessage}
      </p>
    </div >

  )
}

const MainCard = (props) => {       // 객체 그대로 받기
  return (
    <div className="main-card">
      <img src={props.img} alt="고양이" width="400" />
      <button onClick={props.onHeartClick}>{props.heart ? "💖" : "🤍"}</button>
    </div>
  )
}

function CatItem({ img }) {      // 객체 풀어서 받기(destructuring)
  return (
    <li>
      <img src={img} alt="고양이" style={{ width: "150px" }} />
    </li>
  )
}

function Favorites({ favorites }) {
  if (favorites.length === 0) {
    return (
      <div>사진 위 하트를 눌러 고양이 사진을 저장해주세요</div>
    )
  }
  return (
    <ul className="favorites">
      {favorites.map((cat) => <CatItem img={cat} key={cat} />)}
    </ul>
  )
}

const App = () => { // element -> Component로 변경
  const images = ["https://cataas.com/cat/60b73094e04e18001194a309/says/react",
    "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn",
    "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript"
  ]

  const [counter, setCounter] = React.useState(() => {
    return Number(jsonLocalStorage.getItem('counter'))
    // localStorage 접근 최소화로 인한 성능 최적화
    // 지연초기화 : 실제 내부함수 실행은 초기렌더링에만 실행
  });
  const [mainImage, setMainImage] = React.useState(images[0]);
  const [favorites, setFavorites] = React.useState(() => {
    return (jsonLocalStorage.getItem('favorites') || [])
  });

  async function setInitialCat() {
    // 앱 진입할 때 API 호출해서 MainImage 생성하기
    const newCat = await fetchCat("First Cat");
    console.log(newCat);
    setMainImage(newCat);
  }

  // setInitialCat(); // 끊임없이 호출됨
  // App이 UI를 새로 그릴 때마다 App의 모든 코드들이 호출됨

  React.useEffect(() => {
    setInitialCat();
  }, [])

  async function updateMainCat(value) {
    const newCat = await fetchCat(value)
    setMainImage(newCat);
    setCounter((prev) => { // state의 비동기성 -> 함수로 처리하면 해결 가능
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem('counter', nextCounter);
      return nextCounter;
    })
  }

  function handleHeartClick() {
    const nextFavorites = [...favorites, mainImage]
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem('favorites', nextFavorites);
  }

  const alreadyFavorite = favorites.includes(mainImage);

  return (
    <div>
      <Title>{counter ? counter + "번째" : ""} 고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard img={mainImage} onHeartClick={handleHeartClick} heart={alreadyFavorite} />
      <Favorites favorites={favorites} />
    </div>
  )
}

export default App;
