console.log("content.js Loaded")

const savedList = document.querySelector("._203kLAn6xQ7ktVOvJCzl9p")

if (savedList) {
    console.log("Found Saved List")
    const searchBar = document.createElement("div")
    searchBar.innerHTML = `
        <div style="padding: 10px">
            <h1>
            <div style="display: inline-block; padding-right: 10px">
                <label for="searchTerm" style="display: block; padding-bottom: 10px">Search:</label>
                <input id="searchTerm" name="searchTerm" style="display: block"></input>
            </div> 
            <div style="display: inline-block">
                <label for="subreddit" style="display: block; padding-bottom: 10px">Filter by (subreddit/user):</label>
                <input id="subreddit" name="subreddit" style="display: block"></input>      
            </div> 
        </div>
    `
    savedList.insertAdjacentElement("beforebegin", searchBar)

    let searchTerm = ""
    let subreddit = ""
    const searchInput = document.querySelector("#searchTerm")
    const subredditInput = document.querySelector("#subreddit")
    searchInput.addEventListener("change", (input) => {
        searchTerm = input.target.value
        console.log(searchTerm)
    })
    subredditInput.addEventListener("change", (input) => {
        subreddit = input.target.value
        console.log(subreddit)
    })
}   