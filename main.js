class Header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const header = document.createElement('header');
        header.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
                nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(12, 15, 25, 0.6);
                    padding: 1.5rem;
                    backdrop-filter: blur(25px) saturate(180%);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    gap: 4rem;
                }
                nav a {
                    color: rgba(255, 255, 255, 0.6);
                    text-decoration: none;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                nav a .nav-text {
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                nav a i {
                    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                nav a::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(to right, #70a1ff, #fca311);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    transform: translateX(-50%);
                }
                nav a:hover {
                    color: #fff;
                }
                nav a:hover .nav-text {
                     letter-spacing: 0.25em;
                }
                 nav a:hover i {
                    transform: scale(1.2);
                }
                nav a:hover::before {
                    width: 100%;
                }
                @media (max-width: 768px) {
                    nav {
                        gap: 2rem;
                    }
                     nav a {
                        font-size: 0.8rem;
                        flex-direction: column;
                        gap: 0.2rem;
                    }
                    .nav-text {
                        display: none;
                    }
                }
                 @media (max-width: 480px) {
                    nav {
                        gap: 1.5rem;
                        padding: 1rem;
                    }
                    nav a {
                        font-size: 1rem; /* Make icons larger on mobile */
                    }
                }
            </style>
            <nav>
                <a href="index.html" title="Home"><i class="fas fa-home-alt"></i><span class="nav-text">Home</span></a>
                <a href="info.html" title="About Us"><i class="fas fa-info-circle"></i><span class="nav-text">About</span></a>
                <a href="ourservice.html" title="Our Services"><i class="fas fa-concierge-bell"></i><span class="nav-text">Services</span></a>
                <a href="contact.html" title="Contact Us"><i class="fas fa-envelope"></i><span class="nav-text">Contact</span></a>
            </nav>
        `;
        shadow.appendChild(header);
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
                .footer-container {
                    background: oklch(12% 0.03 260);
                    color: white;
                    padding: 6rem 2rem;
                    text-align: center;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                    overflow: hidden; /* Ensure no overflow from animations */
                }
                .social-links {
                    margin-bottom: 3rem;
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                }
                .social-links a {
                    color: oklch(90% 0.05 260 / 0.7);
                    font-size: 1.8rem;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 70px;
                    height: 70px;
                    background: oklch(100% 0 0 / 0.03);
                    border: 1px solid oklch(100% 0 0 / 0.1);
                    border-radius: 50%; /* Make them perfectly round */
                    text-decoration: none;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                .social-links a:hover {
                    color: oklch(98% 0.01 260);
                    background: oklch(70% 0.18 250 / 0.1);
                    border-color: oklch(70% 0.18 250); /* Primary color border on hover */
                    transform: scale(1.1) rotate(5deg); /* More subtle animation */
                    box-shadow: 0 10px 30px oklch(70% 0.18 250 / 0.4), inset 0 0 15px oklch(70% 0.18 250 / 0.3); /* Outer glow and inner shadow */
                }
                .copy {
                    font-family: 'Space Grotesk', sans-serif;
                    opacity: 0.3;
                    font-size: 0.8rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    margin-top: 1.5rem; /* Add some space above */
                }
                .brand {
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 1.8rem; /* Slightly larger brand text */
                    margin-bottom: 1.5rem; /* More space below brand */
                    background: linear-gradient(to right, #fff, oklch(80% 0.22 85), oklch(70% 0.18 250)); /* More vibrant gradient */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
            </style>
            <div class="footer-container">
                <div class="brand">IELTS ZONE MYMENSINGH</div>
                <div class="social-links">
                    <a href="https://www.facebook.com/p/DeCell-61565373131494/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
                <div class="copy">&copy; 2026 Lapis Web Solutions Ltd. . ALL RIGHTS RESERVED.</div>
            </div>
        `;
        shadow.appendChild(footer);
    }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
