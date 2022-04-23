// Example fetch using starwars API
document.querySelector('button').addEventListener('click', getFetch)

//   playText(textInput.value)

// function playText(text) {
//   new utterance = new SpeechSynthesisUtterance (text)
//   utterace.rate = speedInput.value || 1
//   speechSynthesis.speak(utterance)
// }

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://swapi.dev/api/people/?search=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)
        data.results.forEach ( obj => {
          console.log(obj.name)
          const li = document.createElement('li')
          li.textContent = obj.name
          document.querySelector('ul').appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// document.querySelector('button').addEventListener('click', getFetch)
// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://swapi.dev/api/planets/${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }