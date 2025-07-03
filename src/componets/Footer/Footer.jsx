import React from 'react'
import css from './Footer.module.css'
import instagramImg from '../../assets/images/ic-instagram.svg'
import whatsappImg from "../../assets/images/ic-whatsapp.svg";


const Footer = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409746186028!2d13.4173153158071!3d52.50793237981068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sde!4v${Math.floor(
    Date.now() / 1000
  )}!5m2!1sen!2sde`;
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <h2 className={css.secondTitle}>Contact</h2>
        <div className={css.parent}>
          <div className={css.div1}>
            <h4 className={css.infoTitle}>Phone</h4>
            <p className={css.info}>+49 30 915-88492</p>
          </div>
          <div className={css.div2}>
            <h4 className={css.infoTitle}>Socials</h4>
            <div className={css.iconWrapp}>
              <a href="#">
                <img src={instagramImg} alt="instagram" />
              </a>
              <a href="#">
                <img src={whatsappImg} alt="whatsapp" />
              </a>
            </div>
          </div>
          <div className={css.div3}>
            <h4 className={css.infoTitle}>Address</h4>
            <p className={css.info}>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </p>
          </div>
          <div className={css.div4}>
            <h4 className={css.infoTitle}>Working Hours</h4>
            <p className={css.info}>24 hours a day</p>
          </div>
        </div>
        <div className={css.mapContainer}>
          <iframe
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location - Wallstraße 9-13, Berlin"
            aria-label="Google Maps with our location marked"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer