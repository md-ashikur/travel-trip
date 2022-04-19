import { useEffect, useState } from 'react';

const useService = () => {
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCart(data));
    }, []);


    return [cart, setCart];
    
};

export default useService;