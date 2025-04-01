import { useState } from "react";
import './loginPage.scss'
const passwordRules = [
  { 
    description: "Пароль должен содержать хотя бы одну заглавную букву.",
    validate: (password) => /[A-Z]/.test(password)
  },
  { 
    description: "Пароль должен содержать хотя бы одну строчную букву.",
    validate: (password) => /[a-z]/.test(password)
  },
  { 
    description: "Пароль должен содержать хотя бы одну цифру.",
    validate: (password) => /\d/.test(password)
  },
  { 
    description: "Пароль должен содержать хотя бы один специальный символ (!@#$%^&*()).",
    validate: (password) => /[!@#$%^&*()]/.test(password)
  },
  { 
    description: "Длина пароля должна быть не менее 8 символов.",
    validate: (password) => password.length >= 8
  },
  { 
    description: "Длина пароля должна быть не более 20 символов.",
    validate: (password) => password.length <= 20
  },
  { 
    description: "Сумма всех цифр в пароле должна быть равна 20.",
    validate: (password) => {
      const digits = password.match(/\d/g);
      return digits ? digits.reduce((sum, digit) => sum + parseInt(digit), 0) === 20 : false;
    }
  },
  { 
    description: "Пароль не должен содержать пробелы.",
    validate: (password) => !/\s/.test(password)
  },
  { 
    description: "Пароль должен начинаться с буквы.",
    validate: (password) => /^[A-Za-z]/.test(password)
  },
  { 
    description: "Пароль должен заканчиваться цифрой.",
    validate: (password) => /\d$/.test(password)
  }
];

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRules.every((rule) => rule.validate(password))) {
        
        fetch(`http://172.20.10.5:8000/register/${login}+"228"+${password}`, {
            method: "GET",
            mode: 'no-cors',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(localStorage.setItem("regToken", login))
        .catch(error => console.error("Ошибка:", error));
    }
  }
  return (
    <div className="container">
      <h1>Введите пароль</h1>
      <input type="text" placeholder="Введите логин" 
      value={login} onChange={(e) => setLogin(e.target.value)}/>
      <input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>Отправить</button>
      <div className="rules-container">
        {passwordRules.map((rule, index) => (
          <div key={index} className={`rule ${rule.validate(password) ? "passed" : "failed"}`}>
            {rule.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordValidator;
