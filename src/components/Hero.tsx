import '../styles.css'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { owl2, profil1 } from '../assets'
import { useContext } from 'react'
import { ThemeContext } from '../App'
const GateEffect = () => {
  const theme = useContext(ThemeContext)

  const borderColor = 'white'
  return (
    <div className="hero-container h-[100vh] relative top-20 grid grid-cols-1 sm:grid-cols-2 m-2  gap-10">
      <header className="header-left flex flex-col ml-[5rem] z-10  gap-1">
        <h1 className="font-bold text-3xl custom-h1">
          Web <br />
          Fullstack Developer{' '}
        </h1>
        <h3 className="custom-blue-color font-bold text-xl">
          Hi, I am Richard
        </h3>

        <p className="leading-5">
          {' '}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit
          itaque quo eveniet culpa explicabo rem numquam architecto vitae quam,
          temporibus dignissimos recusandae qui hic esse quae natus? Voluptates,
          doloribus!
        </p>
        <button className=" mt-3 custom-blue-bg w-[150px] rounded-xl p-2 text-white">
          Download CV
        </button>
      </header>
      <div className="header-right flex flex-col items-center relative h-full w-full">
        <div className="circle" style={{ borderColor: borderColor }}>
          <a className="icon absolute right-[9rem] top-[-1rem] bg-green-500">
            <FaFacebook />
          </a>
          <a className="icon absolute top-[19rem] right-[8.5rem] bg-green-500">
            <FaInstagram />
          </a>
          <a className="icon absolute right-[19rem] top-[8.5rem] bg-green-500">
            <FaLinkedin />
          </a>
          <a className="icon absolute right-[-1rem] top-[8.5rem] bg-green-500">
            <FaTwitter />
          </a>
        </div>
        <img
          className="image rounded-full top-[2rem] absolute h-[15rem] w-[15rem] overflow-hidden "
          style={{ backgroundColor: borderColor }}
          src={profil1}
        />
      </div>

      <img
        src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png"
        alt=""
        className="absolute left-[-8rem] top-[-8rem] z-0 opacity-10 bg-transparent"
      />
    </div>
  )
}

export default GateEffect
