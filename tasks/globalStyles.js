
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 10
  },
 
  //modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%"
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  errorText: {
    color: "red",
    marginBottom: 15,
    fontSize: 12
  },
  submitButton: {
    backgroundColor: "#20bd8e",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  closeButton: {
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10
  },
  closeButtonText: {
    color: "#333",
    fontWeight: "bold"
  }
});