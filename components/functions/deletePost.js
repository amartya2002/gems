import { getFirestore, deleteDoc, doc } from 'firebase/firestore';

export const deletePost = async (postId) => {
  const db = getFirestore();
  try {
    await deleteDoc(doc(db, 'posts', postId));
    console.log(`Post ${postId} deleted successfully`);
  } catch (error) {
    console.error('Error deleting post', error,);
  }
};
