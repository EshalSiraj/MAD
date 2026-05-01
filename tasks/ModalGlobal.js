import React, { useState } from "react";
import { View, Text, Button, Modal, TouchableOpacity} from "react-native";
import { globalStyles } from './tasks/globalStyles';

export default function App() {
const [modalVisible, setModalVisible] = useState(false);

return (
<View style={globalStyles.container}>
<Button title="Open Global Modal" onPress={() => setModalVisible(true)} />

<Modal
visible={modalVisible}
 transparent={true}  
      
>
<View style={globalStyles.modalOverlay}>
<View style={globalStyles.modalContent}>
<Text style={globalStyles.modalTitle}>Global modal</Text>
<Text >
This is a modal with global styling
</Text>

<TouchableOpacity
style={globalStyles.closeButton}
   onPress={() => setModalVisible(false)}
 >
<Text style={globalStyles.closeButtonText}>Close Modal</Text>
</TouchableOpacity>
</View>
</View>
       
 </Modal>
 </View>
);
}

