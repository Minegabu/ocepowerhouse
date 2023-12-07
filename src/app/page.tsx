import Image from 'next/image'
import './styles.css'

export default function Home() {
    return (
        <div id="centerstuff">  
            <Image id="logo2" alt="icon" src="/Vk-vN6Pv_400x400.svg" width={50} height={50} ></Image>
            <h1>OCE POWERHOUSE</h1>
            <p>Our organization, through relentless dedication and unparalleled skill,</p>
            <p>has indisputably positioned itself as the top entity in the Oceania region.</p>
            <div id="togther">
                <h1>OUR TEAMS:</h1>
                <div id="together">
                    <a href='/about'><Image id="Mumbai" alt="mumbai" src="/image.png" width={500} height={500}></Image></a>
                    <a href='/about'><Image id="Mumbai" alt="mumbai" src="/IMG_4682.png" width={500} height={500}></Image></a>
                </div>
            </div>
        </div>
  ) 
}
