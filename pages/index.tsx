import type { NextPage } from 'next'
import Layout from 'src/components/layout'

interface WProps {
  cityName: string,
  stateCode: string,
  country: string,
  dateTime: string,
}

const Home: NextPage = () => {
  return <Layout
    main={<div className="Main">
      <div className="cardWeather">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
        </span>
        <img src="#" alt="Estado do tempo" />
      </div>
      <div className="cardWeather">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
        </span>
        <img src="#" alt="Estado do tempo" />
      </div>
      <div className="cardWeather">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
        </span>
        <img src="#" alt="Estado do tempo" />
      </div>
      <div className="cardWeather">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
        </span>
        <img src="#" alt="Estado do tempo" />
      </div>
      <div className="cardWeather">
        <p>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
        </span>
        <img src="#" alt="Estado do tempo" />
      </div>
      <div className="cardWeather">
        <p style={{font: '600 10pt/150% Roboto, sans-serif'}}>Cidade, Estado</p>
        <p>data, hora</p>
        <span className="weatherData">
          <img src="#" alt="temp" />
          <span>
            <p>Chuva: 2%</p>
            <p>Humidade: 68%</p>
            <p>Vento: 31km/h</p>
          </span>
        </span>
        <img src="#" alt="Estado do tempo" />
      </div>
    </div>}
  />
}

export default Home
