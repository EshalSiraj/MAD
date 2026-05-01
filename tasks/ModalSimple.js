import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-native";

export default function App() {
const [modalVisible, setModalVisible] = useState(false);

return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<Button
title="Open Modal"
onPress={() => setModalVisible(true)}
/>
<Modal visible={modalVisible}>
<View>
<Text>This is a modal popup!</Text>
<Button
title="Close Modal"
onPress={() => setModalVisible(false)}
/>
</View>
</Modal>
</View>
);
}

import React , {useState} from "react";
import{View,Text,Button,Modal} from "react-native";

export default function App(){

    const [modalVisible,setModalVisible]=useState(false);

    return(

        <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
            <Button title="Open" onPress={()=> setModalVisible(true)}/>
                <Modal visible={modalVisible}>
                <View>
                    <Text>This is a modal</Text>
                    <Button title="close" onPress={()=> setModalVisible(false)}/>
                </View>
</Modal>
        </View>
    )

}
