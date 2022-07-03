import {useState, useEffect} from 'react';
function useWindowWidth(){
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        function updateWidth() {
            setWidth(document.documentElement.clientWidth)
        }
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])
    return width
}
export default useWindowWidth