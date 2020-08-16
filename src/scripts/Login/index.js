const baseUrl = "http://a1c6859d6b04.ngrok.io";
const $button = document.querySelector(".button button");
const $form = document.querySelector('.form')

const userLogin = (config, callback) => {
  const { method, body, baseUrl } = config;

  const settings = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };
  console.log(settings);
  fetch(baseUrl, settings)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return callback(data);
    })
    .catch((err) => {
      return callback(err);
    });
};

$button.addEventListener("click", function () {
  const email = document.querySelector(".login input").value;
  const password = document.querySelector(".password input").value;

  const request = {
    method: "POST",
    body: {
      email,
      password,
    },

    baseUrl: `${baseUrl}/user/login`,
  };
  
  userLogin(request, (data) => {
    if(data.id){
      localStorage.setItem('user_id_catologo', data.id)
      window.location.href="/src/pages/productList.html"
    }
  });
});

$form.addEventListener('submit', function(event){
  event.preventDefault();
})

console.log(localStorage.getItem('user_id_catologo'));
