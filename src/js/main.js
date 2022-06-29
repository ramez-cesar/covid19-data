const dateUpdated = document.querySelector('#date_updated')
const globalCases = document.querySelector('#global_cases')
const globalDeaths = document.querySelector('#global_deaths')
const globalRecovered = document.querySelector('#global_recovered')
const globalNewCases = document.querySelector('#global_new_cases')
const randomCountry = document.querySelector('#random_country')


const URL_API_GLOBAL = 'https://covid-19.dataflowkit.com/v1/world';
const URL_API_RANDOM = 'https://covid-19.dataflowkit.com/v1';


const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic',]


async function globalData() {
    const response = await fetch(URL_API_GLOBAL)
    const data = await response.json()

    if(response.ok) {

        const date = new Date([data['Last Update']])

        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear() 

        dateUpdated.textContent = `${day}, ${months[month]}, ${year}`
        globalCases.textContent = data['Total Cases_text']
        globalDeaths.textContent = data['Total Deaths_text']
        globalRecovered.textContent = data['Total Recovered_text']
        globalNewCases.textContent = data['New Cases_text']

    } else {
        showError.textContent = `Hubo un error! ${response.status} ${data.message}`
    }
}

globalData()




async function showRandomDataCountry() {
    const response = await fetch(URL_API_RANDOM)
    const data = await response.json()

    const countryName = document.querySelector('#country_name')
    const secondCountryName = document.querySelector('#second_country_name')

    // New cases
    const newCasesCountry = document.querySelector('#new_cases_country')
    const activeCasesCountry = document.querySelector('#active_cases_country')
    const deseacedCasesCountry = document.querySelector('#new_deaths_country')
    const newCasesCountryTwo = document.querySelector('#new_cases_country_two')
    const activeCasesCountryTwo = document.querySelector('#active_cases_country_two')
    const deseacedCasesCountryTwo = document.querySelector('#new_deaths_country_two')

    // Total cases
    const totalCasesCountry = document.querySelector('#total_cases_country')
    const totalDeseacedCountry = document.querySelector('#total_deaths_country')
    const totalRecoveredCountry = document.querySelector('#total_recovered_country')
    const totalCasesCountryTwo = document.querySelector('#total_cases_country_two')
    const totalDeseacedCountryTwo = document.querySelector('#total_deaths_country_two')
    const totalRecoveredCountryTwo = document.querySelector('#total_recovered_country_two')
    

    const country = data[randomValue()]
    const countryTwo = data[randomValue()]
    console.log(country)
    console.log(countryTwo)

    if(country != 0) {
        countryName.textContent = country['Country_text']
    
        if(country['New Cases_text'] === "") {
            newCasesCountry.textContent = "N/A"
        } else {
            newCasesCountry.textContent = country['New Cases_text']
        }
    
        if(country['Active Cases_text'] === "") {
            activeCasesCountry.textContent = "N/A"
        } else {
            activeCasesCountry.textContent = country['Active Cases_text']
        }
    
        if(country['New Deaths_text'] === "") {
            deseacedCasesCountry.textContent = "N/A"
        } else {
            deseacedCasesCountry.textContent = country['New Deaths_text']
        }

    } else {
        country = 21
    }


    if(countryTwo != 0) {
        secondCountryName.textContent = countryTwo['Country_text']

        if(countryTwo['New Cases_text'] === "") {
            newCasesCountryTwo.textContent = "N/A"
        } else {
            newCasesCountryTwo.textContent = countryTwo['New Cases_text']
        }
    
        if(countryTwo['Active Cases_text'] === "") {
            activeCasesCountryTwo.textContent = "N/A"
        } else {
            activeCasesCountryTwo.textContent = countryTwo['Active Cases_text']
        }
    
        if(countryTwo['New Deaths_text'] === "") {
            deseacedCasesCountryTwo.textContent = "N/A"
        } else {
            deseacedCasesCountryTwo.textContent = countryTwo['New Deaths_text']
        }
        
    } else {
        countryTwo = 1
    }

    totalCasesCountry.textContent = country['Total Cases_text']
    totalDeseacedCountry.textContent = country['Total Deaths_text']
    totalRecoveredCountry.textContent = country['Total Recovered_text']
    totalCasesCountryTwo.textContent = countryTwo['Total Cases_text']
    totalDeseacedCountryTwo.textContent = countryTwo['Total Deaths_text']
    totalRecoveredCountryTwo.textContent = countryTwo['Total Recovered_text']
}

showRandomDataCountry()


function randomValue() {
    const totalCountries = 100;

    return Math.floor(Math.random() * (0 - totalCountries) + totalCountries)
}