import { FloatingLabel, Form, Row, Col } from 'react-bootstrap'
import {useState, useRef} from 'react'
import Message from './Message'
import '../css/Form.css'


const MyForm = ({setToggleLoader}) => {

  const [cep, setCep] = useState('')
  const [address, setAddress] = useState({Rua:'', Numero:'', Cidade:'', Bairro:'', Estado:'inf'})
  const [showMessage, setShowMessage] = useState({CepErro: false, saveAddress: false})

  //refs
  const refCep = useRef('')
  const refStreet = useRef('')
  const refNumber = useRef('')
  const refComplement = useRef('')
  const refNeighborhood = useRef('')
  const refCity = useRef('')
  const refState = useRef('')


  

  const handleKeyUp = (e) => {
    const onlyNumbers = /[0-9]/

    if(!onlyNumbers.test(e.key)){
      e.preventDefault()
      return
    }

    setCep(e.target.value)    
  }

  const toggleDisableInput = (toggle) => {
    refStreet.current.disabled = toggle
    refNumber.current.disabled = toggle
    refComplement.current.disabled = toggle
    refNeighborhood.current.disabled = toggle
    refCity.current.disabled = toggle
    refState.current.disabled = toggle
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
      if (data.erro) {
        setShowMessage({...showMessage, CepErro: true})
        toggleDisableInput(true)
      } else {
        setAddress({Rua: data.logradouro, Bairro: data.bairro, Cidade:data.localidade, Estado: data.uf})
        toggleDisableInput(false)
      }
    },1000)
  }

  cep.length === 8 && getAddress(cep)

  const handleClick = (e) => {
    if(address.Numero === undefined){
      return
    }
    e.preventDefault()
    setToggleLoader(true)
    setTimeout(() => {
      setShowMessage({...showMessage, saveAddress: true})
      toggleDisableInput(true)
      setToggleLoader(false)
      setAddress({})
      refCep.current.value = ''
    }, 1500)
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
                  autoComplete='off'
                  placeholder='Digite seu CEP'
                  minLength={8}
                  maxLength={8}
                  name='cep'                 
                  onKeyUp={handleKeyUp}
                  ref={refCep}
                  
              
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
                  ref={refStreet}
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
                  disabled
                  value={address.Numero || ''}
                  onChange={e => setAddress({...address, Numero: e.target.value})}
                  name='numberAddress'
                  ref={refNumber}
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
                  disabled
                  ref={refComplement}
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
                  ref={refNeighborhood}
                  
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
                  ref={refCity}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId='floatingSelect' label='Estado'>
                <Form.Select className='shadow-none address-info' disabled ref={refState} value={address.Estado} onChange={(e) => setAddress({...address, Estado: e.target.value})}>
                  <option value="inf">Selecione um estado</option>
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
              <button type='submit' onClick={e => handleClick(e)}>Cadastrar</button>
            </div>            
          </Row>
        </form>
        {showMessage.CepErro && <Message title='Cep não encontrado!' message='Verifique seu cep e tente novamente' type={'danger'}/>}
        {showMessage.saveAddress && <Message title={'Endereço salvo!'} message='Você também pode adicionar um outro endereço alternativo para a sua entrega' type={'primary'}/>}
      </div>
    </div>
  )
}

export default MyForm