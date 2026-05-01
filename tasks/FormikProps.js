
import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "./tasks/glolStyles"; 

export default function App() {
return (
      <View style={globalStyles.container}>
    
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values) => {
          console.log(values);
          
        }}
      >
        {(props) => (  
          <View>
          
          <TextInput
              style={globalStyles.input}
              placeholder="Enter Name"
              onChangeText={props.handleChange("name")}
            value={props.values.name} 
            />

            
            <TextInput
              style={globalStyles.input}
              placeholder="Enter Email"
            
              onChangeText={props.handleChange("email")}
              value={props.values.email}

            />

            <View style={globalStyles.buttonContainer}>
              <Button title="Submit" onPress={props.handleSubmit} />
            </View>
          </View>
          
        )}
         </Formik>
         </View>
          );
          }