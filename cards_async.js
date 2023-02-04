baseURL = 'http://numbersapi.com/'

let randomNum = Math.floor(Math.random() * 300);
let zIndex = 1

async function getNumFacts() {
    console.log([baseURL, randomNum]) 
    let fact = await axios.get(`${baseURL}${randomNum}`);
    console.log(fact)}

// getNumFacts()

async function get_succeeding_facts() {
    let fact = await axios.get(`${baseURL}${randomNum}`);
    let fact1 = await axios.get(`${baseURL}${randomNum+1}`);
    let fact2 = await axios.get(`${baseURL}${randomNum+2}`);
    let fact3 = await axios.get(`${baseURL}${randomNum+3}`);
    console.log([fact, fact1, fact2, fact3])}

// get_succeeding_facts()

async function get_all_cards(){
    let deckID = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    sessionStorage.setItem('deckID', deckID.data.deck_id)
}
get_all_cards()

async function add_new_card(){
    let newDeckID = sessionStorage.getItem('deckID')
    console.log(newDeckID)
    let newestCard = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeckID}/draw/?count=1`)
    

    let new_img = document.createElement('img')
    new_img.setAttribute('src', newestCard.data.cards[0].image)
    new_img.setAttribute('style', `width: 100px; height: 150px; position: absolute; z-index: ${zIndex + 1}; transform: rotate(${Math.floor(Math.random() * 360)}deg) `)
    document.querySelector('#card_holder').append(new_img)
}


document.getElementById('new_card_button').addEventListener('click', add_new_card)