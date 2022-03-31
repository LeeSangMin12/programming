import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = (props) => {
  const navigate = useNavigate();
  const my_lists = useSelector((state) => state.bucket.list);

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            completed={list.completed}
            className="list_item"
            key={index}
            onClick={() => {
              navigate("/detail/" + index);
            }}
          >
            <Div>
              <div>단어</div>
              {list.text}
            </Div>
            <Div>
              <div>설명</div>
              {list.desc}
            </Div>
            <Div>
              <div>예시</div>
              <Color>{list.exam}</Color>
            </Div>
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
  // max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props) => (props.completed ? "#fff" : "#333")};
  background-color: ${(props) => (props.completed ? "#673ab7" : "aliceblue")};
`;



const Div = styled.div`
  margin-bottom: 0.7rem;
  & div {
    font-size: 0.5rem;
  }
`;

const Color = styled.span`
  margin-top:0px;
  color:blue;
`;



export default BucketList;
