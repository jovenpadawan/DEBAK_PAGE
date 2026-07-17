import Header from './Header';
import SeoOptimization from './SeoOptimization';
import './estilos/styles.css';

export default function Contactanos() {
  const locations = [
    {
      name: "Debak Matriz",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2585.1179199999515!2d-78.46764789870376!3d-0.08935542609031169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58fa79196c00b%3A0x2d5237a2c1760299!2sEscuela%20Taekwondo%20DEBAK!5e0!3m2!1ses!2sec!4v1770148861738!5m2!1ses!2sec"
    },
    {
      name: "Debak Tumbaco",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7922464327808!2d-78.39765452235498!3d-0.20714019979081824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59100185bc5df%3A0xd7e6eb764e681791!2sDEBAK%20TUMBACO!5e0!3m2!1ses!2sec!4v1771094856964!5m2!1ses!2sec"
    },
    {
      name: "Debak Colegio de Liga",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8179346691277!2d-78.44805522235497!3d-0.025192499974556068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58844f86942db%3A0x7c0f1d74a9c15ccc!2sEl%20Colegio%20de%20Liga!5e0!3m2!1ses!2sec!4v1771095006927!5m2!1ses!2sec"
    },
    {
      name: "Debak Carcelén Bajo",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.2568228943!2d-78.4736108!3d-0.082286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f54ce2616f5%3A0x96a93a14683b4395!2sTAEKWONDO%20DEBAK%20SUCURSAL%20CARCELEN%20TKD!5e0!3m2!1ses-419!2sec!4v1772828952226!5m2!1ses-419!2sec"
    },
    {
      name: "Debak Colegio Pensionado Universitario",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8001695230832!2d-78.50078097195069!3d-0.17282611225723826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59aed38aa3153%3A0x2848a7fb544b9c15!2sColegio%20Pensionado%20Universitario!5e0!3m2!1ses!2sec!4v1771095169649!5m2!1ses!2sec"
    }
  ];

  return (
    <>
      <SeoOptimization title="Contacto" description="Ponte en contacto con DEBAK TKD, conoce nuestras redes sociales y sedes en Quito." />
      <Header />
      <main>
        <section className="contactanosTitles">
          <h1>Redes Sociales</h1>
          <span></span>
          <p>Ve nuestro contenido y escríbenos para más información.</p>
          <div className="contactanosSocial">
            <div className="whatsappSection">
              <img src="./imagenes/redes/whatsapp.png" alt="WhatsApp" />
              <p>WhatsApp</p>
              <div className="whatsappNumbers">
                <a href="https://wa.me/593964020344" target="_blank" rel="noopener noreferrer">
                  +593 96 402 0344
                </a>
                <a href="https://wa.me/593987654321" target="_blank" rel="noopener noreferrer">
                  +593 98 409 6361
                </a>
              </div>
            </div>
            <a href="https://www.instagram.com/tkd.debak?igsh=MTI2d3Z6dmxiMGRxdQ==" target="_blank" rel="noopener noreferrer">
              <img src="./imagenes/redes/instagram.png" alt="Instagram" />
              <p>Instagram</p>  
            </a>
            <a href="https://www.facebook.com/share/18FbU5tuVB/" target="_blank" rel="noopener noreferrer">
              <img src="./imagenes/redes/facebook.png" alt="Facebook" />
              <p>Facebook</p>
            </a>
            <a href="https://www.tiktok.com/@tkd.debak" width="80px" height="80px" target="_blank" rel="noopener noreferrer">
              <img src="./imagenes/redes/tiktok.png" alt="TikTok" />
              <p>TikTok</p>
            </a>
          </div>
        </section>
        <section className="contactanosTitles">
          <h1>Sedes Debak</h1>
          <span></span>
          <p>Nos ubicamos en la capital del Ecuador: Quito; distribuidos en Carcelén y Tumbaco.</p>
        </section>
        <div className="locationContainer">
        

        {locations.map((location, index) => (
          <section key={index} className="contactanosTitles">
            <h2>{location.name}</h2>
            <span></span>
            <iframe
              src={location.embedUrl}
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        ))}
        </div>
      </main>
    </>
  );
}
