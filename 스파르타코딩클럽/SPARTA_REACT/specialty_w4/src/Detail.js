import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteBucket,
  deleteBucketFB,
  trueUpdateBucketFB,
  falseUpdateBucketFB,
} from "./redux/modules/bucket";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

const Detail = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  const bucket_index = params.index;
  const add = bucket_list[bucket_index];
  
  return (
    <div>
      <h5>단어</h5>
      <h2>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h2>
      <h5>설명</h5>
      <h2>{bucket_list[bucket_index] ? bucket_list[bucket_index].desc : ""}</h2>
      <h5>예시</h5>
      <h2>{bucket_list[bucket_index] ? bucket_list[bucket_index].exam : ""}</h2>
      {bucket_list[bucket_index]?.completed === false ? 
        <Button
          variant="outlined"
          onClick={() => {
            // dispatch(updateBucket(bucket_index));
            dispatch(trueUpdateBucketFB(bucket_list[bucket_index].id));
            navigate("/");
          }}
        >
          완료하기
        </Button>
       : 
        <Button
          variant="outlined"
          onClick={() => {
            // dispatch(updateBucket(bucket_index));
            dispatch(falseUpdateBucketFB(bucket_list[bucket_index].id));
            navigate("/");
          }}
        >
          취소하기
        </Button>}

      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          navigate("/");
        }}
      >
        삭제하기
      </Button>
    </div>
  );
};

export default Detail;
