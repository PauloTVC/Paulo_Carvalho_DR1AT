import React, { useState } from "react";
import Media from "./Media";
import { FaVideo } from "react-icons/fa"; // Ícone de vídeo
import { AiOutlinePicture } from "react-icons/ai"; // Ícone de imagem

export default function Card({ Title, Picture, Video, Description, Play }) {
  const [fotoVideo, SetFotoVideo] = useState(true);

  return (
    <div className="Card">
      <h2>{Title}</h2>
      <div>
        <AiOutlinePicture
          className={fotoVideo ? "ativado" : ""}
          onClick={() => {
            SetFotoVideo(true);
            Play(false); // Certifique-se de que o estado de vídeo é falso quando a foto é selecionada
          }}
        />
        <FaVideo
          className={fotoVideo ? "" : "ativado"}
          onClick={() => {
            SetFotoVideo(false);
          }}
        />
      </div>
      {fotoVideo ? (
        <Media src={Picture} alt={Title} />
      ) : (
        <Media src={Video} Play={Play} />
      )}
      <p>{Description}</p>
    </div>
  );
}
