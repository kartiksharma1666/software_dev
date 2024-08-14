import React, { useState } from 'react';
import '../../App.css';
import icon from '../../assets/Icon-512.png';
import { NearYou } from '../../components/NearYou';
import { themeColors } from '../../theme';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';

function BlogPost() {
    const location = useLocation();
    const props = location.state || {};  //  Getting Data from Near You

    return (
        <div className="bg-tertiary flex flex-col space-y-8 pb-8 lg:pb-16 w-auto pt-4 lg:pt-12">
            
            <div className="px-8 lg:px-48">
                {/* Heading and Name */}
                <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl lg:text-4xl font-bold text-secondary text-left">{props.name}</h1>
                    <p className="text-lg lg:text-xl font-bold text-secondary text-left">{props.location}</p>
                </div>

                {/* Image Section */}
                {props.image!==null && 
                <div className="flex justify-left pb-8 pt-4">
                    <div className="w-full bg-secondary border-4 border-secondary rounded-2xl overflow-hidden">
                        <img src={props.image} alt="Logo" className="object-cover w-full" />
                    </div>
                </div>}

                <div className="rounded-xl text-left" dangerouslySetInnerHTML={{ __html: props.content }} /> 
                {/* <ReactQuill value={props.content} readOnly={true} theme="bubble" />  */}
            </div>
            
            {/* Blog Lists */}
            <NearYou 
                heading='CHECK OUT THE TRAIN REX BLOG'
                headingMobile='TRAIN REX BLOGS'
                bg='bg-tertiary w-auto'
                size= 'lg:px-40'
                headingColor='text-secondary'
                locationIconColor={themeColors.lightAccent}
                />
            {/* Gym List */}
            <NearYou 
                heading='CHECK OUT FITNESS CENTRES NEAR YOU'
                headingMobile='FITNESS CENTRES NEAR YOU'
                bg='bg-tertiary w-auto'
                size= 'lg:px-40'
                headingColor='text-secondary'
                locationIconColor={themeColors.lightAccent}
                />
        </div>
    );
}

export default BlogPost;
