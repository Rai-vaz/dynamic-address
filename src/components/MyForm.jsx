import { FloatingLabel, Form, Row, Col } from 'react-bootstrap'
import {useState, useRef} from 'react'
import Message from './Message'
import '../css/Form.css'


const MyForm = ({setToggleLoader}) => {

  const [cep, setCep] = useState('')
  const [address, setAddress] = useState({Rua:'', Cidade:'', Bairro:'', Estado:''})
  const [showMessage, setShowMessage] = useState(false)

  //refs
  /*const refCep = useRef('')
  const refRua = useRef('')
  const refNumero = useRef('')
  const RefComplemento = useRef('')
  const refBairro = useRef('')
  const refCity = useRef('')
  const refState = useRef('')*/


  

  const handleKeyUp = (e) => {
    const onlyNumbers = /[0-9]/

    if(!onlyNumbers.test(e.key)){
      e.preventDefault()
      return
    }

    setCep(e.target.value)    
  }

  const getAddress = async (cepNumber) => {

    refCep.current.blur()  
    const apiUrl = `https://viacep.com.br/ws/${cepNumber}/json/`
    const res = await fetch(apiUrl)
    setToggleLoader(true)
    const data = await res.json()    
    setCep('')  
    setTimeout(() => {
      setToggleLoader(false)
      data.erro ? setShowMessage(true) : setAddress({Rua: data.logradouro, Bairro: data.bairro, Cidade:data.localidade, Estado: data.uf}) 
    },1000)    
  }

  cep.length === 8 && getAddress(cep)

  const handleClick = () => {
    
  }

  

  return (
    <div className="container">
      <h2>Cadastre o seu endereço</h2>
      <p>preencha os campos para podermos enviar os seus produtos</p>
      <div id='form-container'>
        <form>
          <Row className='mb-3'>
            <Col>
              <FloatingLabel controlId='cep' label='Digite seu CEP'>
                <Form.Control
                  className='shadow-none address-info'
                  type='text'
                  placeholder='Digite seu CEP'
                  autoComplete='off'
                  minLength={8}
                  maxLength={8}
                  name='cep'
                  onKeyUp={handleKeyUp}
              
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={6} className='mb-3'>
              <FloatingLabel controlId='rua' label='Rua'>
                <Form.Control
                  className='address-info'
                  type='text'
                  placeholder='Rua'
                  autoComplete='off'
                  disabled
                  required
                  name='address'
                  value={address.Rua || ''}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId='number' label='Digite o número da sua residência'>
                <Form.Control
                  className='shadow-none address-info'
                  type='number'
                  placeholder='Digite o número da sua residência'
                  autoComplete='off'
                  required
                  name='numberAddress'
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={6} className='mb-3'>
              <FloatingLabel controlId='complement' label='Complemento'>
                <Form.Control
                  className='shadow-none address-info'
                  type='text'
                  placeholder='Complemento'
                  autoComplete='off'
                  name='complement'
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId='neighborhood' label='Bairro'>
                <Form.Control
                  className='address-info'
                  type='text'
                  placeholder='Bairro'
                  autoComplete='off'
                  required
                  name='neighborhood'
                  disabled
                  value={address.Bairro || ''}
                  
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col md={6} className='mb-3'>
              <FloatingLabel controlId='city' label='Cidade'>
                <Form.Control
                  className='address-info'
                  type='text'
                  placeholder='Cidade'
                  autoComplete='off'
                  name='city'
                  disabled
                  value={address.Cidade || ''}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId='floatingSelect' label='Estado'>
                <Form.Select className='shadow-none address-info' disabled value={address.Estado}>
                  <option value="">Selecione um estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>        
            <div className='btn-register'>
              <button type='submit' onClick={handleClick}>Cadastrar</button>
            </div>            
          </Row>
        </form>
        {showMessage && <Message title='Cep não encontrado!' message='Verifique seu cep e tente novamente'/>}
      </div>
    </div>
  )
}

export default MyForm