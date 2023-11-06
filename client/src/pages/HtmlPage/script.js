// header dropdown menu

const accountMenu = document.querySelector('.header-icons-account');
const contactMenu = document.querySelector('.header-icons-contact');
const ideasMenu = document.querySelector('.hidden-subsubmenu-item');
const hiddenIdeas = document.querySelector('.hidden-ideas');
const hiddenResources = document.querySelector('.hidden-resources');
const resourcesMenu = document.querySelector('.resources-item');

let accountTimer;
let contactTimer;
let ideasTimer;
let resourcesTimer;

accountMenu.addEventListener('mouseover', () => {
    clearTimeout(accountTimer);
    document.querySelector('.hidden-account').style.display = 'block'
})

accountMenu.addEventListener('mouseout', () => {
    accountTimer = setTimeout(() => {
        document.querySelector('.hidden-account').style.display = 'none'
    }, 100)   
})

contactMenu.addEventListener('mouseover', () => {
    clearTimeout(contactTimer);
    document.querySelector('.hidden-contact').style.display = 'block'
})

contactMenu.addEventListener('mouseout', () => {
    contactTimer = setTimeout(() => {
        document.querySelector('.hidden-contact').style.display = 'none'
    }, 100) 
})

ideasMenu.addEventListener('mouseover', () => {
    clearTimeout(ideasTimer);
    hiddenIdeas.style.display = 'block'
    hiddenIdeas.style.visibility = 'visible'
    // hiddenResources.style.display = 'block'
})

ideasMenu.addEventListener('mouseout', () => {
    ideasTimer = setTimeout(() => {
        hiddenIdeas.style.display = 'none'
        hiddenIdeas.style.visibility = 'hidden'
        // hiddenResources.style.display = 'none'
    }, 200)
})

resourcesMenu.addEventListener('mouseover', () => {
    clearTimeout(resourcesTimer);
    hiddenResources.style.display = 'block'
})

resourcesMenu.addEventListener('mouseout', () => {
    resourcesTimer = setTimeout(() => {
        hiddenResources.style.display = 'none';
    }, 200)   
});