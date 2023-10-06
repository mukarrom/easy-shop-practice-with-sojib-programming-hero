import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from './firebase.config';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default auth;
