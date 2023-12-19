"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default  function Code() {
    const token = localStorage.getItem("token");
  
    // useEffect(() => {
      // axios
      // .get("http://shserver.top:8080/test/users/getCode", {headers: {Authorization: token}})
      // .then((res) => console.log(res))
    // }, [token]);


    return (
        <h2>code page</h2>
    )
}