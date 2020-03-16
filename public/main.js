const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const updateTeamName = (teamInput, teamName) => {
  const nameToChange = document.querySelector(teamInput).value
  document.querySelector(teamName).textContent = nameToChange
}

const teamOne = () => {
  updateTeamName('.team-1-input', '.team-1-name')
}

const teamTwo = () => {
  updateTeamName('.team-2-input', '.team-2-name')
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-1-name').addEventListener('click', teamOne)

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-2-name').addEventListener('click', teamTwo)
