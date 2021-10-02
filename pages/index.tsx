import type { NextPage } from 'next'
import Layout from 'src/components/layout'

interface WProps {
  cityName: string,
  stateCode: string,
  country: string,
  dateTime: string,
  temp: string,
}

const Home: NextPage = () => {
  return <Layout
    main={<div className="flex flex-wrap flex-row justify-center items-center m-5" style={{ minHeight: 'calc(100vh - 4rem)' }}> {/*Main*/}
      <div className="bg-red-600 rounded w-96 p-1 m-2 h-36">{/*cardWeather*/}
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData grid-cols-3 gap-4 auto-cols-max"> {/*weatherData */}
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
          <img src="#" alt="Estado do tempo" />
        </span>
      </div>
      <div className="bg-red-600 rounded w-96 p-1 m-2 h-36">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData grid-cols-3 gap-4 auto-cols-max">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
          <img src="#" alt="Estado do tempo" />
        </span>
      </div>
      <div className="bg-red-600 rounded w-96 p-1 m-2 h-36">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData grid-cols-3 gap-4 auto-cols-max">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
          <img src="#" alt="Estado do tempo" />
        </span>
      </div>
      <div className="bg-red-600 rounded w-96 p-1 m-2 h-36">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData grid-cols-3 gap-4 auto-cols-max">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
          <img src="#" alt="Estado do tempo" />
        </span>
      </div>
      <div className="bg-red-600 rounded w-96 p-1 m-2 h-36">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData grid-cols-3 gap-4 auto-cols-max">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
          <img src="#" alt="Estado do tempo" />
        </span>
      </div>
      <div className="bg-red-600 rounded w-96 p-1 m-2 h-36">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData grid-cols-3 gap-4 auto-cols-max">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
          <img src="#" alt="Estado do tempo" />
        </span>
      </div>
    </div>}
  />
}

export default Home
