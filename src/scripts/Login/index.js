const baseUrl = "http://a1c6859d6b04.ngrok.io";

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

const email = document.querySelector(".login input").value;
const password = document.querySelector(".password input").value;

const request = {
  method: "POST",
  body: {
    email,
    password
    // "name": "Marcos",
	// "lastName": "Maia",
	// "fantasyName": "Marcos Temperos",
	// "email": "maroaas@gmail.com",
	// "password": "123456",
	// "confirmPassword": "123456",
	// "personalUrl": "marcos-temperos"
  },

  baseUrl: `${baseUrl}/user/login`,
};
userLogin(request, (data) => {
  console.log(data);
});

// const userLogin;

// userLogin.post('/login', function(resquest, response){
//     response.render('formulario enviado')
// });
