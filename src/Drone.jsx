import React from "react";
import Carousel from "./Carousel";

export default function Drone() {
  const drones = [
    {
      Title: "DJI Mavic 3 Pro",
      Picture:
        "https://http2.mlstatic.com/D_NQ_NP_748427-MLU74328466608_022024-O.webp",
      Video: "https://www.youtube.com/embed/r5kukRMmZNI",
      Description:
        "Um drone de câmera premium com gravação em 5.1K, ideal para cineastas e fotógrafos profissionais.",
    },
    {
      Title: "Autel EVO Lite+",
      Picture:
        "https://www.autelrobotics.com/wp-content/themes/autel/PC/proimg/z174.png",
      Video: "https://www.youtube.com/embed/1MwBSeCUb7w",
      Description:
        "Drone compacto com uma câmera 6K, ótimo para capturas noturnas e condições de baixa luz.",
    },
    {
      Title: "Skydio 2+",
      Picture:
        "https://cdn.sanity.io/images/mgxz50fq/~production-v2/ee609313730dedabc3441e4d69dd91920ce2d1ac-4396x1557.png",
      Video: "https://www.youtube.com/embed/imt2qZ7uw1s",
      Description:
        "Um drone autônomo com capacidade avançada de evitar obstáculos, perfeito para vídeos em movimento.",
    },
    {
      Title: "Parrot Anafi",
      Picture:
        "https://comparardrones.com.br/wp-content/uploads/2019/01/parrot-anafi-6-500x500.jpg",
      Video: "https://www.youtube.com/embed/pbezR-3wCNM",
      Description:
        "Drone portátil e leve com gravação 4K HDR e gimbal de 180°, ideal para criadores em movimento.",
    },
  ];

  return (
    <div className="Box_1">
      <Carousel Pictures={drones} />
    </div>
  );
}
