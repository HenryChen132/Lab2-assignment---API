import './controlled.css'
export default function Education() {
return (
<div className="home">
      <div className="overlay-box">
        <h1>Education</h1>
        <hr />
        <h2 style={{ color: 'white', backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>
          Game - Programming Advanced Diploma
        </h2>
          <p>Centennial College, Scarborough, ON ---------- 2024 - 2027</p>
          <p><b>GPA: 4.07</b></p>

        <hr />
       <h2 style={{ color: 'white', backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>
        Animation Bachelor
      </h2>
       <p>Shandong University of Art & Design, Jinan, China - 2018 - 2023</p>
       <p><b>GPA: 4.00</b></p>
       <hr />
      </div>
      <footer style={{ textAlign: 'center', color: 'lightblue' }}>
        Copyright © 2025 Haoxuan Chen
      </footer>
    </div>
);
}