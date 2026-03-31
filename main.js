document.addEventListener('DOMContentLoaded', () => {

    // 1. SCROLL REVEAL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. MOBILE MENU TOGGLE
    const hamburger = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0d0d0d';
            navLinks.style.padding = '20px';
        });
    }

    // 3. CONTACT FORM VALIDATION
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name === "" || !email.includes("@")) {
                alert("Please fill in the form correctly.");
            } else {
                alert("Thank you for your message, " + name + "!");
                form.reset();
            }
        });
    }

    // 4. LOAD AND RENDER EPISODES
    loadEpisodes();
});

async function loadEpisodes() {
    try {
        const response = await fetch('data/episodes.json');
        const data = await response.json();
        renderEpisodes(data.episodes);
    } catch (error) {
        console.error('Error loading episodes:', error);
        const defaultEpisodes = getDefaultEpisodes();
        renderEpisodes(defaultEpisodes);
    }
}


function renderEpisodes(episodes) {
    const episodeGrid = document.getElementById('episodeGrid');
    if (!episodeGrid) return;

    episodeGrid.innerHTML = '';

    episodes.forEach((episode) => {
        const episodeCard = document.createElement('article');
        episodeCard.className = 'episode-card reveal';
        episodeCard.innerHTML = `
            <img src="${episode.image}" class="card-img" alt="${episode.title}">
            <div class="card-content">
                <span class="badge">${episode.category}</span>
                <h3>${episode.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 10px 0;">${episode.description}</p>
                <audio controls style="width: 100%; margin: 10px 0;">
                    <source src="${episode.audioUrl}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div class="card-meta" style="margin: 10px 0; font-size: 0.85rem;">
                    <span>${episode.episode}</span>
                    <span>${episode.duration}</span>
                    <span>${episode.date}</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">Guests: ${episode.guests.join(', ')}</p>
            </div>
        `;
        episodeGrid.appendChild(episodeCard);

        // Observe new element for animation
        const observerForEpisode = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        observerForEpisode.observe(episodeCard);
    });
}

function getDefaultEpisodes() {
    return [
        {
            id: 1,
            title: "The Lagos Hustle: More Than Noise",
            category: "Society",
            image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600",
            description: "Exploring the economic grit of Nigeria's beating heart.",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            duration: "45 mins",
            episode: "EP. 24",
            date: "March 20, 2026",
            guests: ["Ade Olumide", "Funmi Johnson"]
        }
    ];
}
