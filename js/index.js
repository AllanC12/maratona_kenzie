async function showCards(){
  const urlListCards = `https://swapi.dev/api/people`
  const listCardsElement = document.getElementById('cardList')
  listCardsElement.innerHTML = ``
  const cardsList = await fetch(urlListCards).then(response => {
    return response.json()
  })
  console.log(cardsList)
}

showCards()
