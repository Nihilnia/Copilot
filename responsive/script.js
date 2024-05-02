const firebase = require("firebase");

// Import the Firebase SDK

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

// Create a new document in Firestore
function createDocument(collection, data) {
  return firebase.firestore().collection(collection).add(data);
}

// Read a document from Firestore
function readDocument(collection, documentId) {
  return firebase.firestore().collection(collection).doc(documentId).get();
}

// Update a document in Firestore
function updateDocument(collection, documentId, data) {
  return firebase
    .firestore()
    .collection(collection)
    .doc(documentId)
    .update(data);
}

// Delete a document from Firestore
function deleteDocument(collection, documentId) {
  return firebase.firestore().collection(collection).doc(documentId).delete();
}
