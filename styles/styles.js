import { StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
    alignItems: 'stretch',
    justifyContent: 'center',        
  },
  content: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: colors.color3,
  },
  banner: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.color2
  },
  textContent: {
    textAlign: 'center',
    fontSize: 20,
  }, 
  logo: {
    width: 180,
    height: 180,
  }, 
  // settings
  settingsHeadBox: {
    flex: 0.2, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  settingsHeadBoxTitle: {
    fontSize: 30, padding: 8
  },
  settingsView: {
    flex: 0.2, 
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 340,
    justifyContent: 'center',    
  },
  settingsViewText: {
    fontSize: 15, marginBottom: 5
  }
});

export default styles;

