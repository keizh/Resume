/* eslint-disable react/prop-types */

import { Typography, Button } from "@material-tailwind/react";

function ProjectComp({ ele, index }) {
  return (
    <div
      className={` flex justify-between flex-col ${
        index % 2 == 0 ? "lg:flex-row" : "lg:flex-row"
      } m-2 gap-[20px] items-center rounded-md   p-[10px] lg:p-[0px] lg:border-0 `}
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
        <Typography variant="small" className="text-center">
          {ele.description}
        </Typography>
        {ele.alert != "" && (
          <Typography
            variant="h6"
            className="font-black text-red-600 text-center"
          >
            {ele.alert}
          </Typography>
        )}
        {/* <a href=""> */}
        <a href="#buttons-with-link">
          <Button color="blue" fullWidth>
            Access Above Website <span className="text-red-500"></span>
          </Button>
        </a>
        {/* </a> */}
      </div>
    </div>
  );
}

export default ProjectComp;
