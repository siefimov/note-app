import { useState, useEffect, useMemo } from 'react';

const Clock: React.FC = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    

    // useEffect(() => {
        // const intervalId = setInterval(() => {
            // setCurrentDateTime(new Date());
        // }, 1000);

        // return () => {
        //     clearInterval(intervalId);
        // };
    // }, []);

    // const formattedTime = currentDateTime.toLocaleTimeString().toLowerCase();
    // const formattedDate = currentDateTime.toLocaleDateString().replace(/\//g, ".");
    // const formattedDate = currentDateTime.toLocaleDateString().split('/');
    // const reversedDate = `${formattedDate[1]}.${formattedDate[0]}.${formattedDate[2]}`;

    const formattedDate = useMemo(() => {
        const date = currentDateTime.toLocaleDateString().split('/');
        return `${date[1]}.${date[0]}.${date[2]}`;
    }, [currentDateTime]);

    return (
        <div className='mb-6'>
            <p>{formattedDate}</p>
        </div>
    );
};

export default Clock;
