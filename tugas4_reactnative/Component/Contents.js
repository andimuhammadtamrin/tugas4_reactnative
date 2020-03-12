import React,{Component} from 'react'
import {View} from 'react-native'

import {
  Container,
  Header,
  Content,
  Form,
  Label,
  Left,
  Body,
  Right,
  Title,
  Item,
  Input,
  Text,
  Picker,

  Button

} from 'native-base';

export default class Contents extends Component {
  constructor(props){
    super(props);
      this.state={
        perhitungan:0,
        inputan1:"",
        inputan2:"",
        operator:""

      }
  }
  handleInput1 = (events)=>{
    this.setState({inputan1:events});
  }

  handleInput2 = (events)=>{
    this.setState({inputan2:events});
  }

  handletambah =()=>{
    this.setState({
      operator:"+"
    });


  }

  handlekurang =()=>{
    this.setState({
      operator:"-"
    })
  }

  handlebagi =()=>{
    this.setState({
      operator:"/"
    })
  }

  handlekali =()=>{
    this.setState({
      operator:"*"
    })
  }
  handleperhitungan1 =()=>{

    const inputan1 = parseFloat(this.state.inputan1);
    const inputan2 = parseFloat(this.state.inputan2);
    const operator = this.state.operator;
    var perhitungan;
    switch (operator){
      case'+':
          perhitungan = inputan1 + inputan2;
          break;
      case'-':
          perhitungan = inputan1 - inputan2;
          break;
      case'/':
          perhitungan = inputan1 / inputan2;
          break;
      case'*':
          perhitungan = inputan1 * inputan2;
          break;
    }
    this.setState({
      perhitungan
    });

  }


  render(){
    return(
      <Container>
          <Header style={{backgroundColor:'#03fc7b'}}>
            <Title style={{marginTop:12,color:'black'}}>KALKULATOR REACT NATIVE</Title>
          </Header>
          <Content>
            <Form>
              <Item>
                <Input
                  onChangeText={this.handleInput1}
                  placeholder="Masukkan Angka"
                  keyboardType="numeric"
                  value = {this.state.inputan1}
                />
              </Item>
              <Text style={{textAlign:'center',fontSize:40,marginTop:20,marginBottom:15,color:'blue'}}>{this.state.operator}</Text>
              <Item>
                <Input
                  onChangeText={this.handleInput2}
                  placeholder="Masukkan Angka"
                  keyboardType="numeric"
                  value = {this.state.inputan2}
                  />
              </Item>

              <Item >
                <Text style={{fontSize:40,marginLeft:155,marginBottom:20,marginTop:20}}>{this.state.perhitungan}</Text>
              </Item>
            </Form>
            <Text>Operator</Text>
            <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between',marginLeft:20,marginRight:10}}>

                <Button rounded primary>
                  <Text value="+" onPress={this.handletambah}>+</Text>
                </Button>

                <Button rounded primary>
                  <Text value="-" onPress={this.handlekurang}>-</Text>
                </Button>

                <Button rounded primary>
                  <Text value="/" onPress={this.handlebagi}>/</Text>
                </Button>

                <Button rounded primary >
                  <Text value="*" rounded primary onPress={this.handlekali}>*</Text>
                </Button>

                <Button rounded success>
                  <Text onPress={this.handleperhitungan1}>Hitung</Text>
                </Button>
          </View>

          </Content>

      </Container>



    )
  }
}
