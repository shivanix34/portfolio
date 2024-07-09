import "./WorkStyles.css"
import Work from "./Work";
import WorkData from "./WorkData"

import React from 'react'

const Data = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkData.map((val,ind) => {
            return(
              <Work
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              />
            )
          })}

        </div>
    </div>
  )
}

export default Data