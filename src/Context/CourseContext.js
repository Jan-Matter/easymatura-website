import React, { useContext, useState, useEffect } from "react"
import { doc, getDoc, onSnapshot } from "@firebase/firestore";

import db from "../firebase/firebase-db";
import { useUser } from './UserContext';
import { useParams,  useLocation } from 'react-router';
import { useAuth } from './AuthContext';


const CourseContext = React.createContext()

export function useCourse() {
  return useContext(CourseContext)
}


export function CourseProvider({ children }) {
    const [ currentCourse, setCurrentCourse ] = useState();
    const [ courseData, setCourseData] = useState();
    const [ loading, setLoading] = useState(true);
    const { currentUser } = useAuth();
    const { openedCourse } = useUser();
    const location = useLocation();

    //sets currentCourse to url value
    useEffect(() => {
        const urlParameterArray = location.pathname.split('/');
        const indexCourseParameter =urlParameterArray.findIndex((element) => element === "kurse") + 1;
        if(indexCourseParameter != 0) setCurrentCourse(urlParameterArray[indexCourseParameter]);
        else setCurrentCourse(undefined);
    },[location])

    useEffect(async () => {

        if(!(currentCourse && currentUser)){
            setLoading(false);
            return;
        }

        openedCourse(currentCourse);

        const unsubscribe = onSnapshot(doc(db, "Products", currentCourse), (doc) => {
            setCourseData(doc.data());
        })

        const courseDataSnap = await getDoc(doc(db, "Products", currentCourse));
        setCourseData(courseDataSnap.data());

        setLoading(false);
        return unsubscribe
    }, [currentCourse]);

    const value = {
        currentCourse,
        courseData,
    }

    return (
        <CourseContext.Provider value={value}>
            {!loading && children}
        </CourseContext.Provider>
    )
}