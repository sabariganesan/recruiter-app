/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Btn } from "../../components/Controls/Button/Button";
import { InputField } from "../../components/Controls/InputField/InputField";
import Loader from "../../components/Loader/Loader";
import { GET_DATA_REQUEST } from "../../sagas/type";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_DATA_REQUEST })
  }, [])

  return (
    <div>
            home

      <Btn text="click" />
      {/* <Loader /> */}
      <InputField />

    </div>
  )
}

export default Home
