import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import { Container, Content, Header, Left, Icon } from 'native-base';

import DashboardScreen from '../screens/App/DashboardScreen';
import CluesScreen from '../screens/App/Clues/CluesScreen';
import CluesDetalleScreen from '../screens/App/Clues/CluesDetalleScreen';
import IncidenciasScreen from '../screens/App/Incidencias/IncidenciasScreen';
import IncidenciaDetalleScreen from '../screens/App/Incidencias/IncidenciaDetalleScreen';
import IncidenciaCameraScreen from '../screens/App/Incidencias/IncidenciaCameraScreen';
import EstadoFuerzaScreen from '../screens/App/EstadoFuerzaScreen';
import CensoMujeresScreen from '../screens/App/Censo/CensoMujeresScreen';
import CensoMujeresDetalleScreen from '../screens/App/Censo/CensoMujeresDetalleScreen';
import CensoMujeresNuevoScreen from '../screens/App/Censo/CensoMujeresNuevoScreen';
import RadioButtonScreen from '../screens/App/RadioButtonScreen';

const StackRadioButton = createStackNavigator({
	RadioButton: {
		screen: RadioButtonScreen,
    navigationOptions: () => ({
      header: null,
      title: 'RadioButton',
      drawerLockMode: 'locked-closed'
    })
	},
});

const StackDashboard = createStackNavigator({
	Dashboard: {
		screen: DashboardScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Dashboard',
      drawerLockMode: 'locked-closed'
    })
	},
});

const StackClues = createStackNavigator({
	Clues: {
		screen: CluesScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Clues',
      drawerLockMode: 'locked-closed'
    })
	},
  CluesDetalle: {
		screen: CluesDetalleScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Clues Detalle',
      drawerLockMode: 'locked-closed',
    })
	},
});

const StackIncidencias = createStackNavigator({
	Incidencias: {
		screen: IncidenciasScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Incidencias',
      drawerLockMode: 'locked-closed'
    })
  },
  IncidenciaDetalle: {
		screen: IncidenciaDetalleScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Incidencia Detalle',
      drawerLockMode: 'locked-closed',
    })
	},
  IncidenciaCamera: {
		screen: IncidenciaCameraScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Tomar foto',
      drawerLockMode: 'locked-closed',
    })
	}
});

const StackEstadoFuerza = createStackNavigator({
	EstadoFuerza: {
		screen: EstadoFuerzaScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Estado de Fuerza',
      drawerLockMode: 'locked-closed',
    })
	}
});

const StackCensoMujeres = createStackNavigator({
	CensoMujeres: {
		screen: CensoMujeresScreen,
    navigationOptions: () => ({      
      header: null,
      title: 'Censo de Mujeres',
      drawerLockMode: 'locked-closed',
    })
  },
  CensoMujeresDetalle: {
		screen: CensoMujeresDetalleScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Censo Detalle',
      drawerLockMode: 'locked-closed',
    })
	},
  CensoMujeresNuevo: {
		screen: CensoMujeresNuevoScreen,
    navigationOptions: () => ({
      header: null,
      title: 'Registrar Persona',
      drawerLockMode: 'locked-closed',
    })
	}
});

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={{ backgroundColor: '#3F51B5' }}>
        <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='person' style={{ color: 'white' }} />
          <Text style={{ marginLeft: 5, fontSize: 22, color: 'white' }}>Bienvenido</Text>
        </Left>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
    </Container>
  );
};

export default AppDrawer = createDrawerNavigator({
  ScreenDashboard: StackDashboard,
  ScreenClues: StackClues,
  ScreenIncidencias: StackIncidencias,
  ScreenEstadoFuerza: StackEstadoFuerza,
  ScreenCensoMujeres: StackCensoMujeres,
  ScreenRadioButton: StackRadioButton
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});
