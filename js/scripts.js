document.addEventListener('DOMContentLoaded', () => {
    const videosSlider = document.getElementById('videosSlider');
    const shortsSlider = document.getElementById('shortsSlider');
    const sponsorsSlider = document.getElementById('sponsorsSlider');

    // Example data for videos, shorts, and sponsors
    const videos = [
        { title: 'Video 1', thumbnail: 'thumbnail1.jpg' },
        { title: 'Video 2', thumbnail: 'thumbnail2.jpg' },
        // Add more videos as needed
    ];

    const shorts = [
        { title: 'Short 1', thumbnail: 'short-thumbnail1.jpg' },
        { title: 'Short 2', thumbnail: 'short-thumbnail2.jpg' },
        // Add more shorts as needed
    ];

    const sponsors = [
        { name: 'Sponsor 1', logo: 'sponsor1.jpg' },
        { name: 'Sponsor 2', logo: 'sponsor2.jpg' },
        // Add more sponsors as needed
    ];

    // Function to create video cards
    function createVideoCards() {
        videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `<img src="${video.thumbnail}" alt="${video.title}" /><h3>${video.title}</h3>`;
            videosSlider.appendChild(card);
        });
    }

    // Function to create short cards
    function createShortCards() {
        shorts.forEach(short => {
            const card = document.createElement('div');
            card.className = 'short-card';
            card.innerHTML = `<img src="${short.thumbnail}" alt="${short.title}" /><h3>${short.title}</h3>`;
            shortsSlider.appendChild(card);
        });
    }

    // Function to create sponsor cards
    function createSponsorCards() {
        sponsors.forEach(sponsor => {
            const card = document.createElement('div');
            card.className = 'sponsor-card';
            card.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}" /><h3>${sponsor.name}</h3>`;
            sponsorsSlider.appendChild(card);
        });
    }

    // Initialize sliders and populate cards
    createVideoCards();
    createShortCards();
    createSponsorCards();
});
