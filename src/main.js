// CSS importeren (Vite zorgt dat het werkt)
import './style.css';

// Voeg de HTML van je cards toe via JS
document.querySelector('#app').innerHTML = `
  <div class="cards--container"> 
    <div class="card--light"> 
      <img class="card__visual" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Bibliotheek">
      <div class="card__text">
        <h3 class="card__heading">BIBLIOTHEEK ANTWERPEN</h3>
        <p class="card__paragraph">
          Ontdek de Bib van Antwerpen! 📚✨
          Duik in duizenden boeken, blader door tijdschriften, of vind de perfecte plek om te studeren.
        </p>
        <button class="card__button">Lees meer</button>
      </div>
    </div>

    <div class="card--dark">
      <img class="card__visual" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Bibliotheek">
      <div class="card__text">
        <h3 class="card__heading">BIBLIOTHEEK ANTWERPEN</h3>
        <p class="card__paragraph">
          Ontdek de Bib van Antwerpen! 📚✨
          Duik in duizenden boeken, blader door tijdschriften, of vind de perfecte plek om te studeren.
        </p>
        <button class="card__button">Lees meer</button>
      </div>
    </div>
  </div>
`;

console.log("Vite clean project ready");

