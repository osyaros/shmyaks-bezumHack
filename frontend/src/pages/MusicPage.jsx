import React, { useState, useEffect } from 'react';
import './musicPage.scss';
const MusicPage = () => {
  const [items, setItems] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [rolledItem, setRolledItem] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('regToken') === null) {
      window.location.href = '/login'
    }
    if(localStorage.getItem('tokenSubs') === null) {
      window.location.href = '/needToSubs'
    }
  }, [])
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch("https://orgazm-music-app.ru/api/tracks/");
        const data = await response.json();
        const tracks = data.tracks.map(track => ({
          skin: `${track.artist} - ${track.title}`,
          img: `https://orgazm-music-app.ru/api/preview/${track.file_path.replace("downloaded_tracks/", "")}`,
          audio: track.url,
          file_path: track.file_path,
        }));
        setItems(tracks);
      } catch (error) {
        console.error("Ошибка при получении треков:", error);
      }
    };

    fetchTracks();
  }, []);

  const playTrack = async (item) => {
    try {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      const response = await fetch(`https://orgazm-music-app.ru/api/downloaded_tracks/${item.file_path.replace("downloaded_tracks/", "")}`);
      const blob = await response.blob();
      const audioURL = URL.createObjectURL(blob);
      const newAudio = new Audio(audioURL);
      setCurrentAudio(newAudio);
      newAudio.play();
    } catch (error) {
      console.error("Ошибка при загрузке аудиофайла:", error);
    }
  };

  const generate = async () => {
    if (isRolling || items.length === 0) return;
    setIsRolling(true);

    const rollerContainer = document.querySelector('.raffle-roller-container');
    rollerContainer.style.transition = "none";
    rollerContainer.style.marginLeft = "0px";
    rollerContainer.innerHTML = '';

    const winningIndex = Math.floor(Math.random() * 101);

    for (let i = 0; i < 101; i++) {
      const itemType = items[i % items.length];

      const element = document.createElement("div");
      element.className = "item class_red_item";
      element.id = "CardNumber" + i;
      element.style.backgroundImage = `url(${itemType.img})`;

      rollerContainer.appendChild(element);
    }

    setTimeout(() => {
      const selectedItem = items[Math.floor(Math.random() * items.length)];
      goRoll(selectedItem, winningIndex);
    }, 500);
  };

  const goRoll = (item, winIndex) => {
    const rollerContainer = document.querySelector('.raffle-roller-container');
    rollerContainer.style.transition = "all 4s cubic-bezier(.08,.6,0,1)";
    rollerContainer.style.marginLeft = `-${winIndex * 70}px`;

    setTimeout(() => {
      const winItem = document.getElementById(`CardNumber${winIndex}`);
      if (winItem) {
        winItem.style.backgroundImage = `url(${item.img})`;
        winItem.classList.add('winning-item');
      }

      setRolledItem(item.skin);

      const winElement = document.createElement("div");
      winElement.className = "item class_red_item";
      winElement.style.backgroundImage = `url(${item.img})`;

      document.querySelector('.inventory').appendChild(winElement);

      playTrack(item);
      setIsRolling(false);
    }, 4500);
  };

  return (
    <div>
      <div className="raffle-roller">
        <div className="raffle-roller-holder">
          <div className="raffle-roller-container" style={{ marginLeft: '0px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '25px' }}>
          You winning is <span style={{ color: 'green' }} id="rolled">{rolledItem || 'rolling'}</span>
        </span>
        <br />
        <button onClick={generate}>go</button>
        <button onClick={() => window.location.reload()}>reset</button>
      </div>
      <br />
      <div className="inventory" />
    </div>
  );
};

export default MusicPage;
