

import React, { useState } from "react";
import { View, TextInput, Button, Text, Modal } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
export default function App() {

const [modalVisible, setModalVisible] = useState(false);


const formSchema = Yup.object().shape({
name: Yup.string().required("Name is required"),
email: Yup.string().email("Invalid email").required("Email is required"),
});
return (
<View>

<Button title="Open Form" onPress={() => setModalVisible(true)} />

<Modal visible={modalVisible}>
<Formik
initialValues={{ name: "", email: "" }}
validationSchema={formSchema}
onSubmit={(values) => {
console.log(values); 
setModalVisible(false); 
}}
>
{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
<View>


<Text>Name:</Text>
<TextInput
placeholder="Enter name"
onChangeText={handleChange("name")}
onBlur={handleBlur("name")} 
value={values.name} 
/>
{touched.name && errors.name && <Text>{errors.name}</Text>}


<Text>Email:</Text>
<TextInput
placeholder="Enter email"
onChangeText={handleChange("email")} 
onBlur={handleBlur("email")} 
value={values.email} 
/>
{touched.email && errors.email && <Text>{errors.email}</Text>}


<Button onPress={handleSubmit} title="Submit" />

<Button onPress={() => setModalVisible(false)} title="Close" />
</View>
)}
</Formik>
</Modal>
</View>
);}
