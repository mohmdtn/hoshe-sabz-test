"use client";

import axios from "axios";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const HomeData = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const token = localStorage.getItem("token");

  // Request to Get Data
  useEffect(() => {
    axios
      .get("http://shserver.top:8080/test/users/getData", { headers: { Authorization: token }, })
      .then((res) => {
        // Disable the i Tag
        if (sectionRef.current)
        sectionRef.current.innerHTML = res.data.result.replace(/<i>/g, '&lt;i&gt;').replace(/<\/i>/g, '&lt;/i&gt;');
      })
      .catch((e) => toast.error("Network Error!"));
  }, [token]);

  return <section ref={sectionRef}></section>
};

export default HomeData;
