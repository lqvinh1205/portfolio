import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListProject.css";
import { getListProject } from "./projectsSlice";
const ListProject = () => {
  const projects = useSelector((state) => state.project.value);
  const dispath = useDispatch();
  console.log(projects);
  useEffect(() => {
    dispath(getListProject());
  }, []);
  return (
    <>
      <div className="list-project">
        {projects.map((item, index) => {
          return (
            <div className="list-project-items" key={index}>
              <div className="list-project-items-img">
                <img
                  src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226330/car/popular5_egtjh7.png"
                  alt=""
                />
              </div>
              <div className="list-project-items-title">{item.name}</div>
              <div className="list-project-items-subdes">{item.subdescription}</div>
              <div className="list-project-items-action">
                <a href={item.linkPreview} target="_blank" rel="noreferrer">
                  <button>Live</button>
                </a>
                <a href={item.linkSource}  target="_blank" rel="noreferrer">
                  <button>Source</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ListProject;
