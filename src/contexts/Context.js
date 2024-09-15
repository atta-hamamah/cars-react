import React from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [formData, setFormData] = React.useState(
        {
            sellerName: "", email: "", phone: ""
            , carType: "", price: "",
            negotiation: true, extraInfo: ""
        })
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    //image input state
    const [image, setImage] = React.useState(null);
    //silling form submitting
    const [subm, setSubm] = React.useState(false)
    // login info
    const [val, setVall] = React.useState('')
    function change(e) {
        setVall(e.target.value)
    }
    const [user, setUser] = React.useState(false)
    const showUser = () => {
        setUser((prev) => !prev)
    }
    // show notifications
    const [notes, setNotes] = React.useState(false)
    const showNotes = () => {
        setNotes((prev) => !prev)
    }
    // change the clicked element bg
    const [iconBg, setBg] = React.useState({ dashboard: true })
    function changeBg(item) {
        setBg({ [item]: true })
    }
    //booking form info
    const [bookData, setbookData] = React.useState(
        {
            carStatus: "",
            carType: ""
        })
    function bookChange(event) {
        setbookData(prev => {
            const { name, value } = event.target
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <Context.Provider value={{
            iconBg, changeBg, val, change, user
            , showUser, notes, showNotes, formData, handleChange
            , bookData, bookChange, subm, setSubm, image, setImage
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }