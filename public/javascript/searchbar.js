const searchButton = document.getElementById('js-submit-recipe-search')

async function searchFunction () {
    //declare variables
    const searchInput = document.getElementById('js-recipe-search');
    const filter = searchInput.value;

    window.location.assign(`/?search=${filter}`)

    // const response = await fetch(`/api/recipes?search=${filter}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })

    // const data = await response.json()

    // console.log(data)
}


searchButton.addEventListener('click', searchFunction)

