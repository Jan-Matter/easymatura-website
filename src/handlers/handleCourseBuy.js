import enableCourse from "../dbHandlers/enableCourse";
import createUserInDB from "../dbHandlers/createUserInDB";

export default async function handleCourseBuy(course, firstName, surName, email, phone, gymnasium, klasse){
    //new user
    if(surName){
        await createUserInDB(firstName, surName, email, phone, gymnasium, klasse);
    }
    await enableCourse(course, email, gymnasium, klasse);
}