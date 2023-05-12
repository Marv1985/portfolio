import React from "react";
import "/home/marv/react-projects/portfolio/src/Projects/Css/projects.css";
import LeftSide from "/home/marv/react-projects/portfolio/src/Projects/Components/LeftSide/LeftSide.js";
import workoutApp1884 from "/home/marv/react-projects/portfolio/src/Projects/Images/Workout-app/workout-app-1884.png";
import workoutApp1080 from "/home/marv/react-projects/portfolio/src/Projects/Images/Workout-app/workout-app-1080.png";
import workoutApp720 from "/home/marv/react-projects/portfolio/src/Projects/Images/Workout-app/workout-app-720.png";
import workoutApp500 from "/home/marv/react-projects/portfolio/src/Projects/Images/Workout-app/workout-app-500.png";

export default function WorkoutApp() {
  const projectInfo = {
    header: {
      head: "Workout Tracker App",
    },
    paragraph: {
      para: " A gym session and progress tracker app. Created using React, Sass, Jest and Firebase.",
    },
  };

  return (
    <LeftSide
      live_url={["https://workout-app-75346.web.app//"]}
      git_url={["https://github.com/Marv1985/workout-app"]}
      target={["_blank"]}
      imageOne={workoutApp1884}
      imageTwo={workoutApp1080}
      imageThree={workoutApp720}
      imageFour={workoutApp500}
      header={projectInfo.header.head}
      paragraph={projectInfo.paragraph.para}
    />
  );
}
