import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Assets/Styles/style.css"
import "./Assets/Styles/App.css"
import "./Assets/Styles/index.css"
import "./utils/i18n"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const lang = localStorage.getItem("i18nextLng")
if(lang && lang === "es") document.documentElement.lang = lang

ReactDOM.render(<App/>, document.getElementById("root"))

reportWebVitals()