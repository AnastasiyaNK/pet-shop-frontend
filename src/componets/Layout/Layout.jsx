import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    );
}

export default Layout