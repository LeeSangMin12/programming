import React, { useState } from "react";
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

const CreateDay = () => {
    const days = useFetch('http://localhost:3001/days')
    const navigate  = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const addDay = (e) => {
      setIsLoading(true);
      if(!isLoading){
        setIsLoading(true);
        fetch(`http://localhost:3001/days/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            day: days.length + 1
          }),
        }).then((res) => {
          if (res.ok) {
            alert("생성이 완료 되었습니다");
            navigate(`/`);
            setIsLoading(false);
          }
        })
      }
      
    };

return (<div>
  <h3>현재 일수 : {days.length}일</h3>
  <button onClick={addDay}  style={{
          opacity: isLoading ? 0.3 : 1,
        }}> {isLoading ? "Saving..." : "Day추가"}</button>
  </div>)
}

export default CreateDay;