import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rerum nam ipsa omnis consequuntur modi dicta consectetur molestiae maiores repudiandae!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus? Velit, placeat. Tempore voluptatibus itaque nesciunt, sunt ducimus libero natus? Ut culpa sapiente officiis reprehenderit molestiae doloribus porro assumenda vitae neque alias placeat quae vel, facilis voluptates veritatis illo totam.</p>
        <button>See Our works</button>
      </div>
      <div>
        <Image src={hero} alt="phone" />
      </div>
    </div>
  )
}
