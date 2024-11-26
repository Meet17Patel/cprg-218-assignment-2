// Array of events for the Statue of Liberty's history
const events = [
    {
        year: "1865",
        title: "The Idea",
        description: "In 1865, a French political intellectual and anti-slavery activist named Edouard de Laboulaye proposed that a liberty statue be built for the United States. This monument would honor the United States' independence centennial and its friendship with France.",
        
        image:"1865.jpeg"
    },
    {
        year: "1870",
        title: "Design by Bartholdi",
        description: "French sculptor Auguste Bartholdi supported de Laboulaye's idea and in 1870 began designing the statue of Liberty Enlightening the World. While Bartholdi was designing the Statue, he also traveled to the United States.  During the trip, Bartholdi selected Bedloe's Island as the site for the Statue. Although the island was small, it was visible to every ship entering New York Harbor, which Bartholdi viewed as the gateway to America.",
        image: "1870.jpg"
    },
    {
        year: "1876",
        title: "Construction Completed",
        description: "The arm holding the torch was completed in 1876 and shown at the Centennial Exposition in Philadelphia. The head and shoulders were completed and displayed at the Paris Universal Exposition. The entire Statue was completed and assembled in Paris between 1881 and 1884.",
        image: "1876.jpg"
    },
    {
        year: "1884- 1885",
        title: "Arrival in the U.S.",
        description: "After the Statue was presented to Levi P Morton, the U.S. minister to France, on July 4, 1884, in Paris, it was disassembled and shipped to the United States aboard the French Navy ship, Isère. The Statue arrived in New York Harbor on June 17, 1885, and was met with great fanfare.",
        image: "1885.jpg"
    },
    {
        year: "1886",
        title: "Official Dedication",
        description: "On October 28, 1886, the statue of Liberty Enlightening the World was officially unveiled The Statue was reassembled with surprising speed by a fearless construction crew - many of whom were new immigrants. In order to sculpt the Statue's skin Eiffel used the repoussé technique developed by Eugene Viollet-le-Duc. This technique was molding lightweight copper sheets by hammering them onto the Statue's hallowed wooden framework.",
        image: "1886.jpg"
    }
];

// Dynamically generate timeline items
const timelineContainer = document.getElementById('timeline');

events.forEach((event, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    timelineItem.innerHTML = `
        <span>${event.year}</span>
        <h2>${event.title}</h2>
        <p>${event.description}</p>
        <button onclick="toggleImage(${index})">Show Image</button>
        <img id="image-${index}" src="${event.image}" alt="${event.title}">
    `;

    timelineContainer.appendChild(timelineItem);
});

// Function to toggle image visibility
function toggleImage(index) {
    const image = document.getElementById(`image-${index}`);
    if (image.style.display === 'block') {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
}
