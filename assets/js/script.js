// function to toggle navbar
const toggleNavbar = () => {
  document.querySelector('.navbar').classList.toggle('show');
};

// portfolio template
const speakerTemplate = (portfolioData) => {
  let content = '';
  portfolioData.forEach((data) => {
    content += `
      <li class="speaker">
        <div class="speaker-image">
            <img src="${data.image}" class="img" alt="${data.name}">
        </div>
        <div class="details">
            <h3>${data.name}</h3>
            <h4>${data.excerpt}</h4>
            <p>${data.description}</p>
        </div>
    `;
  });
  return content;
};

// WINDOWS ON LOAD
window.addEventListener('load', () => {
  // toggle navbar on mobile
  document.querySelector('.bars').addEventListener('click', toggleNavbar);

  const speakers = [
    {
      id: '1',
      name: 'Damilare Arikeusola',
      image: 'assets/images/speaker1.png',
      excerpt:
            'A daily selection of privately personalized.',
      description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: '2',
      name: 'Ibrahim Babangida',
      image: 'assets/images/speaker2.png',
      excerpt:
            'Experimental content creation feature that.',
      description:
            'When an unknown printer took a galley of type and scrambled.',
    },
    {
      id: '3',
      name: 'Mark Anderson',
      image: 'assets/images/speaker3.png',
      excerpt:
            'Exploring the future of media.',
      description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: '4',
      name: 'Jolly Peters',
      image: 'assets/images/speaker4.png',
      excerpt:
            'A smart assistant to make driving more safe.',
      description:
            'Lorem Ipsum han printer took a galley of type and scrambled.',
    },
    {
      id: '5',
      name: 'Will Smith',
      image: 'assets/images/speaker5.png',
      excerpt:
              'A smart assistant to make driving more safe.',
      description:
              'Lorem Ipsum han printer took a galley of type and scrambled it 1960s.',
    },
    {
      id: '6',
      name: 'Timi Wix',
      image: 'assets/images/speaker6.png',
      excerpt:
              'A smart assistant to make driving more safe, efficient, and fun.',
      description:
              'Lorem Ipsum han printer took a galley of type and scrambled.',
    },
  ];

  document.querySelector('#speakers').innerHTML = speakerTemplate(speakers);
});