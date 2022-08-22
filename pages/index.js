import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import CardContainer from '/components/CardContainer.jsx'
import { useState, useEffect } from 'react'


export default function Home() {

  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const [showShops, setShowShops] = useState(false)

  const handleTrackLocation = () => {
    setIsFindingLocation(true);

    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
      setIsFindingLocation(false);
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
      setShowShops(!showShops)
    }
    return handleTrackLocation
  };

  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
    console.log(locationErrorMsg)
  };

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
   
    setLocationErrorMsg("");
    setIsFindingLocation(false);
    console.log(latLong)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Caffeine, Code & Chill</title>
        <meta name="#" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Caffeine, Code & <a href="#">Chill.</a>
        </h1>
        <p onClick={handleTrackLocation} className={styles.findButton}>
          Find Coffee Shops With Air Con Near Me
        </p>
        <p>{latLong}</p>
        {/* conditionally render the cardcowntainer on the state showShops */}
            </main>
    </div>
  );
}
