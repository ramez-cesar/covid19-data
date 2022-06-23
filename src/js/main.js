const dateUpdated = document.querySelector('#date_updated')
const globalCases = document.querySelector('#global_cases')
const globalDeaths = document.querySelector('#global_deaths')
const globalRecovered = document.querySelector('#global_recovered')


const URL_API_GLOBAL = 'https://covid-19.dataflowkit.com/v1/world';


async function globalData() {
    const response = await fetch(URL_API_GLOBAL)
    const data = await response.json()

    if(response.ok) {

        dateUpdated.textContent = data['Last Update']
        console.log(data['Total Cases_text'])
        globalCases.textContent = data['Total Cases_text']
        globalDeaths.textContent = data['Total Deaths_text']
        globalRecovered.textContent = data['Total Recovered_text']

    } else {
        showError.textContent = `Hubo un error! ${response.status} ${data.message}`
    }
}

globalData()