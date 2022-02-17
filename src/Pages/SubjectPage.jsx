import React from 'react';
import ProtectedPageWrapper from './../Component/ProtectedPageWrapper';
import { useCourse } from './../Context/CourseContext';
import { useParams } from 'react-router-dom';
import VideoCard from './../Component/VideoCard';

//                        

function SubjectPage(props) {
    const { course, subject } = useParams();
    const { courseData } = useCourse();

    return (
        <ProtectedPageWrapper>
            {courseData && 
                <ol className="list-group list-group-numbered">
                    {
                        courseData.content[subject].map((videoID, index) => (
                            <VideoCard key={index} contentID={videoID}/>
                        ))
                    }
                    
                </ol>
                }
        </ProtectedPageWrapper>
    );
}

export default SubjectPage;
