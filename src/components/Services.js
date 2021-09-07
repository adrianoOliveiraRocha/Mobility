const axios = require('axios');
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as NetWork from 'expo-network';
// idLinha = 600
// idLogradouro = 1
const Services = {

  linhas: function() {
    return axios({
      method: 'get',
      url: 'http://gistapis.etufor.ce.gov.br:8081/api/linhas/',
    })
  },

  itinerario: function(idLinha) {
    // 601
    return axios({
      method: 'get',
      url: 'http://gistapis.etufor.ce.gov.br:8081/api/itinerario/' + idLinha
    })
  },

  logradouros: function() {
    return axios({
      method: 'get',
      url: 'http://gistapis.etufor.ce.gov.br:8081/api/logradouros/'
    })
  },

  horarios: function(idLinha, data) {
    // data: YYYYMMDD
    return axios({
      method: 'get',
      url: 'http://gistapis.etufor.ce.gov.br:8081/api/horarios/ '+ idLinha,
      params: {
        data: data
      }
    })
  },

  linhasDologradouro: function(idLogradouro) {
    return axios({
      method: 'get',
      url: 'http://gistapis.etufor.ce.gov.br:8081/api/LinhasDologradouro/' + idLogradouro
    })
  },

  getLines: async (callback) => {
    try {
      const linhas = await AsyncStorage.getItem('linhas');
      if(linhas !== null) {
        callback(null, linhas);
      } else {
        callback('Not found', null);
      }
    } catch (error) {
      callback(error, null);
    }
  },

  getInitial: async (callback) => {
    let updatingUsing = await AsyncStorage.getItem('updatingUsing');
      
    if(!updatingUsing) {
      await AsyncStorage.setItem('updatingUsing', '0');
      updatingUsing = 0;
    }
    
    callback(updatingUsing);

  },

  update: async (callback) => {
    let updatingUsing = await AsyncStorage.getItem('updatingUsing');
      
    if(!updatingUsing) {
      await AsyncStorage.setItem('updatingUsing', '0');
      updatingUsing = 0;
    }
  }, 

}

module.exports = Services;