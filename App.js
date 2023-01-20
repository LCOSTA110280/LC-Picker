import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import {Picker} from '@react-native-community/picker';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      pizza:0,
      pizzas:[{key:1,nome:"Calabresa",valor:39.90},
      {key:2,nome:"Mussarela",valor:19.90},
      {key:3,nome:"Marguerita",valor:29.90},
      {key:4,nome:"Brigadeiro",valor:69.90},
      {key:5,nome:"Portuguesa",valor:49.90},
      ]
    }
    
  }

  render(){  

    let pizzasItem =this.state.pizzas.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}></Picker.Item>
    })

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
      selectedValue={this.state.pizza}
      onValueChange={(itemValue,itemIndex)=> this.setState({pizza:itemValue})}
      >
        {pizzasItem}
      </Picker>

      <Text style={styles.pizza}>Você escolheu pizza: {this.state.pizzas[this.state.pizza].nome}</Text>
      <Text style={styles.pizza}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>


      <Text style={styles.pizza}>{this.state.pizza}</Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  logo:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  pizza:{
    marginTop:20,
    textAlign:'center',
    fontSize:30,
  }
    
})

export default App;


