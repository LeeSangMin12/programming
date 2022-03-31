import React from "react";
import styled from "styled-components";
import Eco from '@mui/icons-material/EnergySavingsLeaf';

const Spinner = (props) => {
  return (<Outter>
    <Eco style={{
      color:'#673ab7', fontSize: "150px"
    }}/>
  </Outter>);
};

const Outter = styled.div`
  background: #e5d6ff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  display:flex;
  align-items:center;//세로 중앙 정렬
  justify-content:center; //가로 중앙 정렬
  
`;

export default Spinner;
