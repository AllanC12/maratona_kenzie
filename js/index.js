async function showCards(){
  const urlListCards = `https://swapi.dev/api/people`
  const listCardsElement = document.getElementById('cardList')
  listCardsElement.innerHTML = ``
  const cardsList = await fetch(urlListCards).then(response => {
    return response.json()
  })
  
  for(let i = 0; i < cardsList.results.length; i++){
      const resultElement = cardsList.results[i]
      const li = document.createElement("li")
      const divFront = document.createElement("div")
      const divBack = document.createElement("div")
      const divNameFront = document.createElement("div")
      const divNameBack = document.createElement("div")
      const dataList = document.createElement("ul")
      const yearBirth = document.createElement("li")
      const planetElement = document.createElement("li")
      const image = document.createElement("img")

      li.classList.add('card','listCard')
      divFront.classList.add('face','front')

      
      divNameFront.classList.add('titleCard')
      divNameFront.innerText = resultElement.name
      
      divNameBack.classList.add('titleCard')
      divNameBack.innerText = resultElement.name
      
      dataList.classList.add('cardData')
      
      yearBirth.innerText = `Ano de nascimento: ${resultElement.birth_year}`

      const namePlanet =  await fetch(resultElement.homeworld).then(response => {
        return response.json()
      })

     
      planetElement.innerText = `Planeta: ${namePlanet.name}`
    
      divBack.classList.add('face','back')
    
      image.src = `../assets/starduck.png`
      image.alt = `starduck`
      
      dataList.append(yearBirth,planetElement)
      divFront.append(divNameFront,dataList)
      divBack.append(divNameBack,image)
      li.append(divFront,divBack)
      listCardsElement.append(li)
  } 

  swipeCard()

 }

 function swipeCard(){
    const cardsList = document.querySelectorAll('.listCard')

    for(let i = 0; i < cardsList.length; i++){
        const card = cardsList[i]

        card.addEventListener('click',()=> {
            card.classList.toggle('flip')
         })
    }
 }

showCards()
