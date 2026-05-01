import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { Formik } from "formik";
export default function App() {

return (

<View>

<Formik
initialValues={{ name: "", email: "" }}
onSubmit={(data) => {
console.log(data);

}}

>

{({ handleChange, handleBlur, handleSubmit, data }) => (

<View>

<Text>Name</Text>

<TextInput

placeholder="Enter name"
onChangeText={handleChange("name")}
onBlur={handleBlur("name")}
value={data.name}

/>
<Text>Email</Text>

<TextInput
placeholder="Enter email"
onChangeText={handleChange("email")}
onBlur={handleBlur("email")}
value={data.email}

/>


< Button title="Submit" onPress={handleSubmit} />

</View>
)}
</Formik>
</View>

);
}