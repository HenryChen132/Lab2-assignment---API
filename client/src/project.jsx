import './controlled.css'
export default function Project() {
return (
<div className="home">
      <div className="overlay-box">
          <h1>My Projects</h1>
          <hr />

          <h3 style={{ color: 'white', backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>
             Personal Zombie Shooting Game
             </h3>
            <ul>
              <li>Independently developed a first-person 3D shooting game with core mechanics and a complete UI system, including weapon pickup (melee/flamethrower), combat actions, and health recovery at supply points.</li>
              <li>Implemented interactive enemy systems for both regular zombies and boss monsters, featuring full animation states (idle, walk, run, attack, skill release, death). Developed AI behaviors such as proximity-based attacks and dynamic health bars that respond to player damage.</li>
              <li>Built the project with Unity, leveraging C# to create interactive features and core gameplay logic.</li>
            </ul>
            <div className="image-row">
               <img src="/Project1.1.png" alt="Zombie Game Screenshot 1" />
               <img src="/Project1.2.png" alt="Zombie Game Screenshot 2" />
               <img src="/Project1.3.png" alt="Zombie Game Screenshot 3" />
            </div>
          <hr />
          <h3 style={{ color: 'white', backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>
             Web Game - Bug Catcher
             </h3>
            <ul>
              <li>Developed a web game using HTML, CSS, JavaScript, which allows players to ‘catch’ bugs in an interactive environment, gaining points through various obstacles.</li>
              <li>Implemented dynamic difficulty scaling where bug spawn frequency increases over time, with multiple bugs appearing simultaneously to enhance gameplay challenge.</li>
              <li>Designed the game’s art style and color palette with a strong focus on visual aesthetics.</li>
            </ul>
                <div className="image-row">
                  <img src="/Project2.1.png" alt="Bug Catcher Game Screenshot 1" />
                  <img src="/Project2.2.png" alt="Bug Catcher Game Screenshot 2" />
                  <img src="/Project2.3.png" alt="Bug Catcher Game Screenshot 3" />
                </div>
            <hr />
            <h3 style={{ color: 'white', backgroundColor: 'black', border: '1px solid black', borderRadius: '10px' }}>
               Personal Art Portfolio
               </h3>
            <ul>
              <li>Created a series of digital paintings exploring themes of nature and technology.</li>
              <li>Developed a unique character design for a personal project, focusing on silhouette and color theory.</li>
              <li>Participated in online art challenges, consistently producing high-quality work under tight deadlines.</li>
            </ul>
                <div className="gallery">
                  <img src="/Project3.1.png" alt="Art Portfolio Screenshot 2" />
                  <img src="/Project3.2.png" alt="Art Portfolio Screenshot 3" />
                  <img src="/Project3.3.png" alt="Art Portfolio Screenshot 4" />
                  <img src="/Project3.4.png" alt="Art Portfolio Screenshot 5" />
                </div>
            <hr />
      </div>
      <footer style={{ textAlign: 'center', color: 'lightblue' }}>
        Copyright © 2025 Haoxuan Chen
      </footer>
 </div>
);
}