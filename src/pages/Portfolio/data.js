const certifications = [
    { image: "Certificado ReactJs - Udemy.jpg" },
    { image: "Certificado Nodejs - Udemy.jpg" },
    { image: "Html-Css (M1) Curso-em-Video.png" },
    { image: "Html-Css (M2) Curso-em-Video.png" },
    { image: "Html-Css (M3) Curso-em-Video.png" },
    { image: "Javascript Curso-em-Video.png" },
    { image: "RogaDX - certificado (2023).png" },
    { image: "RogaDX - certificado (2024).png" },
    { image: "Ruby Udemy.png" },
];

const projects = [
    {
        image: "/Dashboard2.png",
        title: "Dashboard",
        description: "One of my works in Itnsify was to develop an interactive dashboard for data analysis to a client, featuring dynamic visualizations and real-time statistics. Built with React and API integrations.",
        link: "https://dashboard-preview-4682e.web.app/"
    },
    {
        image: "/spaceXAPI.png",
        title: "SpaceX-API",
        description: "The challenge to get my first job, a project that consumes the SpaceX API to display information about space launches, rockets, and missions. Developed with JavaScript and styled with modern CSS.",
        link: "https://www.youtube.com/watch?v=wfN8SlpwdRw"
    },
    {
        image: "/Mkt Alimentos.png",
        title: "Sustainable Discount (Final Paper)",
        description: "My college final paper is a sustainable marketplace offering discounts on near-expiry products to reduce food waste. Built with React Native and Firebase for real-time updates.",
        link: "https://github.com/matheuspedrosam/mkt-alimentos-a-vencer"
    },
    {
        image: "/Sootz-SaaS.png",
        title: "Sootz SaaS",
        description: "A B2B SaaS platform for contract management, integrated with Google solutions like Drive and Workspace. Developed at Itnsify, using React Native and Firebase.",
        link: ""
    },
    {
        image: "/jackTheJumper.png",
        title: "Jack The Jumper",
        description: 'A 2D platformer game built with Unity and C# for a college subject, where players jump in a tree to achieve the highest score. Inspered in "João e o Pé de Feijão" with classic gameplay mechanics.',
        link: "https://phenrique01.github.io/Jack-The-Jumper/"
    },
    {
        image: "/python-bot.png",
        title: "Python Bot",
        description: "Python Bot to generate a daily report on WhatsApp for my parents about our small businesses. It consists of accessing our booking software, downloading the Excel, reading, and sending the data to my parents.",
        link: "https://github.com/matheuspedrosam/Bot-Python"
    },
    {
        image: "/world-tour.png",
        title: "World Tour",
        description: "An interactive app that allows users to explore tourist destinations worldwide, integrating maps and geolocation APIs for an immersive experience. (College Subject)",
        link: "https://github.com/matheuspedrosam/world-tour"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/265743407-3ac82e54-415b-45c4-a038-46eaedaf05be.png",
        title: "WildBeast",
        description: "A modern and responsive website showcasing wildlife photography with a clean and minimalist design. Developed using HTML, CSS, and JavaScript. (Css Grid studies)",
        link: "https://matheuspedrosam.github.io/Projetos-Html-e-Css/12%20-%20WildBeast/index.html"
    },
    {
        image: "/miniblog.png",
        title: "MiniBlog",
        description: "A lightweight blogging platform where users can create, edit, and share articles. Developed with React, Firebase, and a simple yet intuitive UI. (Nodejs studies)",
        link: "https://miniblog-curso-react-6cfdf.web.app/"
    },
    {
        image: "/ReactgramHome.png",
        title: "Reactgram",
        description: "A fake social media platform inspired by Instagram, allowing users to upload, like, and comment on photos. Built with React, Firebase, and user authentication. (React studies)",
        link: "https://www.youtube.com/watch?v=c7mVSkYTrNI"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/239775234-f2e22f53-838d-48ce-a37a-742880b9a569.png",
        title: "Mario's Game",
        description: "A browser-based Mario-inspired game developed with JavaScript and Canvas. Players navigate through obstacles in a side-scrolling adventure.",
        link: "https://matheuspedrosam.github.io/Projetos-JavaScript/12%20-%20Jogo%20do%20Mario/index.html"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/239776322-8de3d464-ff19-41ff-b70f-509ffc9b8ea0.png",
        title: "Flexblog",
        description: "A modern, fully responsive blog template designed with HTML, CSS, and Flexbox. It features a clean layout optimized for readability. (Css Flexbox studies)",
        link: "https://matheuspedrosam.github.io/Projetos-Html-e-Css/07%20-%20Flexblog/index.html"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/239776497-7ba1a2c4-eb0a-4a2f-a532-2e262857d80e.png",
        title: "Beuty",
        description: "A visually appealing landing page for a beauty brand, designed with smooth animations and an elegant UI using HTML, CSS, and JavaScript.",
        link: "https://matheuspedrosam.github.io/Projetos-Html-e-Css/10%20-%20beUty/index.html"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/265743278-05ea8e23-790b-4663-be23-40e6cc28472d.png",
        title: "Landing Page",
        description: "A simple landing page designed for studies, created with HTML, CSS, JS and an optimized layout for mobile and desktop.",
        link: "https://matheuspedrosam.github.io/Projetos-Html-e-Css/11%20-%20Landing%20Page/index.html"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/239775164-086271a4-3a4f-46bd-b7bf-5ff46e2900d9.png",
        title: "Form Validator",
        description: "A JavaScript-based form validation system that ensures user inputs meet specific criteria before submission with elegants animations, improving data accuracy and security.",
        link: "https://matheuspedrosam.github.io/Projetos-JavaScript/10%20-%20Validador%20de%20Formul%C3%A1rio/index.html"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/239775208-2a00be27-681e-4b95-b2ee-9201aea21e0b.png",
        title: "Calculator",
        description: "A simple yet functional calculator app built with JavaScript. Supports basic arithmetic operations with a clean and responsive design.",
        link: "https://matheuspedrosam.github.io/Projetos-JavaScript/11%20-%20Calculadora/index.html"
    },
    {
        image: "https://user-images.githubusercontent.com/99772255/239775058-c767eab1-2131-481f-80b6-993ddab17e26.png",
        title: "Digital Clock",
        description: "A real-time digital clock that displays the current time with smooth animations. Developed with JavaScript and CSS for an elegant look.",
        link: "https://matheuspedrosam.github.io/Projetos-JavaScript/07%20-%20Relogio%20Digital/index.html"
    }
];

export { projects, certifications };