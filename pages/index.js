
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
          <img src="logo.png" alt="TECHNO SOLUTIONS" title="techno solutions" style={{width: '200px'}} />
          <p className={styles.presentacion}><b>Technsolutions</b> es una empresa consolidada como distribuidor autorizado de tercer, que pone a su disposición desde un centro de atención a clientes, hasta llevar el servicio a las puertas de cada empresa.</p>
          <div className={styles.menuentrada}>
            <Link href="/">
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <FaCreativeCommonsBy />
              </IconContext.Provider>
            </Link>
            <Link href="/">
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <FaCreativeCommonsPd />
              </IconContext.Provider>
            </Link>
            <Link href="/">
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <FaCreativeCommonsRemix />
              </IconContext.Provider>
            </Link>
            <Link href="/">
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <FaCreativeCommonsSampling />
              </IconContext.Provider>
            </Link>
            <Link href="/">
              <IconContext.Provider value={{ className: "iconos-entrada" }}>
                <FaCreativeCommonsShare />
              </IconContext.Provider>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  )
}
