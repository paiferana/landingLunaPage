import React from "react";
import "./styles/PhotoGallery.css";

const PhotoGallery = () => {
  const people = [
    { name: "Ana Júlia", imgSrc: process.env.PUBLIC_URL + "/images/anajulia.jpeg" },
    { name: "Sarah", imgSrc: process.env.PUBLIC_URL + "/images/sarah.jpeg" },
    { name: "Késia", imgSrc: process.env.PUBLIC_URL + "/images/kesia.jpeg" },
    { name: "Milene", imgSrc: process.env.PUBLIC_URL + "/images/Milene.jpeg" },
    { name: "Brenda", imgSrc: process.env.PUBLIC_URL + "/images/brenda.jpeg" },
  ];

  return (
    <>
      <div className="center">
        <h3>Um time de mulher para mulher, conheça o Innovatrix</h3>
      </div>
      <div className="gallery-container">
        {people.map((person, index) => (
          <div className="photo-card" key={index}>
            <img src={person.imgSrc} alt={person.name} className="photo" />
            <div className="overlay">
              <p className="name">{person.name}</p>
            </div>
          </div>
        ))}
      </div></>
  );
};

export default PhotoGallery;
