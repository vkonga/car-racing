'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCars, Car } from '@/lbi/api';
import { getTracks, Track } from '@/lbi/tracks';
import Header from '../Header/header';
import { useInView } from 'react-intersection-observer';
import './homepage.css';

export default function HomePage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [carsLoading, setCarsLoading] = useState(true);
  const [tracksLoading, setTracksLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { ref: carsRef, inView: carsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: tracksRef, inView: tracksInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error: any) {
        setError(error.message || 'Failed to fetch cars');
      } finally {
        setCarsLoading(false);
      }
    };

    const fetchTracks = async () => {
      try {
        const data = await getTracks();
        console.log('Fetched Tracks:', data);
        setTracks(data);
      } catch (error: any) {
        setError(error.message || 'Failed to fetch tracks');
      } finally {
        setTracksLoading(false);
      }
    };

    fetchCars();
    fetchTracks();
  }, []);

  if (carsLoading || tracksLoading) {

    return (
        <div className='loading-container'>
            <p>Loading--</p>
            <Image
                width={100}
                height={10}
                src="/loading.jpg"
                alt="Loading"
                style={{ objectFit: "cover"}}
                className='loading'
            />
        </div>
    )
  };
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div
        className="image-container"
        style={{ backgroundImage: "url('/grandtourism.jpg')" }}
      >
        <Header />
        <h1 className="heading">
          Grand <strong className="strong">Tourism</strong>
        </h1>
        <p className="sub-title">The Others Just Travel</p>
      </div>

      <div className="types-description">
        <p>
          One icon, three expressions.
          <br />
          Choose the one that moves you most.
        </p>
      </div>

      <div className="container">
        <div className="block">
          <div className="blockin">
            <Image
              src="/grandlabnio.webp"
              alt="grandlabnio"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>

        <p className="car-description">
          Unveiling
          <br />
          THE ICE
        </p>

        <div className="block1">
          <div className="blockin">
            <Image
              src="/gt2.jpg"
              alt="grandlabnio"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <h1 className="vehicles" ref={carsRef}>
        VEHICLES IN RACE
      </h1>

      {carsInView && (
        <div className="scrolls">
          <div className="container1">
            {cars.map((car) => (
              <div className="block2" key={car.id}>
                <Image src={car.image_url} alt="car" width={300} height={300} />
                <div className="description-container">
                  <p>
                    <strong>Max Power:</strong> {car.max_power}
                  </p>
                  <p>
                    <strong>Max Speed:</strong> {car.max_speed}
                  </p>
                  <p>
                    <strong>Acceleration:</strong> {car.acceleration}
                  </p>
                  <p>
                    <strong>Max Torque:</strong> {car.max_torque}
                  </p>
                  <p>
                    <strong>Vehicle Name:</strong> {car.car_name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-container">
            <div className="scroll-icon">🚗</div>
          </div>
        </div>
      )}

      <h2 className="vehicles" ref={tracksRef}>
        CHOOSE RACE MAP
      </h2>

      {tracksInView && (
        <div className="container2">
          {tracks.map((track) => (
            <div className="block3" key={track.id}>
              <Image
                src={track.track_url}
                alt="track"
                width={300}
                height={300}
              />
              <div className="description-container">
                <p>
                  <strong>Track Name:</strong> {track.track_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
