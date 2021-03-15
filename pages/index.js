
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { IconContext } from "react-icons";
import { FaCreativeCommonsBy } from 'react-icons/fa'
import { FaCreativeCommonsPd } from 'react-icons/fa'
import { FaCreativeCommonsRemix } from 'react-icons/fa'
import { FaCreativeCommonsSampling } from 'react-icons/fa'
import { FaCreativeCommonsShare } from 'react-icons/fa'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/comercializadora">
            <img src="logo.png" alt="TECHNO SOLUTIONS" title="techno solutions" style={{width: '200px'}} />
          </Link>
          <p className={styles.presentacion}><b>Technosolutions</b> es una empresa consolidada como <b>distribuidor autorizado de telcel</b>,<br/>que pone a su disposición desde un <b>centro de atención a clientes</b>, hasta llevar el servicio a las puertas de cada empresa.</p>
          <div className={styles.menuentrada}>
            
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <Link href="/comercializadora">
                  <a><FaCreativeCommonsBy /></a>
                </Link>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <Link href="/comercializadora">
                  <a><FaCreativeCommonsPd /></a>
                </Link>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <Link href="/comercializadora">
                  <a><FaCreativeCommonsRemix /></a>
                </Link>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <Link href="/comercializadora">
                  <a><FaCreativeCommonsSampling /></a>
                </Link>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <Link href="/comercializadora">
                  <a><FaCreativeCommonsShare /></a>
                </Link>
              </IconContext.Provider>
          </div>
        </main>
      </div>
    </Layout>
  )
}
