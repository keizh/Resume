// @material-tailwind-react
import { Button, Chip, Typography } from "@material-tailwind/react";

const Skills = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT JS",
  "NODE JS",
  "CONTEXT API",
  "REDUX MANAGEMENT LIBRARY",
  "TAILWIND CSS",
  "REACT ROUTER DOM",
  "MONGODB",
  "BOOTSTRAP",
  "GIT",
  "FRAMER MOTION",
  "HTTP SERVER",
  "WEB SOCKET SERVER",
];

function Page1() {
  return (
    <div className="h-screen flex items-center justify-center sm:-my-[5vh] relative z-[5] bg-white">
      <div className=" flex flex-col items-center gap-[12px]">
        <div className="w-[250px] sm:w-[200px]">
          <img
            className="rounded-full"
            src={`https://media.licdn.com/dms/image/v2/D4D03AQHxGNKUQh_KFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714676873188?e=1746057600&v=beta&t=UtxgYBBw0it3LMJn2ID6UC0GGUyn6Xp382ACeTR0gmA`}
          />
        </div>
        <p className="font-qtext text-xl max-w-[350px] text-center leading-[40px]">
          Hi , I am{" "}
          <span className="bg-black border-2 rounded-md text-white p-1 text-2xl">
            KRISHNA MULAY
          </span>
          <br />
          Frontend Full-Stack Software Developer
        </p>
        <Button color="amber" className="">
          DOWNLOAD RESUME
        </Button>
        <div className="mt-5">
          <Typography className="text-center" variant="h5" color="blue">
            SKILLS
          </Typography>
          <div className="max-w-[500px] mt-[10px] flex flex-wrap gap-3 justify-center ">
            {Skills.map((ele, index) => {
              return (
                <Chip
                  key={index}
                  variant="outlined"
                  value={ele}
                  className="hover:scale-[1.1] ease-out duration-300"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
