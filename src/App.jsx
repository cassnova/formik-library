import { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  // const [email, setEmail] = useState("");
  // const [discordId, setDiscordId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  const [formEnviado, setFormEnviado] = useState(false);

  return (
    <div className="App">
      <Formik
        initialValues={{
          // email: "daniel.rojascasanova@gmail.com",
          // discordId: "309536294017433601",
          email: "",
          discordId: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setFormEnviado(true);
          setInterval(() => {
            setFormEnviado(false);
          }, 3000);
          console.log("Formulario enviado");
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.email) {
            // console.log("Ingresa los datos");
            errores.email = "Por favor ingresa el email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede tener letras, numeros, puntos y guones bajos";
          }

          if (!valores.discordId) {
            // console.log("Ingresa los datos");
            errores.discordId = "Por favor ingresa el Discord ID";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.discordId)) {
            errores.discordId = "El Discord ID solo puede tener letras";
          }

          return errores;
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="discordId">Discord ID</label>
              <input
                type="text"
                name="discordId"
                id="discordid"
                value={values.discordId}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.discordId && errors.discordId && (
                <div>{errors.discordId}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
            {formEnviado && <p>Mensaje enviado con exito</p>}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
