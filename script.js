document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Top Banner
    const bannerText = document.getElementById('banner-text');
    bannerText.style.animationDuration = `${bannerText.offsetWidth / 100}s`;

    // Carrusel de imágenes
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    });

    // Cambiar slide automáticamente cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }, 5000);

    // Funcionalidad de YouTube
    const API_KEY = 'AIzaSyBcNo4pMTbFhTs8RKujYFfNSo_HbIP9f7E';
    const PLAYLIST_ID = 'PLSwBXxeopk-wzps96LvzkMKyy-YSxD2r5';

    async function fetchPlaylistItems() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=55&key=${API_KEY}`);
        const data = await response.json();
        return data.items;
    }

    function displayLiveVideo(video) {
        const liveContainer = document.getElementById('live-video-container');
        liveContainer.innerHTML = `
            <iframe 
                class="w-full h-full"
                src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?autoplay=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
            </iframe>
        `;
    }

    function displayPlaylist(videos) {
        const playlistContainer = document.getElementById('playlist-container');
        playlistContainer.innerHTML = '';

        videos.slice(1, 5).forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('flex-shrink-0', 'w-72', 'h-40');
            videoItem.innerHTML = `
                <iframe 
                    class="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}" 
                    frameborder="0" 
                    allow="encrypted-media" 
                    allowfullscreen>
                </iframe>
            `;
            playlistContainer.appendChild(videoItem);
        });
    }

    async function loadVideos() {
        const videos = await fetchPlaylistItems();
        if (videos.length > 0) {
            const latestVideos = videos.reverse().slice(0, 5);
            displayLiveVideo(latestVideos[0]);
            displayPlaylist(latestVideos);
        } else {
            console.warn('No se encontraron videos en la playlist.');
        }
    }

    loadVideos();

    // Funcionalidad de WhatsApp
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappModal = document.getElementById('whatsappModal');
    const closeModal = document.getElementById('closeModal');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const whatsappMessage = document.getElementById('whatsappMessage');

    whatsappBtn.addEventListener('click', () => {
        whatsappModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        whatsappModal.classList.add('hidden');
    });

    sendMessageBtn.addEventListener('click', () => {
        const message = whatsappMessage.value.trim();
        if (message) {
            const phoneNumber = '+593999472777';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            whatsappModal.classList.add('hidden');
            whatsappMessage.value = '';
        } else {
            alert('Por favor, escribe un mensaje antes de enviar.');
        }
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === whatsappModal) {
            whatsappModal.classList.add('hidden');
        }
    });

    // Funcionalidad de instalación de PWA
    let deferredPrompt;
    const installButton = document.getElementById('install-button');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.classList.remove('hidden');
    });

    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        }
        installButton.classList.add('hidden');
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
        const phoneNumber = '+593999472777';
        const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(url, '_blank');
        contactForm.reset();
    });

    // Boletín informativo
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = newsletterForm.querySelector('input[type="text"]').value;
        const whatsapp = newsletterForm.querySelector('input[type="tel"]').value;
        const message = `Nuevo suscriptor al boletín:%0ANombre: ${name}%0AWhatsApp: ${whatsapp}`;
        const phoneNumber = '+593999472777';
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
        newsletterForm.reset();
    });
});