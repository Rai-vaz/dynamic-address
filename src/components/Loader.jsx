import { Spinner } from "react-bootstrap";
import '../css/Loader.css'

const Loader = () => {

  return (
    <div className="container-loader">
      <Spinner animation="border" variant="primary"/>
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Loader