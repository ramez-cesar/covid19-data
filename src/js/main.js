const messageError = document.querySelector('#message_error')
const dateUpdated = document.querySelector('#date_updated')
const mainGlobalData = document.querySelector('.main--global-data')
const globalCases = document.querySelector('#global_cases')
const globalDeaths = document.querySelector('#global_deaths')
const globalRecovered = document.querySelector('#global_recovered')
const globalNewCases = document.querySelector('#global_new_cases')
const searchCountry = document.querySelector('#search_country')
const mainContainerCountry = document.querySelector('.main--container-country')
const randomCountryDown = document.querySelector('#random_country_down')
const randomCountryUp = document.querySelector('#random_country_up')


const URL_API_GLOBAL = 'https://covid-19.dataflowkit.com/v1/world';
const URL_API_RANDOM = 'https://covid-19.dataflowkit.com/v1';


async function globalData() {
    const response = await fetch(URL_API_GLOBAL)
    const data = await response.json()

    if(response.ok) {

        const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

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
        mainGlobalData.innerHTML = ""
        messageError.textContent = "Data not currently available. Please try again later."
    }
}

globalData()


async function showRandomDataCountry() {
    const response = await fetch(URL_API_RANDOM)
    const data = await response.json()

    if(response.ok) {
        const countryName = document.querySelector('#country_name')
        const secondCountryName = document.querySelector('#second_country_name')

        // New cases
        const newCasesCountry = document.querySelector('#new_cases_country')
        const activeCasesCountry = document.querySelector('#active_cases_country')
        const deseacedCasesCountry = document.querySelector('#new_deaths_country')
        const newCasesCountryTwo = document.querySelector('#new_cases_country_two')
        const activeCasesCountryTwo = document.querySelector('#active_cases_country_two')
        const deseacedCasesCountryTwo = document.querySelector('#new_deaths_country_two')
        const newCasesCountryThree = document.querySelector('#new_cases_country_three')
        const activeCasesCountryThree = document.querySelector('#active_cases_country_three')
        const deseacedCasesCountryThree = document.querySelector('#new_deaths_country_three')

        // Total cases
        const totalCasesCountry = document.querySelector('#total_cases_country')
        const totalDeseacedCountry = document.querySelector('#total_deaths_country')
        const totalRecoveredCountry = document.querySelector('#total_recovered_country')
        const totalCasesCountryTwo = document.querySelector('#total_cases_country_two')
        const totalDeseacedCountryTwo = document.querySelector('#total_deaths_country_two')
        const totalRecoveredCountryTwo = document.querySelector('#total_recovered_country_two')
        const totalCasesCountryThree = document.querySelector('#total_cases_country_three')
        const totalDeseacedCountryThree = document.querySelector('#total_deaths_country_three')
        const totalRecoveredCountryThree = document.querySelector('#total_recovered_country_three')
        

        let countryOne = data[randomValue()]
        let countryTwo = data[randomValue()]
        let countryThree = data[randomValue()]


        if(countryOne === 0) {
            countryOne = 21
            countryName.textContent = countryOne['Country_text']
        
            if(countryOne['New Cases_text'] === "") {
                newCasesCountry.textContent = "N/A"
            } else {
                newCasesCountry.textContent = countryOne['New Cases_text']
            }
        
            if(countryOne['Active Cases_text'] === "") {
                activeCasesCountry.textContent = "N/A"
            } else {
                activeCasesCountry.textContent = countryOne['Active Cases_text']
            }
        
            if(countryOne['New Deaths_text'] === "") {
                deseacedCasesCountry.textContent = "N/A"
            } else {
                deseacedCasesCountry.textContent = countryOne['New Deaths_text']
            }

        } else {
            countryName.textContent = countryOne['Country_text']
        
            if(countryOne['New Cases_text'] === "") {
                newCasesCountry.textContent = "N/A"
            } else {
                newCasesCountry.textContent = countryOne['New Cases_text']
            }
        
            if(countryOne['Active Cases_text'] === "") {
                activeCasesCountry.textContent = "N/A"
            } else {
                activeCasesCountry.textContent = countryOne['Active Cases_text']
            }
        
            if(countryOne['New Deaths_text'] === "") {
                deseacedCasesCountry.textContent = "N/A"
            } else {
                deseacedCasesCountry.textContent = countryOne['New Deaths_text']
            }
        }


        if(countryTwo === 0) {
            countryTwo = 1
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
        }


        if(countryThree === 0) {
            countryThree = 32
            third_country_name.textContent = countryThree['Country_text']

            if(countryThree['New Cases_text'] === "") {
                newCasesCountryThree.textContent = "N/A"
            } else {
                newCasesCountryThree.textContent = countryThree['New Cases_text']
            }
        
            if(countryThree['Active Cases_text'] === "") {
                activeCasesCountryThree.textContent = "N/A"
            } else {
                activeCasesCountryThree.textContent = countryThree['Active Cases_text']
            }
        
            if(countryThree['New Deaths_text'] === "") {
                deseacedCasesCountryThree.textContent = "N/A"
            } else {
                deseacedCasesCountryThree.textContent = countryThree['New Deaths_text']
            }
            
        } else {
            third_country_name.textContent = countryThree['Country_text']

            if(countryThree['New Cases_text'] === "") {
                newCasesCountryThree.textContent = "N/A"
            } else {
                newCasesCountryThree.textContent = countryThree['New Cases_text']
            }
        
            if(countryThree['Active Cases_text'] === "") {
                activeCasesCountryThree.textContent = "N/A"
            } else {
                activeCasesCountryThree.textContent = countryThree['Active Cases_text']
            }
        
            if(countryThree['New Deaths_text'] === "") {
                deseacedCasesCountryThree.textContent = "N/A"
            } else {
                deseacedCasesCountryThree.textContent = countryThree['New Deaths_text']
            }
        }


        totalCasesCountry.textContent = countryOne['Total Cases_text']
        totalDeseacedCountry.textContent = countryOne['Total Deaths_text']
        totalRecoveredCountry.textContent = countryOne['Total Recovered_text']
        totalCasesCountryTwo.textContent = countryTwo['Total Cases_text']
        totalDeseacedCountryTwo.textContent = countryTwo['Total Deaths_text']
        totalRecoveredCountryTwo.textContent = countryTwo['Total Recovered_text']
        totalCasesCountryThree.textContent = countryThree['Total Cases_text']
        totalDeseacedCountryThree.textContent = countryThree['Total Deaths_text']
        totalRecoveredCountryThree.textContent = countryThree['Total Recovered_text']
    
    } else {
        mainContainerCountry.innerHTML = ""
        messageError.textContent = "Data not currently available. Please try again later."
    }
}

showRandomDataCountry()



function randomValue() {
    const totalCountries = 100;

    return Math.floor(Math.random() * (0 - totalCountries) + totalCountries)
}