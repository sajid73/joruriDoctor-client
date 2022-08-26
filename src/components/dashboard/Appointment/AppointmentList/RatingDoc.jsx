import { Rating } from "@mui/material";
import React, { useState } from "react";
import { updateDoctor } from "../../../../api";
import ShowResult from "../../../common/others/ShowResult";

const RatingDoc = ({ docid, rating }) => {
  const [value, setValue] = useState(rating || 4);
  const [submitStats, setSubmitStats] = useState({
    status: "",
    desc: "",
    open: false,
  });
  const handleChange = async (newValue) => {
    setValue(newValue);
    const newRating = Math.round((docid.rating + newValue) / 2);
    const res = await updateDoctor(docid._id, { rating: newRating });
    if (res?.status === 200) {
      setSubmitStats({
        status: "success",
        desc: "Thanks for feedback",
        open: true,
      });
    } else {
      setSubmitStats({
        status: "error",
        desc: "Something Went Wrong",
        open: true,
      });
    }
  };
  return (
    <>
      <Rating
        name="feedback"
        value={value}
        onChange={(_, newValue) => {
          handleChange(newValue);
        }}
      />
      <ShowResult submitStats={submitStats} setSubmitStats={setSubmitStats} />
    </>
  );
};

export default RatingDoc;
