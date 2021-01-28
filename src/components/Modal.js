import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import ARGFlag from "./../Assets/Flags/argentina.png"
import USAFlag from "./../Assets/Flags/united-states.png"

const Modal = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        document.documentElement.lang = lng
        i18n.changeLanguage(lng)
        closeModal()
    }
    
    function closeModal(){
        if(document.getElementById("btnModal")){
            const modal = document.getElementById("tvesModal")
            const body = document.getElementsByTagName("body")[0]
            modal.style.display = "none"
            body.style.position = "inherit"
            body.style.height = "auto"
            body.style.overflow = "visible"
        }
    }
    
    window.onclick = function(event){
        const modal = document.getElementById("tvesModal")
        if(event.target === modal) closeModal()
    }
    
    return (
        <div id="tvesModal" className="modalContainer">
            <div className="modal-content">
                <h2>{t('changeLanguage')}</h2>
                <Button
                    id="btnModal"
                    className="fork-btn-inner"
                    onClick={()=>changeLanguage("en")}
                >
                    <img src={USAFlag} alt="English" style={{ width: "25px" }}/>
                </Button>
                <br/>
                <Button
                    id="btnModal"
                    className="fork-btn-inner"
                    onClick={()=>changeLanguage("es")}
                >
                    <img src={ARGFlag} alt="Español" style={{ width: "25px" }}/>
                </Button>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Modal