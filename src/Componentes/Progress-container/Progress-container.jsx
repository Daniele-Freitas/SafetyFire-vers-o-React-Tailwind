import { useEffect, useState } from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation"; 
import progressItemsData from "./progressData";

function ProgressItemComponent({icon: IconComponent,targetValue,description,animationClass,}) {
    const [currentCount, setCurrentCount] = useState(0);
    const [dynamicColor, setDynamicColor] = useState("rgb(0, 0, 0)");
    const [countAnimationStarted, setCountAnimationStarted] = useState(false); 

    const { ref: itemRef, isIntersecting } = useScrollAnimation({ threshold: 0.5 }, animationClass);

    useEffect(() => {
        // A contagem só começa se o elemento está na viewport E a animação da contagem ainda não começou
        if (isIntersecting && !countAnimationStarted) {
            setCountAnimationStarted(true); // Marca que a animação da contagem começou

            const duration = 2000;
            const startTime = performance.now();

            const animateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);

                const value = Math.floor(progress * targetValue);
                setCurrentCount(value);

                const redColor = Math.floor(progress * 227);
                const greenColor = Math.floor(progress * 72);
                const blueColor = Math.floor(progress * 90);
                const newColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                setDynamicColor(newColor);

                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                } else {
                    setDynamicColor("#E3485A"); // Cor final
                }
            };

            requestAnimationFrame(animateCount);
        }
    }, [isIntersecting, targetValue, countAnimationStarted]); // Dependências da contagem

    return (
        <div
            ref={itemRef} // Anexe a ref do hook ao elemento DOM
            className={`
                progress-item 
                w-full grid grid-cols-2 items-center justify-between 
                ${animationClass} 
                ${isIntersecting ? 'visible' : ''}  
            `}
        >
            <IconComponent
                className="text-5xl align-middle ml-auto pr-2"
                style={{ color: dynamicColor }}
            />
            <p
                className="count text-4xl align-middle mr-auto font-bold"
                style={{ color: dynamicColor }}
                data-target={targetValue}
            >
                {currentCount}
            </p>
            <p                 
            style={{ color: dynamicColor }}
            className="font-bold whitespace-nowrap align-middle mt-2 text-lg col-span-2 m-auto">{description}</p>
        </div>
    );
}

export default function ProgressSection() {
    return (
        <section className="pt-8 w-full mx-auto px-4">
                <div
                    id="progress-container"
                    className="grid grid-cols-2 md:grid-cols-4 m-auto gap-8 justify-center"
                >
                    {progressItemsData.map((progressItem) => (
                        <ProgressItemComponent
                            key={progressItem.id}
                            icon={progressItem.icon}
                            targetValue={progressItem.targetValue}
                            description={progressItem.description}
                            animationClass={progressItem.animation}
                        />
                    ))}
                </div>
        </section>
    );
}
