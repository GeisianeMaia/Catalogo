const baseUrl = "http://a1c6859d6b04.ngrok.io";
const $buttonSign = document.querySelector(".button button");
const $form = document.querySelector(".form");

const userRegister = (config, callback) => {
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


$form.addEventListener("submit", function (event) {
  event.preventDefault();
});

$buttonSign.addEventListener("click", function () {
  const name = document.querySelector(".name input").value;
  const lastName = document.querySelector(".lastName input").value;
  const fantasyName = document.querySelector(".fantasyName input").value;
  const email = document.querySelector(".email input").value;
  const password = document.querySelector(".password input").value;
  const confirmPassword = document.querySelector(".confirmPassword input").value;
  const personalUrl = document.querySelector(".personalUrl input").value;

  const request = {
    method: "POST",
    body: {
      name,
      lastName,
      fantasyName,
      email,
      password,
      confirmPassword,
      personalUrl,
    },

    baseUrl: `${baseUrl}/user`,
  };
 
  userRegister(request, function(data){
    console.log(data);
  });
});
