import React, { useState } from "react";
import ToogleSwitch from "./ToggleSwitch";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiList } from "react-icons/tfi";
import Card from "./Card";

//Página principal
export default function MainPage() {
  //Lista de Robôs
  const robots = [
    {
      Title: "ANYmal",
      Picture:
        "https://eesc.usp.br/comunicacao-admin/wp-content/uploads/2022/09/dest-ANYmal-um-dos-robos-quadrupedes-mais-modernos-do-mundo-1024x769-1.jpeg",
      Video: "https://www.youtube.com/embed/eMUlZkNbANI?si=7P8Cy5OPBYVpqrwB",
      Description:
        "A four-legged robot by ANYbotics, designed for industrial inspections, with advanced mobility to navigate hazardous environments like oil rigs and power plants.",
    },
    {
      Title: "Autel EVO Lite+",
      Picture:
        "https://www.autelrobotics.com/wp-content/themes/autel/PC/proimg/z174.png",
      Video: "https://www.youtube.com/embed/1MwBSeCUb7w?si=dGhWw-DFm1zJ3Hc7",
      Description:
        "Drone compacto com uma câmera 6K, ótimo para capturas noturnas e condições de baixa luz.",
    },
    {
      Title: "DJI Mavic 3 Pro",
      Picture:
        "https://http2.mlstatic.com/D_NQ_NP_748427-MLU74328466608_022024-O.webp",
      Video: "https://www.youtube.com/watch?v=r5kukRMmZNI",
      Description:
        "Um drone de câmera premium com gravação em 5.1K, ideal para cineastas e fotógrafos profissionais.",
    },
    {
      Title: "Go2",
      Picture: "https://shop.unitree.com/cdn/shop/products/75_900x.jpg",
      Video: "https://www.youtube.com/embed/6zPvT0ig1VM?si=82vPRVsldyUkK-Gr",
      Description:
        "Unitree Robotics’ affordable quadruped robot designed for research, education, and industrial tasks, offering strong mobility and AI-driven obstacle avoidance.",
    },
    {
      Title: "Go2 with Wheels",
      Picture:
        "https://alphageouk.com/cdn/shop/files/cdd125a1e6064c5caf25dde9b7452f09_288x238_b6fe1368-b286-4826-a92b-496a6298b046.png",
      Video: "https://www.youtube.com/watch?v=iaBDDpuJglY",
      Description:
        "A version of Unitree's Go2 equipped with wheels, combining quadruped walking with wheeled mobility, enhancing its speed and versatility in smoother environments.",
    },
    {
      Title: "MantaRay",
      Picture:
        "https://static.wixstatic.com/media/36a213_744fe0137842434a98f9ea208942dada~mv2.png/v1/fill/w_1170,h_702,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/MantaRay%20web%20shadow.png",
      Video: "https://www.youtube.com/embed/OoXFdf2sWLE?si=XaVdIeEOzBPQ0Qp_",
      Description:
        "The Manta Ray is an autonomous underwater vehicle (AUV) developed by Northrop Grumman for long-range, energy-efficient missions. It uses glider-like propulsion for ocean mapping and surveillance, aligning with the goals of companies like PXGEO in marine exploration.",
    },
    {
      Title: "Perseverance",
      Picture: "https://static.poder360.com.br/2021/02/Mzc2NDkzNA.jpeg",
      Video: "https://www.youtube.com/embed/w-0GMURCDBM?si=2rSn_q5BTDL_C6QV",
      Description:
        "Perseverance is NASA’s most advanced rover, designed to explore the Martian surface, specifically targeting the Jezero Crater to search for signs of ancient life.",
    },
    {
      Title: "Skydio 2+",
      Picture:
        "https://cdn.sanity.io/images/mgxz50fq/~production-v2/ee609313730dedabc3441e4d69dd91920ce2d1ac-4396x1557.png",
      Video: "https://www.youtube.com/embed/imt2qZ7uw1s?si=dA1emvX1ExsARe5p",
      Description:
        "Um drone autônomo com capacidade avançada de evitar obstáculos, perfeito para vídeos em movimento.",
    },
    {
      Title: "Spot",
      Picture:
        "https://bostondynamics.com/wp-content/uploads/2023/06/spot-climbs-stairs-min.jpg",
      Video: "https://www.youtube.com/embed/wlkCQXHEgjA?si=_7EiHRF2HyggfcJI",
      Description:
        "Boston Dynamics’ robot dog, known for autonomous navigation and versatility, used in industries like construction and public safety for inspection and data collection.",
    },
    {
      Title: "Tupã Ex",
      Picture:
        "https://instor.com.br/wp-content/uploads/2022/07/Instor_Tupa_EX-removebg-preview.png",
      Video: "https://www.youtube.com/embed/2_EeSCemwg8?si=xF3O7u9b94QT1MFl",
      Description:
        "The Tupã Ex is an autonomous robot by Instor designed for inspecting hazardous environments, detecting gas leaks, corrosion, and performing 3D visual inspections with 6 hours of autonomy.",
    },
  ];

  const [exibi, setExibi] = useState(false);
  const handleToggle = () => {
    setExibi(!exibi);
  };

  const [videoOn, setVideoOn] = useState(false);

  return (
    <div className="main_page">
      <div className="Toogle-Box">
        <TfiLayoutGrid3 />
        <ToogleSwitch size="small" isOn={exibi} onToggle={handleToggle} />
        <TfiList />
      </div>
      <div className={exibi ? "Lista" : "Grid"}>
        {robots.map((r, i) => (
          <Card
            Title={r.Title}
            Picture={r.Picture}
            Description={r.Description}
            Video={r.Video}
            Play={setVideoOn}
          />
        ))}
      </div>
    </div>
  );
}
