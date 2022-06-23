const dateUpdated = document.querySelector('#date_updated')
const globalCases = document.querySelector('#global_cases')
const globalDeaths = document.querySelector('#global_deaths')
const globalRecovered = document.querySelector('#global_recovered')
const globalNewCases = document.querySelector('#global_new_cases')


const URL_API_GLOBAL = 'https://covid-19.dataflowkit.com/v1/world';


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