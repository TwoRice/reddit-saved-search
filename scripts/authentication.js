const CLIENT_ID = "b6ptvK_mhMM0Qwdh8ve1yA"
const RESPONSE_TYPE = "code"
const STATE = "authed123"
const REDIRECT_URI = "https://reddit.com/saved"
const DURATION = "permanent"
const SCOPE = "history"

function authenticateReddit() {
    const authentication_url = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${STATE}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`
    chrome.tabs.update({url: authentication_url}) 
}

document.querySelector("#btn-submit").addEventListener("click", authenticateReddit)