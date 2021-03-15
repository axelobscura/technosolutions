import Layout from '../components/Layout'
import styles from '../styles/Comercializadora.module.css'

export default function Comercializadora(){
  return(
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.servicios}>
          <div>
            <h2>VIVE LA EXPERIENCIA TECHNOSOLUTIONS</h2>
            <hr/>
            <ul>
              <li>Personal capacitado en actualización constante para una mejor atención</li>
              <li>Infraestructura para dar apoyo y seguimiento a las necesidades más complejas</li>
              <li>Asesoría en planes y tarifas de acuerdo a las necesidades de cada empresa</li>
              <li>Comunicación efectiva sobre planes y promociones para mejorar el servicio a cliente</li>
            </ul>
          </div>
          <div>
            <h2>SERVICIOS QUE OFRECE TECHNOSOLUTIONS</h2>
            <hr/>
            <ul>
              <li>Pelanes telcel a tu medida</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}