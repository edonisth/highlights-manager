<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // Handle book link clicks
    document.querySelectorAll('.book-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const bookId = this.dataset.bookId; // Get the book ID from the clicked link
            console.log('Clicked book ID:', bookId); // Debug: Log the book ID

            // Remove active class from all books and content
            document.querySelectorAll('.book-item, .book-content').forEach(element => {
                element.classList.remove('active');
            });

            // Add active class to clicked book and corresponding content
            const bookItem = this.closest('.book-item');
            const bookContent = document.getElementById(bookId);

            if (bookItem && bookContent) {
                bookItem.classList.add('active');
                bookContent.classList.add('active');
                console.log('Active book:', bookId); // Debug: Log the active book
            } else {
                console.error('Book item or content not found for ID:', bookId); // Debug: Log errors
            }
        });
    });

    // Sidebar toggle functionality
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    const icon = toggleButton.querySelector('i');

    function toggleSidebar() {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('collapsed');
        } else {
            sidebar.classList.toggle('active');
        }
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }

    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSidebar();
    });

    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('collapsed');
            } else {
                sidebar.classList.remove('active');
            }
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            icon.classList.replace('fa-times', 'fa-bars');
        } else {
            sidebar.classList.remove('collapsed');
        }
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon();
    }

    // Toggle Theme
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        updateThemeIcon();
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : '';
        localStorage.setItem('theme', currentTheme);
    });

    // Update Theme Icon
    function updateThemeIcon() {
        const isLightMode = body.classList.contains('light-mode');
        themeToggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    // Initialize theme icon on page load
    updateThemeIcon();
});
=======
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Get all book links from the sidebar
    const bookLinks = document.querySelectorAll('.book-list a');

    // Get the main content container
    const bookContent = document.querySelector('#book-content');

    // Store content for each book
    const bookContents = {
        'cypherpunks': `
            <h1>Cypherpunks: Freedom and the Future of the Internet</h1>
            <section>
                <h2>Nature of State Power and Control</h2>
                <ul>
                    <li>States are systems through which coercive force flows, applying violence or its threat to maintain authority.</li>
                    <li>Mass surveillance has become the tool for state control, driven by fears of internet-induced governance disruption.</li>
                    <li>The merging of state and corporate power, exemplified by partnerships like NSA and Google, intensifies control mechanisms.</li>
                </ul>
            </section>
            <section>
                <h2>The Role of Cryptography in Resistance</h2>
                <ul>
                    <li>Cryptography is non-violent direct action, a defense against coercive state control.</li>
                    <li>Encryption is inherently stronger than decryption, empowering individuals against surveillance.</li>
                    <li>Privacy and security are available but come at a cost, necessitating a deeper understanding of cryptography.</li>
                </ul>
            </section>
        `,
       'food-of-the-gods': `
    <h1>Food of the Gods: The Search for the Original Tree of Knowledge</h1>
    <section>
        <h2>Themes and Ideas</h2>
        <ul>
            <li><strong>The historical use of plants:</strong> The author suggests that humans have been using psychoactive plants for thousands of years, with evidence dating back to ancient civilizations like the Sumerians and Egyptians.</li>
            <li><strong>The role of psychedelics in understanding the human mind:</strong> Psychedelics are seen as tools for exploring new dimensions of consciousness and gaining deeper insights into ourselves and others.</li>
            <li><strong>Reconnecting with nature:</strong> The author argues that humans have become disconnected from the natural world, leading to various problems such as overpopulation, hunger, racism, sexism, and fundamentalism. By reclaiming our birthright with nature, we can begin to heal these wounds and create a more harmonious world for all living beings.</li>
            <li><strong>Shamanic practices:</strong> The author presents shamans as spiritual guides who use plants, music, and other tools to connect with the natural world and access other realms of consciousness. Shamanic practices are seen as a means of reconnecting with nature and gaining deeper understanding of ourselves, others, and the world around us.</li>
            <li><strong>The interconnectedness of all things:</strong> The author suggests that psychedelics can help us gain a deeper understanding of the interconnectedness of all things, both physical and spiritual.</li>
            <li><strong>The importance of experiencing nature directly:</strong> The author emphasizes the need for direct experience with nature, rather than relying on abstract concepts or second-hand information.</li>
            <li><strong>The role of psychedelics in personal growth and transformation:</strong> Psychedelics are seen as catalysts for personal growth and transformation, allowing individuals to break free from limiting patterns and perspectives and access new levels of consciousness.</li>
            <li><strong>The need for a more holistic approach to human experience:</strong> A more holistic approach, acknowledging the interconnectedness of all things, is essential for creating a balanced world.</li>
            <li><strong>The importance of spiritual practices in everyday life:</strong> Practices like meditation, yoga, and shamanic rituals foster connection with nature and others.</li>
            <li><strong>The role of storytelling in spiritual practices:</strong> Storytelling helps individuals understand their place in the world and connect with a larger cosmic order.</li>
            <li><strong>The need for authenticity and honesty:</strong> Authenticity allows individuals to access deeper levels of consciousness and true connection.</li>
            <li><strong>The importance of trust:</strong> Trust is key to shamanic practices, helping individuals connect meaningfully with the universe.</li>
            <li><strong>The role of dreams in spiritual practices:</strong> Dreams provide access to other realms of consciousness and deeper insights.</li>
            <li><strong>The importance of self-care:</strong> Taking care of physical, emotional, and spiritual needs is vital for deeper connections.</li>
            <li><strong>The role of ritual in spiritual practices:</strong> Rituals provide structure for accessing new levels of consciousness.</li>
            <li><strong>The importance of humility:</strong> Humility is necessary for true connection and personal growth.</li>
            <li><strong>The role of ancestral wisdom:</strong> Shamanic practices connect individuals with ancestral wisdom and understanding.</li>
            <li><strong>The importance of mindfulness:</strong> Being present and aware fosters meaningful connections with others and nature.</li>
            <li><strong>The importance of community:</strong> Shamanic practices help create community, essential for personal growth and transformation.</li>
        </ul>
    </section>
    <section>
        <h2>Quotes</h2>
        <blockquote>
            <p>Plants have been our teachers for thousands of years. They have shown us the way to connect with the natural world, to access other realms of consciousness, and to understand ourselves and others more deeply.</p>
            <cite>- Author</cite>
        </blockquote>
        <blockquote>
            <p>Psychedelics are not just tools for exploring new dimensions of consciousness; they are also catalysts for personal growth and transformation. They allow us to break free from limiting patterns and perspectives and access new levels of awareness.</p>
            <cite>- Author</cite>
        </blockquote>
        <blockquote>
            <p>We have forgotten how to connect with the natural world, how to listen to its wisdom, and how to live in harmony with its rhythms. We must reclaim our birthright with nature if we are to create a more balanced and harmonious world.</p>
            <cite>- Author</cite>
        </blockquote>
        <blockquote>
            <p>Shamanic practices are not just about accessing other realms of consciousness; they are also about cultivating a deeper sense of connection with the natural world and others.</p>
            <cite>- Author</cite>
        </blockquote>
    </section>
`

    };

    // Add event listeners to each book link
    bookLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the book ID from the link
            const bookId = link.getAttribute('data-book-id');

            // Update the main content with the selected book's content
            bookContent.innerHTML = bookContents[bookId] || '<h1>Content not available</h1>';
        });
    });
});
>>>>>>> d34e25ceac63c2c010a9cbc1f4bd3280ea5dc2ed
