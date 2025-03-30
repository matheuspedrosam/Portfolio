import './App.css'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Progress } from './components/ui/progress';

function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className='grid min-h-dvh justify-center items-center'>
                <div className='grid gap-2'>
                    <Progress value={progress} className="w-full" />
                    <p className='text-sm'>Preparing you for the best portfolio...</p>
                </div>
            </div>
        );
    }

    return <Portfolio />;
}

export default App;