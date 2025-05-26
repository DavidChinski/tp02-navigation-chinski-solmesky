import * as React from "react";
import { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>esta es la HOME</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ScreenA2")}>
        <Text style={styles.text}>Ir a HOME 2</Text>
      </TouchableOpacity>
    </View>
  );
}

function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME 2</Text>
    </View>
  );
}

function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>esta es el BUSCADOR</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ScreenB2")}>
        <Text style={styles.text}>Ir a BUSCADOR 2</Text>
      </TouchableOpacity>
    </View>
  );
}
function ScreenB2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>BUSCADOR 2</Text>
    </View>
  );
}

function ScreenC1() {
  const navigation = useNavigation();
  const [usuario, SetearUsuario] = useState("");
  const [tel, SetearTel] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.Bar}>
        <Text style={styles.barText}>Log in</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          onChangeText={(text) => SetearUsuario(text)}
          placeholder="Usuario"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => SetearTel(text)}
          placeholder="Telefono"
          style={styles.input}
          keyboardType="numeric" // para teclado numérico
          maxLength={14} // opcional, ejemplo: máximo 10 dígitos
        />

        <Pressable
          onPress={() =>
            navigation.navigate("ScreenC2", { user: usuario, tel: tel })
          }
          color="#FFFFFF"
          style={styles.boton}
        >
          <Text style={styles.botonTexto}>INGRESAR</Text>
        </Pressable>
      </View>
    </View>
  );
}
function ScreenC2({ route, navigation }) {
  const { user, tel } = route.params;

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Usuario: {user}</Text>
      <Text style={styles.text}>Teléfono: {tel}</Text>
    </View>
  );
}

function ScreenD1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>esta es la CONFIGURACION</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ScreenD2")}>
        <Text style={styles.text}>Ir a CONFIGURACION 2</Text>
      </TouchableOpacity>
    </View>
  );
}
function ScreenD2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>CONFIGURACION 2</Text>
    </View>
  );
}

//
// Creación de los stacks
//
const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}
function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackANavigator}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Buscador"
        component={StackBNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={StackCNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={StackDNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Envolviendo la aplicación en el NavigationContainer
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    padding: 10,
    fontSize: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  Bar: {
    width: "100%",
    height: 120,
    backgroundColor: "#0000FF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  main: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
  },
  text: {
    padding: 10,
  },
  input: {
    width: 380,
    height: 70,
    borderRadius: 8,
    borderWidth: 2,
    margin: 5,
    borderColor: "#0000FF",
    color: "black",
  },
  barText: {
    color: "white",
    fontSize: 20,
    fontWeight: "black",
  },
  boton: {
    width: 380,
    height: 70,
    borderRadius: 8,
    marginTop: 43,
    marginBottom: 15,
    backgroundColor: "#0000FF",
    justifyContent: "center",
    alignItems: "center",
  },
  botonTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "condensed",
  },
});
