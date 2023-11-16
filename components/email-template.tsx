/* eslint-disable @next/next/no-img-element */
interface EmailTemplateProps {
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email }) => (
  <section
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'revert-layer'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        padding: '20px',
        paddingLeft: '70px',
        paddingRight: '70px',
        paddingTop: '50px',
        paddingBottom: '80px'
      }}
    >
      <a href="#">
        <img
          alt="tavoweb-logo"
          height="auto"
          src="https://lh3.google.com/u/0/d/1-ZwloiCdcQZNy0QsShqlvt1BI1C0Iz7m=w1920-h931-iv1"
          style={{
            marginBottom: '50px',
            display: 'block'
          }}
          width={200}
        />
      </a>

      <img
        alt=""
        height="auto"
        src="https://lh3.google.com/u/0/d/17eiC_fqporNoFw3JBgUa6o0-hOyDSyDS=w1920-h1080-iv1"
        style={{
          marginTop: '30px',
          marginBottom: '30px'
        }}
        width={400}
      />

      <span
        style={{
          fontSize: '70px',
          fontWeight: 800,
          color: '#000000',
          display: 'block'
        }}
      >
        La mejor eleccion
      </span>
      <span
        style={{
          fontSize: '70px',
          fontWeight: 800,
          color: '#b245c5',
          display: 'block'
        }}
      >
        para administrar
      </span>
      <span
        style={{
          fontSize: '70px',
          fontWeight: 800,
          color: '#000000',
          display: 'block'
        }}
      >
        tu super proyecto.
      </span>
      <p style={{ color: '#00000090', fontSize: '18px', marginTop: 10, fontWeight: 600, width: '80%' }}>
        Saludos <span style={{ fontWeight: 700, color: '#3D30A2' }}>{email.split('@')[0]}</span> intentare contactarme
        contigo lo mas pronto posible. 😉✨🚀
      </p>

      <div
        style={{
          marginTop: 50
        }}
      >
        <a
          href="https://tavoweb.com"
          style={{
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 30,
            paddingLeft: 30,
            background: '#B15EFF',
            fontWeight: 600,
            borderRadius: 35,
            color: '#ffffff',
            textDecoration: 'none'
          }}
          target="_blank"
        >
          Visitar sitio web 🚀
        </a>
      </div>

      {/* </h1> */}
    </div>
  </section>
)
