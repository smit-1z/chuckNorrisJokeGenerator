document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();

  const number = document.querySelector('input[type = "number"]').value;
  // console.log(`'Jokes' ${number}`);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let op = '';
      if (response.type === 'success') {
        response.value.forEach((joke) => {
          op += `<li>${joke.joke}</li>`;
        });
      } else {
        op += "<li>Something's wrong";
      }
      document.querySelector('.jokes').innerHTML = op;
    }
  };
  xhr.send();
}
