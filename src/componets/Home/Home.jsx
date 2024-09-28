import { useDispatch, useSelector } from "react-redux";
import "./Home.css";

import React from "react";
import { decrement, increment } from "../../store/slice/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);

  const increaseValue = () => {
    dispatch(increment());
  };
  const decreaseValue = () => {
    dispatch(decrement());
  };

  return (
    <div className="home">
      <div className="home-box">
        <button className="btn" onClick={() => increaseValue()}>
          +
        </button>
        <input
          type="text"
          readOnly
          style={{ cursor: "default" }}
          value={data}
        />
        <button className="btn" onClick={() => decreaseValue()}>
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
