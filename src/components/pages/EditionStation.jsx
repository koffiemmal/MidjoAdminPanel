// Import necessary Firebase functions
import React, { useState, useEffect } from "react";
import style from "../styles/Form.module.css";
import logo from "../assets/logoP.png";
import { useParams, useNavigate } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";

const EditionStation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State hooks for form fields
  const [nom, setNom] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Fetch existing station data to populate form fields
    const fetchStation = async () => {
      try {
        const stationDoc = await getDoc(doc(db, "station", id));
        if (stationDoc.exists()) {
          const stationData = stationDoc.data();
          setNom(stationData.nom);
          setLatitude(stationData.latitude);
          setLongitude(stationData.longitude);
          setTime(stationData.time);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchStation();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reference to the specific document in Firestore
      const stationRef = doc(db, "station", id);

      // Update the document with the new values
      await updateDoc(stationRef, {
        nom,
        latitude,
        longitude,
        time,
      });

      // Navigate to another route after successful update
      navigate("/station");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className={style.mainAdd}>
      <div className={style.form_container}>
        <img src={logo} alt="Logo" />
        <h2>Update Station Information</h2>
        <form onSubmit={handleSubmit} className={style.location_form}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Enter station name"
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
                    placeholder="Enter latitude"
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
                    placeholder="Enter longitude"
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
                    placeholder="Enter possible travel time"
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

export default EditionStation;
