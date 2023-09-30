"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Tablecard from "../module/Tablecard";
import { useDispatch, useSelector } from "react-redux";
import { showloading, unshowloadnig } from "@mahdion/redux/productslice/slice";
import Loading from "../module/Loading";

const Hoamepage = () => {
  const [data, setData] = useState([]);
  const loading = useSelector((store) => store.product.loding);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showloading());
    axios.get("http://localhost:4000/data").then((res) => {
      setData(res.data);
      dispatch(unshowloadnig());
    });
  }, []);

  return (
    <div>
      {loading ? <Loading /> : null}
      <Tablecard data={data} />
    </div>
  );
};

export default Hoamepage;
