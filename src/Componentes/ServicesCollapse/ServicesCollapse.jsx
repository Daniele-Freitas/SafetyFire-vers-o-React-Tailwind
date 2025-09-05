// src/components/ServicesCollapse.jsx
import React, { useState, useRef } from 'react';
import Collapse from '../Collapse/Collapse';
import serviceButtonsData from './servicesButtonsData';
import serviceContentsData from './serviceContentsData';
import useScrollAnimation from '../Hooks/useScrollAnimation';

function ServicesCollapse() {
    const [activeServiceId, setActiveServiceId] = useState(null);

    const toggleService = (id) => {
        setActiveServiceId(prevId => (prevId === id ? null : id));
    };

    const activeContent = serviceContentsData.find(item => item.id === activeServiceId);

    return (
        <div className="services-collapse-section container mx-auto py-4 px-8  max-w-5xl md:max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 gap-6 mb-8">
                {serviceButtonsData.map((button, index) => {
                    const IconButton = button.icon;
                    const { ref: buttonRef, isIntersecting: buttonIsIntersecting } = useScrollAnimation({ threshold: 0.2 }, 'fade-in');
                    const animationDelay = `${index * 100}ms`;

                    return (
                        <div
                            key={button.id}
                            ref={buttonRef}
                            className={`
                                col-span-1
                                ${buttonIsIntersecting ? 'visible' : ''} fade-in
                                ${animationDelay ? `delay-[${animationDelay}]` : ''}
                            `}
                            style={{ transitionDelay: animationDelay }}
                        >
                            <Collapse
                                id={button.id}
                                title={button.title}
                                isActive={activeServiceId === button.id}
                                toggleActiveItem={toggleService}
                                containerClassName="bg-white rounded-lg shadow-md"
                                buttonContent={(isButtonActive) => (
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <IconButton 
                                            className={`
                                                text-4xl mb-2 
                                                ${isButtonActive ? 'text-white' : 'text-secondary-color'} 
                                                transition-colors duration-200
                                            `} 
                                        />
                                        <p 
                                            className={`
                                                text-sm font-semibold text-center 
                                                ${isButtonActive ? 'text-white' : 'text-gray-800'} 
                                                transition-colors duration-200
                                            `}
                                        >
                                            {button.title}
                                        </p>
                                    </div>
                                )}
                            />
                        </div>
                    );
                })}
            </div>

            {activeContent && (
                <div className={`w-full mt-8 fade-in ${activeServiceId ? 'visible' : ''}`}>
                    <div className="card border border-gray-300 rounded-xl shadow-lg px-10 pb-10 bg-white">
                        {activeContent.content}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServicesCollapse;