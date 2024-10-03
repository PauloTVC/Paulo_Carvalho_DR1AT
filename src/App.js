import "./styles.css";
import React, { useState, useEffect } from "react";

//Páginas
import MainPage from "./MainPage";
import ContactPage from "./ContactPage";
import Sea from "./Sea";
import Drone from "./Drone";
import Wheel from "./Wheel";
import TreadTank from "./TreadTank";
import Legged from "./Legged";
import Special from "./Special";

//Menu Hamburguer
import { GiHamburgerMenu } from "react-icons/gi";

//Itens para navegador
import Item from "./Item";
//Para representar todos os robôs
import { RiRobot2Fill } from "react-icons/ri";
//Para representar robôs terrestres
import { GiFlatPlatform } from "react-icons/gi";
//Representar robôs com rodas
import { GiCartwheel } from "react-icons/gi";
//Representar robôs de esteiras
import { GiTankTread } from "react-icons/gi";
//Representar robôs com pernas
import { GiRobotLeg } from "react-icons/gi";
//Representar híbridos
import { FaStarOfLife } from "react-icons/fa";
//Representar robôs marítimos
import { GiMiniSubmarine } from "react-icons/gi";
//Representar robôs aéreos
import { TbDrone } from "react-icons/tb";
//Contato
import { FaCommentDots } from "react-icons/fa";

export default function App() {
  //Para alternar página
  const [page, SetPage] = useState(0);
  //Para dropdownn de ground
  const [menuGround, setMenuGround] = useState(false);

  const terrestres = [
    { Titulo: "Wheels", Incone: <GiCartwheel />, onClick: () => SetPage(5) },
    {
      Titulo: "Tank Tread",
      Incone: <GiTankTread />,
      onClick: () => SetPage(6),
    },
    {
      Titulo: "Legged Robots",
      Incone: <GiRobotLeg />,
      onClick: () => SetPage(7),
    },
    {
      Titulo: "Especial/Hybrids",
      Incone: <FaStarOfLife />,
      onClick: () => SetPage(8),
    },
  ];

  //Verificar se é mobile e tamnho da tela
  const [mobile, setMobile] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(false);
  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth >= 768);
      setDropDown(window.innerWidth >= 520);
    };
    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  });

  return (
    <div className="container">
      <header>
        <section className="Logo_Nome">
          <img
            className="Logo"
            src="https://i.imgur.com/8Mtf6xz.png"
            alt="Logo"
          />
          <div>
            <h1>DynaBots</h1>
            <h5>Dynamics Robots</h5>
          </div>
        </section>
        <nav className="nav_p">
          <GiHamburgerMenu
            className={dropDown ? "Hidden" : "Hamburger"}
            onClick={() => setActiveDropDown(!activeDropDown)}
          />
          <div
            className={
              dropDown ? "itens" : activeDropDown ? "Hidden" : "itens_down"
            }
          >
            <Item
              onClick={() => SetPage(0)}
              Titulo={"All Robots"}
              Incone={<RiRobot2Fill />}
            />
            <Item
              onClick={!mobile ? () => setMenuGround(!menuGround) : null}
              onMouseEnter={mobile ? () => setMenuGround(true) : null}
              onMouseLeave={mobile ? () => setMenuGround(false) : null}
              Titulo={"Ground"}
              Incone={<GiFlatPlatform />}
              SubItem={terrestres}
              Hidden={!menuGround}
            />
            <Item
              onClick={() => SetPage(3)}
              Titulo={"Drone"}
              Incone={<TbDrone />}
            />
            <Item
              onClick={() => SetPage(4)}
              Titulo={"Sea"}
              Incone={<GiMiniSubmarine />}
            />
          </div>
        </nav>
      </header>

      <main>
        <nav className="nav_l">
          <div className="itens">
            <Item
              onClick={() => SetPage(0)}
              Titulo={"All Robots"}
              Incone={<RiRobot2Fill />}
            />
            <Item
              onClick={!mobile ? () => setMenuGround(!menuGround) : null}
              onMouseEnter={mobile ? () => setMenuGround(true) : null}
              onMouseLeave={mobile ? () => setMenuGround(false) : null}
              Titulo={"Ground"}
              Incone={<GiFlatPlatform />}
              SubItem={terrestres}
              Hidden={!menuGround}
            />
            <Item
              onClick={() => SetPage(3)}
              Titulo={"Drone"}
              Incone={<TbDrone />}
            />
            <Item
              onClick={() => SetPage(4)}
              Titulo={"Sea"}
              Incone={<GiMiniSubmarine />}
            />
          </div>
        </nav>
        {page === 0 ? (
          <MainPage />
        ) : page === 1 ? (
          <ContactPage />
        ) : page === 3 ? (
          <Drone />
        ) : page === 4 ? (
          <Sea />
        ) : page === 5 ? (
          <Wheel />
        ) : page === 6 ? (
          <TreadTank />
        ) : page === 7 ? (
          <Legged />
        ) : page === 8 ? (
          <Special />
        ) : (
          ""
        )}
      </main>

      <footer>
        <p>Learn about Mobile Robots @2024</p>
        <p onClick={() => SetPage(1)}>
          Contatcs <FaCommentDots />
        </p>
      </footer>
    </div>
  );
}
