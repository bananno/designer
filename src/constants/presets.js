
const presets = [];

presets.push({
  bodyBackgroundColor: '#dfdfdf',
  pieces: [
    { type: 'section' },
    { type: 'title', text: 'ULTIMATE' },
    { type: 'navigation', items: ['HOME', 'PRODUCTS', 'SERVICES', 'BLOG', 'CONTACT'] },
    { type: 'section' },
    { type: 'banner', image: 'bannerbg1' },
    { type: 'section' },
    { type: 'content' },
    { type: 'content' },
    { type: 'content' },
    { type: 'section' },
    { type: 'banner', image: 'bannerbg1' },
    { type: 'banner', image: 'bannerbg1' },
    { type: 'banner', image: 'bannerbg1' },
    { type: 'section', backgroundColor: '#ccc' },
    { type: 'content', text: 'copyright bla bla' },
  ],
});

presets.push({
  bodyBackgroundColor: 'white',
  pieces: [
    { type: 'section', backgroundColor: 'orange' },
    { type: 'title', text: 'TITLE HERE' },
    { type: 'navigation', items: ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'] },
    { type: 'section' },
    { type: 'banner' },
    { type: 'section', backgroundColor: '#dfdfdf' },
    { type: 'content' },
    { type: 'content' },
    { type: 'content' },
    { type: 'content' },
    { type: 'section', backgroundColor: 'orange' },
    { type: 'navigation', items: ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'] },
    { type: 'section', backgroundColor: '#ccc' },
    { type: 'content', text: 'copyright bla bla' },
  ],
});

presets.push({
  bodyBackgroundColor: '#dfdfdf',
  pieces: [
    { type: 'section' },
    { type: 'title', text: 'BIZZ.TARGET' },
    { type: 'navigation', items: ['Home', 'Marketing', 'Careers', 'Service', 'Contact'] },
    { type: 'section', backgroundColor: 'gray' },
    { type: 'banner' },
    { type: 'section', backgroundColor: 'gray' },
    { type: 'content' },
    { type: 'content' },
    { type: 'content' },
    { type: 'content' },
    { type: 'section' },
    { type: 'content' },
    { type: 'content' },
  ],
});

presets.push({
  bodyBackgroundColor: '#6a778c',
  pieces: [
    { type: 'section', backgroundColor: '#b1bcce' },
    { type: 'title', text: 'Design' },
    { type: 'title', text: 'Studio' },
    { type: 'navigation', items: ['home', 'blog', 'about', 'contact'] },

    { type: 'section', backgroundColor: '#333' },
    { type: 'title', text: 'Let us design for you' },
    { type: 'section', backgroundColor: '#333' },
    { type: 'content' },
    { type: 'section', backgroundColor: '#333' },
    { type: 'navigation', items: ['Portfolio', 'Services', 'Testimonials'] },
    { type: 'section' },
    { type: 'content' },
    { type: 'content' },
  ],
});

export default presets;
