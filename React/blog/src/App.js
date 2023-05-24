//eslint-disable 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [logo, setLogo] = useState('ReactBlog')
  let [a, changeTitle] = useState(['강남 우동 맛집','강남 초밥 맛집','강남 훠궈 맛집']) //자료 잠깐 저장,
  let [like, setLike] = useState([0,0,0])
  let [modal, setModal] = useState(false);

  //state 만드는법
  //a : 강남 우동 맛집
  //b : state 변경을 도와주는 함수
  //변수 넣을 땐 중괄호

  //변수와 state의 차이점
  //일반 변수는 값자기 변경되면 html에 자동으로 반영 안됨
  //state는 갑자기 변경되면 html이 자동으로 재렌더링됨
  //그렇다고 온갖것을 다 state로 만들지는 말기, 자주 변경될 것 같은 것만
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {
      a.map(function(index, i) {
        return (
          <div className="list">
          <h4 onClick={()=>{setModal(!modal)}}>{index} <span onClick={()=>{ 
            let copy = [...like];
            copy[i] = copy[i] + 1;
            setLike(copy)  
            }}>👍</span> {like[i]} 
          </h4> 
          <p>2월 17일 발행</p>
      </div>
        )
      })
    }
      {/* <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{a[0]} <span onClick={()=>{
          plusLike(like + 1)}
          }>👍</span> {like} </h4> 
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
    
    {
      modal == true ? <Modal a={a}></Modal> : null
    }

    

      <button onClick={()=>{
        let titleCopy = [...a];
        titleCopy[0] = '나 목요일에 누리초밥 먹음'
        changeTitle(titleCopy)
      }}>제목 수정</button>

      <button onClick={() => {
        changeTitle(prevTitle => {
        let sortedTitle = [...prevTitle];
        sortedTitle.sort();
        return sortedTitle;
        });
      }}>가나다순 정렬</button>
    </div>
  );
//   리액트에서 "가나다순 정렬" 버튼에서 오류가 발생하는 이유는 버튼의 클릭 핸들러 함수 내에서 state를 업데이트하는 부분에 있습니다. 리액트에서 state를 업데이트할 때에는 항상 이전 state 값을 기반으로 새로운 state 값을 생성해야 합니다. 그러나 현재 코드에서는 이전 state 값을 사용하지 않고, 바로 sortTitle을 새로운 state 값으로 설정하고 있습니다. 이로 인해 예기치 않은 동작이 발생할 수 있습니다.

// 이를 해결하기 위해서는 sortTitle 변수 대신 이전 state 값을 사용하여 새로운 state 값을 생성해야 합니다. 이를 위해 콜백 형태로 changeTitle 함수를 호출하는 방법을 사용할 수 있습니다. 아래는 수정된 코드 예시입니다:
//커밋용
}
function Modal(props) {
  return(
    <div className="modal">
      <h4>{props.a}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

//컴포넌트로 만들면 좋은 경우
//1. 반복적인 html 축약할 때
//2. 큰 페이지들
//3. 자주 변경되는 것들
//주의 : state 가져다 쓸 때 문제 생김

/**  동적인 UI 만드는 방법 
 * 1. html css 미리 디자인 완성
 * 2. UI의 현재상태를 state로 저장
 * 3. state 따라 UI가 어떻게 보일지 작성
 */
export default App;
