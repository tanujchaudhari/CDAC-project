import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../../config";
import DescriptionComponent from './DescriptionComponent';

const UserFacilityCard = (props) => {
  const { facilityList } = props;

  const navigate = useNavigate();

  const image = require("./../../../image/facility/" +
    facilityList.facilityId +
    ".jpg");
    const description = facilityList.description; 
  return (
    <div>
      <br />
      <div className="card border-dark shadow p-2 mb-4 bg-white rounded" style={{ width: "16rem" }}>
        <img src={image} className="card-img-top" alt="..." style={ {width:"240px" ,height:"180px" }} />
        <div className="card-body">
          <h5 className="card-title">{facilityList.title}</h5>
          {/* <p className="card-text">{facilityList.description}</p> */}
          <DescriptionComponent description={description} />
        </div>
      </div>
    </div>
  );
};

export default UserFacilityCard;
