'use client'
import Image from 'next/image'
import './styles.css'
import { useEffect } from 'react';
import data from './mumbai.json'

export default function Home() {
    useEffect(() => {
        const activePage = document.getElementById("Mumbai");
        if (activePage) {
          activePage.style.textDecoration = 'underline';
        }
    }, []);
    return (
        <div id="centerstuffmumbai">  
            <div id="container">
                {data.users.map((player,i) => (
                    <div key={player.id} id={player.id} style={{ margin: '1.5vh', display: 'flex', borderRadius: '5px', border: '0.5vh solid white', animationName: 'player', animationDuration: `${((i+1) / 8) * 3000}ms` }}>
                    <div>    
                        <Image id="iconforrole" alt='tank' src={player.icon} width={19.5} height={50} />
                    </div>
                    <div id="name">
                            <h2>{player.name1}</h2>
                    </div>
                    <div>
                            <p>{player.description}</p>
                    </div>
                    <div>
                        <div id="icons">  
                            <a id="Twitter" href={player.twitter}><Image id="iconforrole1" alt="twitterIcon" src="../twitterblack.svg" width={50} height={50}></Image></a>
                            <a id="Twitch" href={player.twitch}><Image id="iconforrole1" alt="twitchIcon" src="../icons8-twitch.svg" width={50} height={50}></Image></a>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
    )
}