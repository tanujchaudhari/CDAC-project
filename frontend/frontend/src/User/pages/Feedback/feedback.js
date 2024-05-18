import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../../../config";
import StarRating from "./StarRating"; // Import the StarRating component

function Feedback({ user }) {
  const  id  = sessionStorage["userId"];
     
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0); // State for the rating

  const navigate = useNavigate();

  const submitFeedback = () => {
    if (feedback.trim() === "") {
      toast.warning("Please enter your feedback");
    } else if (rating === 0) {
      toast.warning("Please select a rating");
    } else {
      const body = {
        feedback,
        rating,
        userId: id
      };

      console.log(body);

      const url = `${URL}/feedback/add`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] === "success") {
          toast.success("Successfully posted Feedback");

          navigate("/userhome");
        } else {
          toast.error(result["error"]);
        }
      }).catch((error)=>{
        toast.error("Failed")
      });
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="row">
        <div className="col"></div>
        <div className="col shadow-lg p-3 mb-5 bg-body rounded-3">
          <h3 className="text-center">Feedback</h3>
          <hr />
          <br />
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Your Feedback
              </label>
              <textarea
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
                className="form-control"
                rows="6"
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Rating
              </label>
              <StarRating value={rating} onChange={setRating} />
            </div>

            {/* <div className="mb-3">
              <div>
                Have an enquiry? <Link to="/user/enquiry">Enquire here.</Link>
              </div>
              <br />
              <div>
                No account yet? <Link to="/signup">Signup here</Link>
              </div>
              <br />
            </div> */}
            <div className="mb-3">
              <button
                onClick={submitFeedback}
                className="btn btn-primary"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Feedback;
