import { Form, Row, Col, Button } from 'react-bootstrap'
import '../css/Form.css'


const MyForm = () => {
  return (
    <div className="container">
        <h2>Cadastre o seu endereço</h2>
        <p>preencha os campos para podermos enviar os seus produtos</p>
        <div className='order-form-container'>
          <form>
            <Row className='mb-3'>
              <Form.Floating className='input'>
                <Form.Control
                  id='cep'
                  type='text'
                  placeholder='Digite seu cep'
                  autoComplete='off'
                  minLength={8}
                  maxLength={8}
                  
                />
                <label htmlFor='cep'>Digite seu cep</label>
              </Form.Floating>
            </Row>
            <Row className='mb-3'>
              <Col md={6}>
                <Form.Floating className='input'>
                  <Form.Control
                    id='rua'
                    type='text'
                    placeholder='Rua'
                    autoComplete='off'
                    disabled
                    required
                    name='address'
                  />
                  <label htmlFor='cep'>Rua</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating className='input'>
                  <Form.Control
                    id='numero'
                    type='number'
                    placeholder='Digite o número da sua residência'
                    autoComplete='off'
                    required
                    name='numberAddress'
                  />
                  <label htmlFor='numero'>Digite o número da sua residência</label>
                </Form.Floating>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col md={6}>
                <Form.Floating className='input'>
                  <Form.Control
                    id='complement'
                    type='text'
                    placeholder='Complement'
                    autoComplete='off'
                    name='complement'
                  />
                  <label htmlFor='complement'>Complemento</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating className='input'>
                  <Form.Control
                    id='neighborhood'
                    type='number'
                    placeholder='Bairro'
                    autoComplete='off'
                    required
                    bairro='neighborhood'
                    disabled
                  />
                  <label htmlFor='neighborhood'>Bairro</label>
                </Form.Floating>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col md={6}>
                <Form.Floating className='input'>
                  <Form.Control
                    id='city'
                    type='text'
                    placeholder='Cidade'
                    autoComplete='off'
                    name='city'
                    disabled
                  />
                  <label htmlFor='complement'>Cidade</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Select id='input' disabled>
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
              </Col>
            </Row>
            <Row>
              <div className='d-flex justify-content-end'>
                <Button as='input' type='submit' value='Cadastrar'/>
              </div>
            </Row>
          </form>
          
        </div>
    </div>
  )
}

export default MyForm