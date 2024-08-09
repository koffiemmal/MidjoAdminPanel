import React from 'react'
import style from './../styles/Header.module.css'
import logo from '../assets/logoP.png'
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,

} from "@chakra-ui/react";
import Table from "react-bootstrap/Table";
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.Sidebar}>
        <section className={style.side}>
          {" "}
          <NavLink to="/acceuil">
            <h4>Utilisateur</h4>
          </NavLink>
          <NavLink to="/acceuil/station">
            <h4>Points de stationnemnt</h4>
          </NavLink>
          <NavLink to="/acceuil/addStation">
            <h4>ajout de stationnemnt</h4>
          </NavLink>
        </section>
        <section>
          <h4></h4>
        </section>
      </div>
      <div className={style.heaerplace}>
        <div className={style.LogoAndProfil}>
          <img src={logo} alt="" />
          <Wrap>
            <WrapItem>
              <Avatar
                bg="#7152F3"
                name="Gelinas Ephoevi-ga"
                src="https://bit.ly/tioluwani-kolawole"
                borderRadius="50%" // Makes the avatar circular
                p="15px"
                color="white"
              />
            </WrapItem>
          </Wrap>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header
