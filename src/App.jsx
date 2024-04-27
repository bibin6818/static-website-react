import './App.css';

function App() {
  return (
    <>
      <nav style={{
        height: '95px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <p style={{ marginLeft: '80px' }}> HIDEVA GROUP</p>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li style={{ marginRight: '80px' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </a>
          </li>
          <li style={{ marginRight: '80px' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
              Services
            </a>
          </li>
          <li style={{ marginRight: '80px' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
              About
            </a>
          </li>
          <li style={{ marginRight: '80px' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>
              Blog
            </a>
          </li>
          <button style={{
            backgroundColor: '#EC9706',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Contact us
          </button>
        </ul>
      </nav>
      <div style={{ width: '100%', height: '812px', backgroundColor: '#FDF6E9' }}>
        <div style={{ position: 'absolute', left: '159px', top: '284px', width: '870px', height: '286px', backgroundColor: '#FDF6E9' }}>
          <p style={{ position: 'absolute', left: '0', top: '0', color: '#EC9706', fontSize: '24px' }}>We are Hideva Group</p>
          <p style={{ position: 'absolute', left: '0', top: '50px', fontWeight: 'bold', fontSize: '75px', color: 'black' }}>Design and Build Contractors</p>
          <p style={{ position: 'absolute', left: '0', top: '300px', fontSize: '24px', color: 'black' }}>With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship.With unwavering commitment and expertise, we create spaces that stand as a testament to our dedication and craftsmanship.</p>
          <button style={{
            position: 'absolute',
            left: '0',
            top: '440px',
            backgroundColor: '#EC9706',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Get a Quote
          </button>
          <div style={{ position: 'absolute', left: '0', top: '500px', width: '362px', height: '96px', backgroundColor: '#FDF6E9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid black' }}>
            <div style={{ width: '118px', height: '96px', backgroundColor: '#FDF6E9', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ fontSize: '25px', fontWeight: 'bold', color: '#EC9706' }}>20+</p>
              <p style={{ fontWeight: 'bold', fontSize: '13px', color: 'black' }}>Construction Services</p>
            </div>
            <div style={{ width: '118px', height: '96px', backgroundColor: '#FDF6E9', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ fontSize: '25px', fontWeight: 'bold', color: '#EC9706' }}>25+</p>
              <p style={{ fontWeight: 'bold', fontSize: '13px', color: 'black' }}>Engineers</p>
            </div>
            <div style={{ width: '118px', height: '96px', backgroundColor: '#FDF6E9', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ fontSize: '25px', fontWeight: 'bold', color: '#EC9706', }}>10+ </p>
              <p style={{ fontWeight: 'bold', fontSize: '13px', color: 'black' }}>Regular Suppliers</p>
            </div>
          </div>
          <div className="parent-div">
            <div className="image-div">
              <img className='img' src=".\src\assets\Rectangle 6.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '30%', margin: '40px' }}>
          <img src=".\src\assets\Rectangle 21.png" alt="" style={{ width: '429', height: '355px' }} />
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>24 October 2022</p>
          <p style={{ fontSize: '24px', color: '#EC9706' }}>What are the processes involved in putting up a building?</p>
          <p style={{ fontSize: '18px', fontWeight: 'semi-bold' }}>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
          <button style={{ backgroundColor: '#EC9706', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Read More</button>
        </div>


        <div style={{ width: '30%', margin: '40px' }}>
          <img src=".\src\assets\Rectangle 28.png" alt="" style={{ width: '429', height: '355px' }} />
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>3 November 2022</p>
          <p style={{ fontSize: '24px', color: '#EC9706' }}>What is Minimalist Architecture and Minimal Design Space?</p>
          <p style={{ fontSize: '18px', fontWeight: 'semi-bold' }}>Minimalism in architecture is a form that can be characterized using various aspects with the sole aim of reducing clutter and...</p>
          <button style={{ backgroundColor: '#EC9706', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Read More</button>
        </div>


        <div style={{ width: '30%', margin: '40px' }}>
          <img src=".\src\assets\Rectangle 29.png" alt="" style={{ width: '429px', height: '355px' }} />
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>5 January 2023</p>
          <p style={{ fontSize: '24px', color: '#EC9706' }}>Integrating Technology for Modern Construction</p>
          <p style={{ fontSize: '18px', fontWeight: 'semi-bold' }}>In the realm of modern construction, the integration of smart home innovations has emerged as a transformative force...</p>
          <button style={{ backgroundColor: '#EC9706', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Read More</button>
        </div>
      </div>
      <div style={{
        top: '1700px',
        left: '50%',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '24px', color: '#EC9706', fontWeight: "semi-bold" }}>Get In Touch</p>
        <p style={{ fontSize: '32px', color: '1D1D1D', fontWeight: "bold" }}>Reach out to us and let's turn your construction dreams into reality</p>
      </div>
      <div style={{
        position: 'absolute',
        borderRadius:'7px',
        top: '2030px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1065px',
        height: '520px',
        backgroundColor: '#F5F5F5',
      }}>
        <form style={{ display: 'flex', flexDirection: 'column', width: '60%', marginTop: '40px', marginLeft: '220px' }}>
          <label htmlFor="name" style={{ marginBottom: '10px', color: 'black' }}>Name</label>
          <input type="text" id="name" name="name" style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px' }} />
          <label htmlFor="email" style={{ marginBottom: '10px', color: 'black' }}>Email</label>
          <input type="email" id="email" name="email" style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px' }} />
          <label htmlFor="message" style={{ marginBottom: '10px', color: 'black' }}>Message</label>
          <textarea id="message" name="message" rows="4" style={{ marginBottom: '20px', padding: '70px', borderRadius: '5px' }}></textarea>
          <button type="submit" style={{
            backgroundColor: '#EC9706',
            width: '120px',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            Send
          </button>
        </form>

      </div>
      <footer>
  <ul>
    <li><a href="#">Services</a></li>
    <li><a href="#">New Builds</a></li>
    <li><a href="#">Renovations</a></li>
    ...........................
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Privacy policy</a></li>
    <li><a href="#">Terms of services</a></li>
  </ul>
  <p>Address: Green city Ambernath Mumbai</p>
  <p>Call us: <a href="tel:123-456-7890">123-456-7890</a></p>
  <p>Email us: <a href="mailto:info@hidevagroup.com">info@hidevagroup.com</a></p>
</footer>
   
    </>
  );
}

export default App;