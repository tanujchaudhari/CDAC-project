import React from "react";
import { URL } from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UserContactUs() {
  const [contactUs, setContactUs] = useState({});

  const getContactUs = () => {
    const url = `${URL}/contactus`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setContactUs(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    }).catch((error)=>{
      toast.error("Failed")
    });
  };

  useEffect(() => {
    getContactUs();
  }, []);

  return (
    <span class="border border-secondary">
      <br/>
      <br/>
      <div className="p-5 text-center bg-light shadow-lg p-3 mb-5 bg-body rounded-3">
        <h1 class="mb-3">{contactUs.title}</h1>

        <div class="row">
          <h3 className="mb-3 ">
        </h3>
        <h4 className="mb-3 ">
          <h3 style={{marginRight:"1200px"}}><u>About Us:</u></h3>
        <h4 style={{marginLeft:"200px"}}>
          Welcome to VacationVista, your premier provider of resort management systems. Our team specializes in delivering cutting-edge software solutions tailored to the unique needs of resorts of all sizes. With our intuitive platform, you can streamline operations, enhance guest experiences, and drive growth. Join the countless resorts worldwide that trust VacationVista for innovative solutions and personalized support. Welcome to the future of resort management. Welcome to VacationVista.   
          
          </h4> 
        </h4>

          <div class="col"></div>
          <div class="col">
            <h3 className="mb-3">Email: {contactUs.email}</h3>
            <h3 className="mb-3">Mobile-No: {contactUs.mobileNo}</h3>
          </div>
          <div class="col"></div>
        </div>
        {/* <h4 className="mb-3 ">{contactUs.description}</h4> */}
        

        {/* <a className="btn btn-primary" href="" role="button">Call to action</a> */}
      </div>
    </span>
  );
}

export default UserContactUs;
