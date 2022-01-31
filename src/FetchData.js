import { useState, useEffect, useCallback } from "react";

export const FetchData = (url, find) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [isError, setIsError] = useState(false);


    const getUsers = useCallback(async () => {
        const response = await fetch(url);
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json();
            setUsers(data);
            setIsloading(false);
        } else {
            setIsloading(false);
            setIsError(true);
        }
    }, [url]);

    const findUser = () => {
        setCurrentUser(users.filter(user => {
            return user.login.includes(find);
        }));
    }

    useEffect(() => {
        getUsers();
        findUser();
        return () => {
            window.removeEventListener('input', setCurrentUser([]));
        }
    }, [url, users]);

    return { currentUser, isLoading, isError };
} 