import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

let locations = new Set<string>();


const thoughts: string[] = [
    "If the memories last , then you know it’s good",
    "California skies came first in show \n Hollywood nose, first class snow",
    "STOP THE NAME DROP",
    "DIY OR DIE",
    "Sometimes things look better from afar",
    "Jump in head first and grow wings on the fall",
    "ECCENTRIC MAINSTREAM",
    "Taking substance from shadows, giving substance to war",
    "DAYS IN DEJA VU",
    "Future Nostalgia",
    "HUMAN ERROR",
    "Once a man, Twice a child",
    "Your atheistic is pathetic",
    "You're only as sick as your secrets",
    "Cool is my currency"

];

type ColorClass = 'text-red-500' | 'text-blue-500' | 'text-green-500' | 'text-yellow-500' | 'text-purple-500';

const getRandomColor = (): ColorClass => {
    const colors: ColorClass[] = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
};

interface Position {
    top: string;
    left: string;
}

const getRandomPosition = (): Position => {
    return {
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
    };
};

interface TypingThoughtProps {
    thought: string;
    delay: number;
}

const TypingThought: React.FC<TypingThoughtProps> = ({ thought, delay }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const color = useRef<ColorClass>(getRandomColor());
    const position = useRef<Position>(getRandomPosition());

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (displayText.length < thought.length) {
            timer = setTimeout(() => {
                setDisplayText(thought.slice(0, displayText.length + 1));
            }, 100);
        } else {
            setIsComplete(true);
        }
        return () => clearTimeout(timer);
    }, [displayText, thought]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayText(thought[0] || '');
        }, delay);
        return () => clearTimeout(timer);
    }, [delay, thought]);

    return (
        <div
            className={`absolute ${color.current} ${isComplete ? 'opacity-100' : 'opacity-70'} transition-opacity duration-500`}
            style={position.current}
        >
            {displayText}
        </div>
    );
};

const ThoughtsSection: React.FC = () => {
    const [startAnimation, setStartAnimation] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        }
    }, [inView]);

    return (
        <div ref={ref} className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {startAnimation && thoughts.map((thought, index) => (
                <TypingThought key={index} thought={thought} delay={index * 10000} />
            ))}
        </div>
    );
}

export default ThoughtsSection;