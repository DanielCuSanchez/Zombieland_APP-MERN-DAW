import { useEffect, useState } from "react"
import { getAllStates, postInfection } from './../services/index';

export const FormInfection = ({ registro, setRegistro }) => {
  const [states, setStates] = useState([])
  const [form, setForm] = useState({
    nombre: '',
    id_estado: 0
  });
  useEffect(() => {
    const getStates = async () => {
      const response = await getAllStates()
      console.log(response.states)
      setStates(response.states)
    }
    getStates()
  }, [])

  const handlerChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === 'id_estado'
          ? Number(e.target.value)
          : e.target.value
    })

  }
  console.log(form)
  const handlerSubmit = async (e) => {
    e.preventDefault()
    if (form.id_estado !== null) {
      try {
        setRegistro(!registro)
        await postInfection(form)
        setForm({
          nombre: '',
          id_estado: null
        })
        alert("Registro realizado")
      } catch (error) {
        console.log(error)
      }
    }
    else {
      alert("Selecciona un estado")
    }
  }

  return (
    <>
      <h2>
        Registro de infecciones
      </h2>
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del zombie</label>
          <input type="text" className="form-control" name="nombre" onChange={handlerChange} value={form.nombre} required />
        </div>
        <select className="form-select" name="id_estado" onChange={handlerChange} required >
          <option defaultValue>Selecciona un estado</option>
          {
            states.map(s => {
              return (
                <option key={s.nombre} value={s.id}>{s.nombre}</option>
              )
            })
          }
        </select>
        <button type="submit" className="btn btn-primary mt-4">Registrar</button>
      </form>
    </>
  )
}
