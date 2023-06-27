const URL_API_GLOBAL = 'https://covid-19.dataflowkit.com/v1/world';
const URL_API_RANDOM = 'https://covid-19.dataflowkit.com/v1';

const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

async function globalData() {
  const response = await fetch(URL_API_GLOBAL)
  const data = await response.json()

  if(response.ok) {
    const date = new Date([data['Last Update']])

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    dateUpdated.textContent = `${day} ${months[month]}, ${year}`
    globalCases.textContent = data['Total Cases_text']
    globalDeaths.textContent = data['Total Deaths_text']
    globalRecovered.textContent = data['Total Recovered_text']
    globalNewCases.textContent = data['New Cases_text']

  } else {
    mainGlobalData.innerHTML = ""
    messageError.textContent = "Data not currently available. Please try again later."
  }
}

async function searchByCountry() {
  const response = await fetch(URL_API_RANDOM)
  const data = await response.json()

  if(response.ok) {
    searchCountry.addEventListener('input', () => {
      data.filter(query => {
        const country = query['Country_text']

        const lowercaseCountryName = (country || '').toLowerCase()
        const lowercaseCountrySearched = searchCountry.value.toLowerCase()

        if(lowercaseCountryName?.includes(lowercaseCountrySearched)) {
          if(searchCountry.value != "") {
            countryFound(query)
            document.querySelector('.two').style.display = "none"
            document.querySelector('.three').style.display = "none"
          }
          else {
            document.querySelector('.two').style.display = "block"
            document.querySelector('.three').style.display = "block"
          }
        } 
      })
    })
  } else {
    mainGlobalData.innerHTML = ""
    messageError.textContent = "Data not currently available. Please try again later."
  }
}

async function showRandomDataCountry() {
  const response = await fetch(URL_API_RANDOM)
  const data = await response.json()

  data.map(country => {
    for (let data in country) {
      if (country[data] === "") {
        country[data] = "N/A"
      }
    }
  }) 

  if(response.ok) {
    let countryOne = data[randomValue()]
    let countryTwo = data[randomValue()]
    let countryThree = data[randomValue()]

    // Table one data
    countryNameOne.textContent = countryOne['Country_text']
    newCasesOne.textContent = countryOne['New Cases_text']
    newActiveCasesOne.textContent = countryOne['Active Cases_text']
    newDeathsOne.textContent = countryOne['New Deaths_text']
    totalCasesOne.textContent = countryOne['Total Cases_text']
    totalDeseacedOne.textContent = countryOne['Total Deaths_text']
    totalRecoveredOne.textContent = countryOne['Total Recovered_text']

    // Table two data
    countryNameTwo.textContent = countryTwo['Country_text']
    newCasesTwo.textContent = countryTwo['New Cases_text']
    newActiveCasesTwo.textContent = countryTwo['Active Cases_text']
    newDeathsTwo.textContent = countryTwo['New Deaths_text']
    totalCasesTwo.textContent = countryTwo['Total Cases_text']
    totalDeseacedTwo.textContent = countryTwo['Total Deaths_text']
    totalRecoveredTwo.textContent = countryTwo['Total Recovered_text']

    // Table three data
    countryNameThree.textContent = countryThree['Country_text']
    newCasesThree.textContent = countryThree['New Cases_text']
    newActiveCasesThree.textContent = countryThree['Active Cases_text']
    newDeathsThree.textContent = countryThree['New Deaths_text']
    totalCasesThree.textContent = countryThree['Total Cases_text']
    totalDeseacedThree.textContent = countryThree['Total Deaths_text']
    totalRecoveredThree.textContent = countryThree['Total Recovered_text']

  } else {
    mainContainerCountry.innerHTML = ""
    messageError.textContent = "Data not currently available. Please try again later."
  }
}

function countryFound(query) {
  for (let data in query) {
    if (query[data] === "") {
      query[data] = "N/A"
    }
  }

  // Country
  countryNameOne.textContent = query['Country_text']

  // New cases
  newCasesOne.textContent = query['New Cases_text']
  newActiveCasesOne.textContent = query['Active Cases_text']
  newDeathsOne.textContent = query['New Deaths_text']

  // Total cases
  totalCasesOne.textContent = query['Total Cases_text']
  totalDeseacedOne.textContent = query['Total Deaths_text']
  totalRecoveredOne.textContent = query['Total Recovered_text']
}

btnRandomCountry.addEventListener('click', e => {
  e.preventDefault()
  showRandomDataCountry()
})

function randomValue() {
  const totalCountries = 100;
  return Math.floor(Math.random() * (1 - totalCountries) + totalCountries)
}

const date = new Date()
copyrigth.textContent = `© ${date.getFullYear()} César Ramez`

globalData()
showRandomDataCountry()
searchByCountry()