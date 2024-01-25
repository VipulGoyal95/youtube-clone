import React, { useState } from 'react'
import "./categoriesbar.scss";

const category=[
  'react',
  'reactjs',
  'angular',
  'angularjs',
  'vue',
  'vuejs',
  'dbms',
  'django',
  'mernstack',
  'dynamic programming',
  'arrays',
  'graphs',
  'mongodb',
  'mongoose',
  'nodejs',
  'expressjs',
  'python',
  'flask',
  'django',
  'godndjd',
  'django',
  'dkdkcm',
  'django',
  'passport',
  'login',
  'passport-mongoose',
  'jwt',
]

const CategoriesBar = () => {
  const [activeElement,setActivelement] =useState("All");
  // console.log(activeElement);
  return (
    <div className="categories-bar">
      {category.map((value,i)=>(
        <span key={i} className={activeElement.value === value?"active":""} onClick={()=>setActivelement({value})}>{value}</span>
      ))}
    </div>
  )
}

export default CategoriesBar;
