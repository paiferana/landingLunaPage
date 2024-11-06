import React, { useState } from "react";
import './styles/Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", password: "" };

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Nome deve conter apenas letras e espaços.";
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
      valid = false;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      newErrors.password = "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Dados de registro:", formData);
    } else {
      console.log("Erro na validação do formulário");
    }
  };

  return (
    <div className="container">
      <h2>Registre-se agora</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="button2">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
