import {FaRegUser, FaMapMarkerAlt, FaRegCreditCard} from 'react-icons/fa'
import '../css/HeaderForm.css'

const HeaderForm = () => {
  return (
    <div id='order-form-container' className="container px-md-0" >
        <div id='steps' className="mb-md-3 pb-md-3">
            <div className="line"></div>
            <div className="step">
                <FaRegUser className='icon active'/>
                <p className="d-none d-md-block">Criação de conta</p>
            </div>
            <div className="step">
                <FaMapMarkerAlt className='icon active'/>
                <p className="d-none d-md-block">Endereço</p>
            </div>
            <div className="step">
                <FaRegCreditCard className='icon'/>
                <p className="d-none d-md-block">Pagamento</p>
            </div>

        </div>
    </div>
  )
}

export default HeaderForm