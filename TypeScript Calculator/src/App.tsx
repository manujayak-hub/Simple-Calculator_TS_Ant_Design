import { useState } from 'react'
import { Button, Space, Col, Row, Flex, Input } from 'antd';
import Layout from 'antd/es/layout/layout';


function App() {
  const [display, setDisplay] = useState<string>(" ")

  const clearall = () => {
    setDisplay("")
  }

  const addToDisplay = (input: String) => {

    setDisplay((previous) => previous + input)

    // using arrow function without curly braces it will return
    // with curly braces it will retun when function is called
    // previous is current state before the updtae it take it as parameter
    // previous + input concatinate   
  }
  const calculate = () => {
    try {
      setDisplay((previous) => eval(previous.toString()))
    } catch (error) {
      setDisplay('Error' + (error as Error).message)
    }
  }

  const backspace = ()=>{
    setDisplay((previos) => previos.slice(0,-1))
  }
  

  return (
    <>
      <div>
        <Layout style={{ height: 400, width: 300, justifyContent: 'center', background: '#1A1818', borderRadius: 20 }}>
          <div >
            
            <Input variant='borderless' size="small" style={{ marginLeft: 25, marginRight: 25, marginBottom: 10,  height: 80, width: 250, textAlign: 'right', fontSize: 24, fontFamily: 'monospace', color: 'white' }} value={display} readOnly />
          </div>
          <Flex justify='center' align='center' style={{ marginLeft: 10, marginRight: 10 }}>

            <div>
              <Space>
                <Row >
                  <Space direction="vertical">
                    <Col span={7} ><Button style={{ width: 250, marginLeft:25,marginRight:25,marginBottom: 8, background: '#999999', color: 'black' }} size='large' type="primary" onClick={() => { clearall() }}>C</Button></Col>
                  </Space>
                </Row>
              </Space>
              <Space wrap align='center' >



                <Row  >
                  <Space direction="vertical"  >
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black' ,width:57,marginLeft:25}} type="primary" onClick={() => { addToDisplay('7') }}>7</Button></Col>
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black' ,width:57,marginLeft:25}} type="primary" onClick={() => { addToDisplay('4') }}>4</Button></Col>
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black' ,width:57,marginLeft:25}} type="primary" onClick={() => { addToDisplay('1') }}>1</Button></Col>
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black',width:57,marginLeft:25 }} type="primary" onClick={() => { addToDisplay('0') }}>0</Button></Col>
                  </Space>
                </Row>


                <Row >
                  <Space direction="vertical">
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black',width:57 }} type="primary" onClick={() => { addToDisplay('8') }}>8</Button></Col>
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black',width:57 }} type="primary" onClick={() => { addToDisplay('5') }}>5</Button></Col>
                    <Col span={7} ><Button size='large' style={{ background: 'white', color: 'black' ,width:57}} type="primary" onClick={() => { addToDisplay('2') }}>2</Button></Col>
                    <Col span={7}><Button style={{ width: 57, background: '#FFAA30 ', color: 'black' }} size='large' type="primary" onClick={() => { calculate() }}>=</Button></Col>
                  </Space>
                </Row>


                <Row >
                  <Space direction="vertical">
                    <Col span={7}><Button size='large' style={{ background: 'white', color: 'black',width:57 }} type="primary" onClick={() => { addToDisplay('9') }}>9</Button></Col>
                    <Col span={7}><Button size='large' style={{ background: 'white', color: 'black' ,width:57}} type="primary" onClick={() => { addToDisplay('6') }}>6</Button></Col>
                    <Col span={7}><Button size='large' style={{ background: 'white', color: 'black' ,width:57}} type="primary" onClick={() => { addToDisplay('3') }}>3</Button></Col>
                    <Col span={7}><Button style={{ width: 57, background: 'orange', color: 'black' }} size='large' type="primary" onClick={() => { addToDisplay('+') }}>+</Button></Col>
                  </Space>
                </Row>
                <Row >
                  <Space direction="vertical">
                  <Col span={7}><Button size='large' style={{ background: 'orange', color: 'black',width:57 }} type="primary" onClick={() => { backspace() }}>{"<<"}</Button></Col>
                    <Col span={7}><Button size='large' style={{ background: 'orange', color: 'black',width:57 }} type="primary" onClick={() => { addToDisplay('*') }}>*</Button></Col>
                    <Col span={7}><Button size='large' style={{ background: 'orange', color: 'black' ,width:57}} type="primary" onClick={() => { addToDisplay('/') }}>/</Button></Col>
                    <Col span={7}><Button size='large' style={{ background: 'orange', color: 'black' ,width:57}} type="primary" onClick={() => { addToDisplay('-') }}>-</Button></Col>


                  </Space>
                </Row>
                


              </Space>


            </div>
          </Flex>
        </Layout>
      </div>

    </>
  )
}

export default App
