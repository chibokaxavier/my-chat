import React, { useContext, useEffect } from "react";
import { ServiceContext } from "../context/service.provider";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./../store/slices/counter";

function balls() {
  const context = useContext(ServiceContext);
  let count = useSelector(selectCount);
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>
          Count : {count}
        </button>
        <button onClick={() => context.logUser.displayCount()}>
          Log From Service
        </button>
      </div>
    </div>
  );
}

export default balls;
