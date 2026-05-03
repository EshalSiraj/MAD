// screens/MainScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { db, auth } from '../firebase';
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  orderBy,
} from 'firebase/firestore';
import { globalStyles, colors } from '../styles/globalStyles';

export default function MainScreen({ navigation }) {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'notes'),
      where('userId', '==', auth.currentUser?.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notesList = [];
      querySnapshot.forEach((doc) => {
        notesList.push({ id: doc.id, ...doc.data() });
      });
      setNotes(notesList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addNote = async () => {
    if (!note.trim()) {
      Alert.alert('Error', 'Please enter a note');
      return;
    }

    try {
      await addDoc(collection(db, 'notes'), {
        text: note,
        userId: auth.currentUser?.uid,
        createdAt: new Date().toISOString(),
      });
      setNote('');
      Alert.alert('Success', 'Note added successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to add note');
    }
  };

  const deleteNote = async (noteId) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'notes', noteId));
              Alert.alert('Success', 'Note deleted');
            } catch (error) {
              Alert.alert('Error', 'Failed to delete note');
            }
          },
        },
      ]
    );
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await auth.signOut();
            navigation.replace('Auth');
          },
        },
      ]
    );
  };

  const renderNote = ({ item }) => (
    <View style={globalStyles.card}>
      <View style={globalStyles.row}>
        <Text style={[globalStyles.text, { flex: 1, marginRight: 10 }]}>
          {item.text}
        </Text>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <Text style={{ color: colors.error, fontSize: 16, fontWeight: '600' }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <View style={globalStyles.row}>
          <View>
          
            <Text style={globalStyles.headerSubtitle}>
              {notes.length} note{notes.length !== 1 ? 's' : ''}
            </Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={{ color: colors.error, fontSize: 16, fontWeight: '600' }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <TextInput
          style={globalStyles.inputMultiline}
          placeholder="Write your note here..."
          placeholderTextColor={colors.textLight}
          value={note}
          onChangeText={setNote}
          multiline
        />
        <TouchableOpacity style={globalStyles.buttonPrimary} onPress={addNote}>
          <Text style={globalStyles.buttonPrimaryText}>Save Note</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={globalStyles.loader} />
      ) : (
        <FlatList
          data={notes}
          renderItem={renderNote}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ListEmptyComponent={
            <View style={globalStyles.centerContainer}>
              <Text style={globalStyles.emptyState}>
                ✨ No notes yet. Add your first note!
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}