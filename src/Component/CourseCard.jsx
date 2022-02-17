import React from 'react';

function CourseCard({title, progress}) {
    return (
        <div className="card" style={{width: "250px"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {progress && <p>{progress} %</p>}
            </div>
        </div>
    );
}

export default CourseCard;