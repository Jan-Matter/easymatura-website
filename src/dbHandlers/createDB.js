import db from "../firebase/firebase-db";
import { setDoc, doc } from "@firebase/firestore";
import gymnasienData from "../data/gymnasienData";
import mathematikData from '../data/mathematikData';
import videoData from '../data/videoData';

const gymnasiumObject = gymnasienData();
const mathematikObject = mathematikData();
const deutschObject = mathematikData();
const videosData = videoData();

export default async function createDB(){
    await createProducts();
    await createContent();
    await createGymnasien();
}

async function createProducts(){
    await createMathematik();
    await createDeutsch();
}

async function createMathematik(){
    await setDoc(doc(db, "Products", "mathematik"), mathematikObject);
}


async function createDeutsch(){
    await setDoc(doc(db, "Products", "deutsch"), deutschObject);
}

async function createContent(){
    await createVideos();
}

async function createVideos(){
    for(let video of videosData){
        await createVideo(video);
    }
}

async function createVideo({videoID, title, link, subject, course,  description, views, duration, messages,}){
    await setDoc(doc(db, "Content", videoID),{
        title,
        link,
        subject,
        course,
        description,
        views,
        duration,
        messages,
    })
}

async function createGymnasien(){
    for(let gymnasium of gymnasiumObject){
        await createGymnasium(gymnasium);
    }
}

async function createGymnasium(gymnasium){
    await setDoc(doc(db, "Gymnasien", gymnasium.id), {
        amountMembers : gymnasium.amountMembers,
        size : gymnasium.size,
        name: gymnasium.name,
        tutor: gymnasium.tutor,
        mathematik: {
            participants: [],
            participantCount: 0,
            messages: [],
        },
        deutsch: {
            participants: [],
            participantCount: 0,
            messages: [],
        },
    });
}


