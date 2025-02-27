/* eslint-disable react/prop-types */

import { Typography, Button } from "@material-tailwind/react";

function ProjectComp({ ele, index }) {
  return (
    <div
      className={` flex justify-between flex-col lg:flex-row m-2 gap-[20px] items-center rounded-md   p-[10px] lg:p-[0px] lg:border-0 `}
    >
      <div className="max-w-[500px]  min-w-[300px]  overflow-hidden">
        <img
          className="w-full rounded-md"
          src={ele.url}
          alt={ele.name + "image"}
        />
      </div>
      <div className="flex flex-col justify-between gap-[20px]">
        <Typography variant="h4" className="text-center" color="orange">
          {ele.name}
        </Typography>
        <ol>
          {ele.description.map((ele, index) => (
            <li key={index} className="text-left my-2">
              {index + 1}. {ele}
            </li>
          ))}
        </ol>
        {ele.alert != "" && (
          <Typography
            variant="h6"
            className="font-black text-red-600 text-center"
          >
            {ele.alert}
          </Typography>
        )}
        {/* <a href=""> */}
        <div className="flex justify-evenly">
          <a href={ele.frontendGH || undefined} target="_blank">
            <Button
              disabled={ele.frontendGH == "" ? true : false}
              color="green"
            >
              Frontend Code
            </Button>
          </a>
          <a href={ele.backendGH || undefined} target="_blank">
            <Button disabled={ele.backendGH == "" ? true : false} color="amber">
              Backend Code
            </Button>
          </a>
          {ele.vlink != "" && (
            <a href={ele.vlink || undefined} target="_blank">
              <Button disabled={ele.vlink == "" ? true : false}>
                Video Explanation
              </Button>
            </a>
          )}
        </div>
        <a href={ele.link || undefined} target="_blank">
          <Button
            disabled={ele.link == "" ? true : false}
            color="blue"
            fullWidth
          >
            Access {ele.name} Website <span className="text-red-500"></span>
          </Button>
        </a>
        {/* </a> */}
      </div>
    </div>
  );
}

export default ProjectComp;
