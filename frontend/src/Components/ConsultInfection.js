import { useEffect, useState } from "react"
import { getAllInfections } from "../services"

export const ConsultInfection = ({ registro }) => {
  const [infections, setInfections] = useState([])
  const [inFilter, setInFilter] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    const getInfections = async () => {
      const response = await getAllInfections()
      console.log(response)
      setInfections(response.infections)
      setInFilter(response.infections)

      setCount(response.count)
    }
    getInfections()
  }, [registro])



  const handlerFilter = (e) => {
    if (e.target.name === "Todos") {
      setInFilter(infections)
      setCount(infections.length)
    } else {
      const filtered = infections.filter(i => i.estado === e.target.name)
      setInFilter(filtered)
      setCount(filtered.length)
    }
  }


  return (
    <>
      <h2>Consultas</h2>

      <div className="container">
        <div className="row">
          <button className="btn btn-primary w-25 m-2" name="Todos" onClick={handlerFilter}>
            Todos
          </button>
          <button className="btn btn-primary w-25 m-2" name="Desmayo" onClick={handlerFilter}>
            Desmayado
          </button>
          <button className="btn btn-primary w-25 m-2" name="Infeccion" onClick={handlerFilter}>
            Infeccion
          </button>
          <button className="btn btn-primary w-25 m-2" name="Violencia" onClick={handlerFilter}>
            Violencia
          </button>
          <button className="btn btn-primary w-25 m-2" name="Transformacion" onClick={handlerFilter}>
            Transformacion
          </button>
          <button className="btn btn-primary w-25 m-2" name="Desorientacion" onClick={handlerFilter}>
            Desorientacion
          </button>
        </div>
        <div className="row justify-content-center text-center">
          <h4>
            Cantidad de registros {count}
          </h4>
          {
            inFilter.map(infection => {
              return (
                <div className="col-12 col-md-4">
                  <div key={infection.id} className="card">

                    <div className="card-body">
                      <p>
                        {infection.nombre}
                      </p>
                      <div className={`alert alert-${typeInfection(infection.estado)}`} role="alert">
                        {infection.estado}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
const typeInfection = (type) => {

  switch (type) {
    case "Infeccion":
      return "primary"
    case "Desorientacion":
      return "secondary"
    case "Violencia":
      return "danger"
    case "Desmayo":
      return "warning"
    case "Transformacion":
      return "dark"
    default:
      return "primary"
  }
}
