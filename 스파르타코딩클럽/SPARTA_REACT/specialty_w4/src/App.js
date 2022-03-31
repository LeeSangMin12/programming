import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  createBucket,
  loadBucketFB,
  addBucketFB,
} from "./redux/modules/bucket";

import BucketList from "./BucketList";
import Detail from "./Detail";
import Progress from "./Progress";
import NotFound from "./NotFound";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Spinner from "./Spinner";
import Icons from './button';
import Add from './create.js'

function App() {
  // const [list, setList] = React.useState([
  //   "영화관 가기",
  //   "매일 책읽기",
  //   "수영 배우기",
  // ]);
  const text = React.useRef(null);
  const desc = React.useRef(null);
  const exam = React.useRef(null);

  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.bucket.is_loaded);

 
  React.useEffect(async () => {
    dispatch(loadBucketFB());
  }, []);

  // const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);
    // dispatch(createBucket({ text: text.current.value, completed: false }));
  //   dispatch(
  //     addBucketFB({
  //       text: text.current.value,
  //       desc: desc.current.value,
  //       exam: exam.current.value,
  //       completed: false,
  //     })
  //   );
  // };

  return (
    <div className="App">
        <Link to="/create"><Icons /></Link>
      <Container>
        <Title>
          <Link to="/">내 사전</Link>
        </Title>
        {/* <Progress /> */}
        <Line />

        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="/create" element={<Add />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </Container>

     {/* <Input>
        <h3>단어 추가하기</h3>
        <input type="text" ref={text} placeholder="단어" />
        <textarea type="text" ref={desc} placeholder="설명" />
        <textarea type="text" ref={exam} placeholder="예시" />
        <button onClick={addBucketList}>추가하기</button>
      </Input> */}
      
      {!is_loaded && <Spinner />}
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;

  & > * {
    padding: 5px;
  }
  & input {
    border: 1px solid #888;
    width: 70%;
    margin: 0px 30px 20px 0px;
  }

  & input:focus {
    outline: none;
    border: 1px solid #a673ff;
  }

  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;

//useEffect 발생되는 시점(빈 의존성 배열, 처음 실행될때,update해줄때 )
//상태 변화