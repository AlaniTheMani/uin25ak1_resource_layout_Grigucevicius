// Funksjon for å vise ressurser basert på valgt kategori
function showResource(category) {
    const main = document.querySelector('#container'); // Velger hovedområdet der ressurser skal vises
    main.innerHTML = ''; // Tømmer innholdet for å vise nye ressurser

    // Finner ressursen som samsvarer med den valgte kategorien
    const resource = resources.find(r => r.category.toLowerCase() === category.toLowerCase());
    if (resource) {
        const article = document.createElement('article'); // Oppretter en artikkel for ressursdetaljer

        // Oppretter HTML-strukturen for ressursdetaljene og legger til informasjon
        article.innerHTML = `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>${resource.sources.map(({ title, url }) => `<li><a href="${url}" target="_blank">${title}</a></li>`).join('')}</ul>
        `;

        main.appendChild(article); // Legger til ressursboksen i hovedområdet
    }
}

// Sørger for at siden er ferdig lastet før funksjonalitet aktiveres
document.addEventListener('DOMContentLoaded', () => {
    showResource('HTML'); // Viser HTML-kategorien som standard ved sidens første innlasting

    // Legger til klikkhåndtering for navigasjonslenker
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Hindrer standard oppførsel som åpner linken i nettleseren

            // Viser ressurser basert på teksten i lenken som ble klikket
            showResource(event.target.textContent);
        });
    });
});
