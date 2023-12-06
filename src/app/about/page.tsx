import Image from 'next/image'
import './styles.css'

export default function Home() {
    return (
        <div id="centerstuff">  
            <Image id="logo2" alt="icon" src="/Vk-vN6Pv_400x400.svg" width={50} height={50} ></Image>
            <h1>OCE POWERHOUSE</h1>
            <p>Our organization, through relentless dedication and unparalleled skill,</p>
                <p>has indisputably positioned itself as the top entity in the Oceania region.</p>
        </div>
  )
}
