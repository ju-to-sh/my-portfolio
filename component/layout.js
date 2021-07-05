import Head from 'next/head'
import Footer from '../component/footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        // 共通のメタデータなどはここに記載
      </Head>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout
