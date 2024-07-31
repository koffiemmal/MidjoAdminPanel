import React, { useEffect, useState } from "react";
import style from "../styles/UserList.module.css";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const StationList = () => {
  const [station, setStation] = useState([]);
  /* const navigate = useNavigate(); */

/*   const redirectEdit = (id) => {
    navigate(`/edit/${id}`);
  }; */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "station"));
        const stationData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStation(stationData);
        console.log(stationData);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };
    fetchData();
  }, []);

  const deleteItems = async (id) => {
    try {
      await deleteDoc(doc(db, "station", id));
      alert("Station has been deleted");
      setStation(station.filter((item) => item.id !== id)); // Remove deleted item from state
    } catch (e) {
      alert("The station could not be deleted");
    }
  };

  return (
    <div className={style.mainUser}>
      <div>
        <section className={style.place}>
          <h4>Point de stationnement</h4>
        </section>
      </div>

      <div className={style.container}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Position Time</th>
            </tr>
          </thead>
          <tbody>
            {station.map((stations) => (
              <tr key={stations.id}>
                <td>{stations.id}</td>
                <td>{stations.nom}</td>
                <td>{stations.latitude}</td>
                <td>{stations.longitude}</td>
                <td>{stations.time}</td>
                <td className={style.td_station}>
                  <button
                    onClick={() => deleteItems(stations.id)}
                    className={style.btn_station_del}
                  >
                    <CloseIcon />
                  </button>
                  <button className={style.btn_station_edit}>
                    <NavLink to={`/acceuil/edit/${stations.id}`}>
                      <EditIcon color="white" />
                    </NavLink>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StationList;
