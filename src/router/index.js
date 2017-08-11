import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Gallery from '@/components/Gallery'
import config from "@/assets/config";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

Vue.use(VueRouter);

let firebaseApp = null;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config.firebaseConfig);
}
const db = firebaseApp.database();
const commentsRef = db.ref("comments");
const storageRef = firebaseApp.storage().ref();

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: "main",
            component: Main,
            props: {
                storageRef: storageRef,
                commentsRef: commentsRef
            }
        },
        {
            path: '/gallery',
            name: "gallery",
            component: Gallery,
            props: {
                storageRef: storageRef
            }
        }
    ]
});
