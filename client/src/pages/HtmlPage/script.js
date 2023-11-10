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



// questions menu

const questionsTitle = document.querySelectorAll('.question-item-title');
const hiddenItems = document.querySelectorAll('.question-hidden-item');
const arrowsRight = document.querySelectorAll('.fa-arrow-right');
const arrowsDown = document.querySelectorAll('.fa-arrow-down');

questionsTitle.forEach((title, index) => {
    title.addEventListener('click', () => {

        hiddenItems.forEach((item, i) => {
            if(i !== index) {
                item.style.display = 'none'
            }
        })

        arrowsRight.forEach((arrow, i) => {
            if(i !== index) {
                arrow.style.display = 'block'
            } 
        });

        arrowsDown.forEach((arrow, i) => {
            if(i !== index) {
                arrow.style.display = 'none'
            }
        });

        if (hiddenItems[index].style.display === 'block') {
            hiddenItems[index].style.display = 'none';
            arrowsRight[index].style.display = 'block';
            arrowsDown[index].style.display = 'none';  
        } else {
            hiddenItems[index].style.display = 'block';
            arrowsRight[index].style.display = 'none';
            arrowsDown[index].style.display = 'block';  
        }
    })  
})