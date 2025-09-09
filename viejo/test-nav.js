document.addEventListener('DOMContentLoaded', () => {
    // Select all clickable SVG groups (which represent navigation items)
    const navItems = document.querySelectorAll('.nav-item');
    // Select all page sections
    const sections = document.querySelectorAll('.page-section');

    // Get a reference to the specific branch line for VÍDEO-INTRO
    const branchLineVideoIntro = document.getElementById('branch-line-video-intro');

    // Function to update the active navigation item based on scroll position
    function updateActiveNavItem() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Calculate a point in the viewport (e.g., 40% from the top)
            // This defines when a section is considered "active" as you scroll.
            const viewportScrollMidPoint = window.scrollY + (window.innerHeight * 0.4); // Adjust 0.4 (40%) as needed

            if (viewportScrollMidPoint >= sectionTop && viewportScrollMidPoint < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active'); // Remove 'active' from all items
            // If the current section ID matches the data-section of this item, add 'active'
            if (item.dataset.section === currentSectionId) {
                item.classList.add('active');
            }
        });

        // Special handling for the branch line and related nodes (INTRO and VÍDEO)
        // Check if the 'VÍDEO' section (section2) is currently active
        const isVideoActive = document.querySelector('.nav-item[data-section="section2"]').classList.contains('active');
        const introNavItem = document.querySelector('.nav-item[data-section="section1"]');

        if (isVideoActive) {
            // If VÍDEO is active, make its branch line and the INTRO node visually active
            branchLineVideoIntro.classList.add('active-branch-line'); // Add class to line for styling
            introNavItem.classList.add('active-branch-related'); // Add class to INTRO for styling
        } else {
            // If VÍDEO is not active, revert their styles
            branchLineVideoIntro.classList.remove('active-branch-line');
            introNavItem.classList.remove('active-branch-related');
        }
    }

    // Add click event listener to each navigation item for smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default SVG element click behavior (e.g., hash change in URL)

            // The click target might be the circle, the text, or the group itself.
            // We need to find the parent <g> element that has the data-section attribute.
            let clickedItem = e.currentTarget; // e.currentTarget is the element the event listener is attached to (the <g>)

            const targetSectionId = clickedItem.dataset.section;

            if (targetSectionId) {
                const targetSection = document.getElementById(targetSectionId);

                if (targetSection) {
                    // Scroll smoothly to the target section's position
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });

                    // Manually update active class immediately on click for quick feedback
                    // This ensures the clicked item becomes active instantly, even before scrolling finishes.
                    navItems.forEach(nav => nav.classList.remove('active'));
                    clickedItem.classList.add('active'); // Apply active class to the clicked group

                    // Re-run the update function to correctly style the branch line and related items
                    updateActiveNavItem();
                }
            }
        });
    });

    // Add scroll event listener to update the active item whenever the user scrolls
    window.addEventListener('scroll', updateActiveNavItem);

    // Initial call to set the active item when the page first loads
    updateActiveNavItem();
});