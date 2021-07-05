import Head from 'next/head'
import Image from 'next/image'
import Layout from '../component/layout'
import { Grid } from '@material-ui/core'
import Witticism from '../component/witticism'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Layout>
        <Grid container >
          <section className={styles.topWord}>
            <Image src="/top-image.jpg" layout="fill" objectFit="contain" />
            <h2><Witticism></Witticism></h2>
          </section>

          <section className="about">
            <div className="self-introduction">

            </div>

            <div className="skill">

            </div>
          </section>

          <section className="work">

          </section>

          <section className="blog">

          </section>

          <section className="contact">
            <form action="">

            </form>
          </section>
        </Grid>

      </Layout>
    </>
  )
}
