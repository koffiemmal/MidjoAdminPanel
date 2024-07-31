import React, { useState } from "react";
import style from "../styles/Form.module.css";
import logo from "../assets/logoP.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";

const AddStationList = () => {
  const [nom, setNom] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const station = { nom, latitude, longitude, time };
    try {
      await addDoc(collection(db, "station"), station);
      console.log("Envoi réussi");
      alert("Station ajoutée avec succès");
    } catch (error) {
      console.log(error);
      alert("Erreur lors de l'ajout de la station");
    }
  };

  return (
    <div className={style.mainAdd}>
      <div className={style.form_container}>
        <img src={logo} alt="Logo" />
        <h2>Location Information</h2>
        <form onSubmit={handleSubmit} className={style.location_form}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Entrer le nom de la station"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Entrer la latitude"
                    required
                    step="any"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Entrer la longitude"
                    required
                    step="any"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Entrer le temps de parcours possible"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddStationList;
