import React, { useState } from "react";
import { View, Text, Button, Modal, TouchableOpacity } from "react-native";

export default function App() {
const [modalVisible, setModalVisible] = useState(false);

return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Button title="Open Styled Modal" onPress={() => setModalVisible(true)} />
<Modal visible={modalVisible}
transparent={true}  
        
>
      
        <View style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center"
        }}>
          
          <View style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            width: "80%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            elevation: 5
          }}>
           
<Text style={{ textAlign: "center", marginBottom: 20 }}>
               modal with internal styling
</Text>

<Button
style={{
backgroundColor: "red",
padding: 10,
borderRadius: 5,
 width: "50%",
alignItems: "center"
 }}
 onPress={() => setModalVisible(false)}
 >
<Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
</Button>
</View>
</View>
</Modal>
</View>
);
}