import React from 'react';
import NoticeList from './NoticeList';

const NoticeBoard = () => {
    const notices = [
        {
            date: "3 May 2023",
            title: "University Library closed on Sunday",
            notice: "The library will be closed on Sunday due to maintenance work."
        },
        {
            date: "4 May 2023",
            title: "Changes in Exam Schedule",
            notice: "There have been changes to the exam schedule, please check the university website."
        },
        {
            date: "5 May 2023",
            title: "Welcome to new Students",
            notice: "A warm welcome to all new students joining our university this semester."
        },
        {
            date: "6 May 2023",
            title: "Student Council Election Results",
            notice: "The results of the student council elections are now available on the notice board."
        },
        {
            date: "7 May 2023",
            title: "Seminar on Entrepreneurship",
            notice: "A seminar on entrepreneurship will be held on Friday at the university auditorium. All students are welcome to attend."
        }
    ];

    return (
        <div className='my-3 md:my-5 px-3 md:px-8 mx-auto md:container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {notices.map((notice, index) => (
                    <NoticeList
                        key={index}
                        date={notice.date}
                        title={notice.title}
                        notice={notice.notice}
                    />
                ))}
            </div>
        </div>
    );
};

export default NoticeBoard;
