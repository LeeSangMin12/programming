import React from "react";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createBucket,
  loadBucketFB,
  addBucketFB,
} from "./redux/modules/bucket";

export default function Add() {
  const text = React.useRef(null);
  const desc = React.useRef(null);
  const exam = React.useRef(null);

  const dispatch = useDispatch();

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);
    // dispatch(createBucket({ text: text.current.value, completed: false }));
    dispatch(
      addBucketFB({
        text: text.current.value,
        desc: desc.current.value,
        exam: exam.current.value,
        completed: false,
      })
    );
  };

  return (
    <Input>
      <h3>단어 추가하기</h3>
      <input type="text" ref={text} placeholder="단어" />
      <textarea type="text" ref={desc} placeholder="설명" />
      <textarea type="text" ref={exam} placeholder="예시" />
      <Link to="/"><button onClick={addBucketList}>추가하기</button></Link>
    </Input>
     
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
