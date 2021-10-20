import { useState } from "react"
import { ConsultInfection } from "../Components/ConsultInfection"
import { FormInfection } from "../Components/FormInfection"
import { Navbar } from "../Components/Navbar"

export const Home = () => {
  const [registro, setRegistro] = useState(false)
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <FormInfection registro={registro} setRegistro={setRegistro} />
          </div>
          <div className="col-12 col-md-6">
            <ConsultInfection registro={registro} />
          </div>
        </div>
      </div>
    </>
  )
}
