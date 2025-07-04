import React from 'react'
import css from './Footer.module.css'
import instagramImg from '../../assets/images/ic-instagram.svg'
import whatsappImg from "../../assets/images/ic-whatsapp.svg";


const Footer = () => {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2269577847637!2d13.400717576164812!3d52.5112316368793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1suk!2sde!4v1751617090706!5m2!1suk!2sde"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location - Wallstraße 9-13, Berlin"
          aria-label="Google Maps with our location marked"
          importance="low"
         ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer