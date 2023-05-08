import React from 'react';
import { FaPlay } from 'react-icons/fa';
import thumbnail_image from '../assets/images/thumbnail.png';

const VideoTutorialsCard = (props) => {
    const handlePlayVideo = () => {
        alert("Video is playing...");
    }

    return (
        <div className='w-full flex flex-col justify-center rounded-lg bg-gray-300'>
            <div className=''>
                <img src={thumbnail_image} alt="thumnail_image" className='block rounded-t-lg' />
            </div>
            <div className='w-full px-4 py-5 text-center scale-75 lg:scale-100'>
                <div className='mb-2'>
                    <h1 className='text-xl font-medium text-start'>{props.title}</h1>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-start'>
                        {props.description}
                    </p>
                </div>
                <div className='w-3/4 mx-auto text-lg text-center py-2 cursor-pointer rounded-lg bg-red-500 hover:bg-red-800 text-gray-50 font-bold'>
                    <a href={props.link} onClick={handlePlayVideo} className='block flex items-center justify-center'><FaPlay className='mr-2' /> Play Video</a>
                </div>
            </div>
        </div>
    );
};

export default VideoTutorialsCard;