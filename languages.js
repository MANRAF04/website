const link = document.querySelectorAll('.langWrap a')
const workEl = document.querySelector('.work a') 
const homeEl = document.querySelector('.navbar .home') 
const portEl = document.querySelector('.navbar .portfolio') 
const servEl = document.querySelector('.navbar .services') 
const contactEl = document.querySelector('.navbar .contact') 
const aboutEl = document.querySelector('.navbar .about') 

link.forEach(el => {
    el.addEventListener('click', () => {
        const attr = el.getAttribute('language')

        workEl.textContent = data[attr].work
        homeEl.textContent = data[attr].home
        portEl.textContent = data[attr].portfolio
        servEl.textContent = data[attr].services
        contactEl.textContent = data[attr].contact
        aboutEl.textContent = data[attr].about
    })
})

const data = {
    "en": {
        "home": "HOME",
        "portfolio": "PORTFOLIO",
        "services": "SERVICES",
        "contact": "CONTACT",
        "about": "ABOUT",
        "work": "Work with us"
    }, 
    "gr": {
        "home": "ΑΡΧΙΚΗ",
        "portfolio": "ΠΟΡΤΦΟΛΙΟ",
        "services": "ΥΠΗΡΕΣΙΕΣ",
        "contact": "ΕΠΙΚΟΙΝΩΝΙΑ",
        "about": "ΠΛΗΡΟΦΟΡΙΕΣ",
        "work": "Δουλέψτε μαζί μας"
    }, 
}