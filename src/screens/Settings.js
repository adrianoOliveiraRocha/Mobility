import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './../../styles/styles';
import RadioForm from 'react-native-simple-radio-button';
import { Entypo } from '@expo/vector-icons';
import colors from './../../styles/colors';
import MyBusContext from './../context/MyBusContext';

const radio_props = [
  {label: 'Somente WI-FI', value: 0},
  {label: 'WI-FI e Dados Móveis', value: 1},
];

export default function Settings(props) {  

  const {state, dispatch} = useContext(MyBusContext);
    
  function setUpdatingUsing(value) {
    dispatch({
      type: 'action1',
      payload: value
    })
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        
        <View style={styles.settingsHeadBox}>
          <Entypo name="cog" size={40} color={colors.color2} />
          <Text style={styles.settingsHeadBoxTitle}>Configurações</Text>                    
        </View>

        <View style={styles.settingsView}>
          <Text style={styles.settingsViewText}>Que tipo de conexão posso usar para atualizar informações?</Text>
          <RadioForm 
            radio_props={radio_props}
            initial={state.settings.updateUsing}
            onPress={(value) => {setUpdatingUsing(value)}}
          />    
        </View> 

        <View style={styles.settingsView}>
          <Text>Outra Configuração</Text>             
        </View> 

      </View>
      
      <View style={styles.banner}>
        <Text>Banner</Text>
      </View>  

    </View>
  );
}
