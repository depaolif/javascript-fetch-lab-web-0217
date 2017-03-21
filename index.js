
function getIssues() {
  const repo = 'depaolif/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(showIssues)
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  const issues = template(json)
  document.getElementById("issues").innerHTML = issues
}

function createIssue() {
  const repo = 'depaolif/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues)
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  const results = template(json)
  document.getElementById("results").innerHTML = results
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(showResults)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
