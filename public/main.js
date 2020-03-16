const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

// methods
const updateTeamName = (teamInput, teamName) => {
  const nameToChange = document.querySelector(teamInput).value
  document.querySelector(teamName).textContent = nameToChange
}

const addToTeam = score => {
  if (document.querySelector(score).textContent < 21) {
    const scoreToChange = document.querySelector(score).textContent
    const newScore = parseFloat(scoreToChange) + 1
    document.querySelector(score).textContent = newScore
  }
  checkWinConditions()
}
const subtractFromTeam = score => {
  if (document.querySelector(score).textContent > 0) {
    const scoreToChange = document.querySelector(score).textContent
    const newScore = parseFloat(scoreToChange) - 1
    document.querySelector(score).textContent = newScore
  }
  checkWinConditions()
}

//
const checkWinConditions = () => {
  if (
    document.querySelector('.team-1-score').textContent === '21' ||
    document.querySelector('.team-2-score').textContent === '21'
  ) {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.Round').disabled = true
    if (document.querySelector('.team-1-score').textContent === '21') {
      document.querySelector('.winnerWinner').textContent =
        document.querySelector('.team-1-name').textContent +
        ' You Win! Please push reset for new game!'
      document.querySelector('.winnerWinner').style.color = 'Blue'
    } else if (document.querySelector('.team-2-score').textContent === '21') {
      document.querySelector('.winnerWinner').textContent =
        document.querySelector('.team-2-name').textContent +
        ' You Win! Please push reset for new game!'
      document.querySelector('.winnerWinner').style.color = 'Blue'
    }
  }
}

// reset the game: turn all disabled buttons back to true, reset names and score values to 0
const resetTheGame = () => {
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.Round').disabled = false
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.whatRound').textContent = 'Round: 1'
  document.querySelector('.winnerWinner').textContent = ''
}

const nextRound = () => {
  if (document.querySelector('.whatRound').textContent === 'Round: 1') {
    document.querySelector('.whatRound').textContent = 'Round: 2'
  } else if (document.querySelector('.whatRound').textContent === 'Round: 2') {
    document.querySelector('.whatRound').textContent = 'Final Round'
    document.querySelector('.Round').disabled = true
  }
}

// intervening steps
const teamOne = () => {
  updateTeamName('.team-1-input', '.team-1-name')
}

const teamTwo = () => {
  updateTeamName('.team-2-input', '.team-2-name')
}

const team1Add = () => {
  addToTeam('.team-1-score')
}

const team2Add = () => {
  addToTeam('.team-2-score')
}

const team1Subtract = () => {
  subtractFromTeam('.team-1-score')
}

const team2Subtract = () => {
  subtractFromTeam('.team-2-score')
}

// event listeners
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-1-name').addEventListener('click', teamOne)

document.querySelector('.update-team-2-name').addEventListener('click', teamTwo)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', team1Add)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', team2Add)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', team2Subtract)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', team1Subtract)

document.querySelector('.reset').addEventListener('click', resetTheGame)

document.querySelector('.Round').addEventListener('click', nextRound)
