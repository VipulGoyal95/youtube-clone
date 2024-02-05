import React, { useState } from "react";
import "./categoriesbar.scss";
import { useDispatch } from "react-redux";
import { getPopularvideo, getsearchVideo } from "../../redux/slice/videoSlice";

const category = [
  "All",
  "react",
  "reactjs",
  "angular",
  "angularjs",
  "vue",
  "vuejs",
  "dbms",
  "django",
  "mernstack",
  "dynamic programming",
  "arrays",
  "graphs",
  "mongodb",
  "mongoose",
  "nodejs",
  "expressjs",
  "python",
  "flask",
  "django",
  "godndjd",
  "django",
  "dkdkcm",
  "django",
  "passport",
  "login",
  "passport-mongoose",
  "jwt",
];

const smallcategory = () => [
  "ALL",
  "From MR. INDIAN HACKER",
  "For You",
  "Recently Uploaded",
  "Watched"
];

const CategoriesBar = () => {
  const [activeElement, setActivelement] = useState("All");
  console.log(activeElement);
  const dispatch = useDispatch();
  const handleclick = (value) => {
    setActivelement(value);
    if (value === "All") {
      dispatch(getPopularvideo());
    } else {
      dispatch(getsearchVideo(value));
    }
  };

  return (
    <div className="categories-bar">
      {category.map((value, i) => (
        <span
          key={i}
          className={activeElement === value ? "active-cat" : ""}
          onClick={() => handleclick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export const SmallcategoryBar = ()=>{
  const [activeElement2, setActivelement2] =useState('All');

  const handleclick2=(value)=>{
    setActivelement2(value);
  }

  return (
    <div className="categories-bar">
      {smallcategory.map((value, i) => (
        <span
          key={i}
          className={activeElement2 === value? "active-cat" : ""}
          onClick={() => handleclick2(value)}
        >
          {value}
        </span>
      ))}
    </div>
  )
}



export default CategoriesBar;
