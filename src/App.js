import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordSimilar, setPasswordSimilar] = useState(true);

  const register = (e) => {
    checkPassword(e);
    async function postToDB() {
      await axios("http://localhost:8080/register", {
        firstName: fname,
        lastName: lname,
        mail: mail,
        password: password,
      })
        .then((response) => {
          console.log("dhsfjsdf");
          setTimeout(() => {
            e.preventDefault();
            console.log("hei martin");
            console.log(response);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const checkPassword = (e) => {
    if (password != repeatPassword) {
      setPasswordSimilar(false);
      e.preventDefault();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div
            className="column"
            style={{
              backgroundColor: "#1880D3",
              borderRadius: "10px 0px 0px 10px",
            }}
          >
            <h2 className="headline">Informasjon</h2>

            <p className="infoFont">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <button className="infoButton">Jeg har konto</button>
          </div>
          <div
            className="column"
            style={{
              backgroundColor: "white",
              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <h2 className="headline" style={{ color: "#1880D3" }}>
              Opprett bruker
            </h2>
            <form>
              <div className="form">
                <div className="inputFields">
                  <b>Fornavn</b>
                  <br></br>
                  <input
                    onChange={(e) => setFname(e.target.value)}
                    type="text"
                    id="fname"
                    name="fname"
                    size="25"
                  />
                </div>
                <div className="inputFields">
                  <b>Etternavn</b>
                  <br></br>
                  <input
                    onChange={(e) => setLname(e.target.value)}
                    type="text"
                    id="fname"
                    name="lname"
                    size="25"
                  />
                </div>
                <div className="inputFields">
                  <b>E-postadresse</b>
                  <br></br>
                  <input
                    onChange={(e) => setMail(e.target.value)}
                    type="text"
                    id="fname"
                    name="mail"
                    size="55"
                    required
                  />
                </div>

                <div className="inputFields">
                  <b>Passord</b>
                  <br></br>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    size="25"
                    required
                  />
                </div>
                <div className="inputFields">
                  <b>Gjenta passord</b>
                  <br></br>
                  <input
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    size="25"
                  />
                </div>
              </div>
              {passwordSimilar ? (
                <></>
              ) : (
                <p style={{ color: "red", fontSize: "12pt" }}>
                  Ulike passord, prøv igjen
                </p>
              )}
              <input type="checkbox" id="consents" name="consents" />
              <label for="consents" className="consents">
                Jeg godtar <a href="">Databehandlingsavtalen</a>
              </label>
              <br></br>
              <input
                className="submitButton"
                type="submit"
                value="Registrer"
                onClick={(e) => register(e)}
              ></input>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
