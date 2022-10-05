import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Button from "../../components/UI/Button/Button";
import {logout} from "../../store/reducers/AuthActionCreators";
import {useNavigate} from "react-router-dom";
import Slider from "../../components/UI/Slider/Slider.component";
import cl from './UserPage.module.css'
import Spinner from "../../components/UI/Spinner/Spinner";
import Container from "../../components/UI/Container/Container.component";
import {getAll} from "../../store/reducers/FavouriteActionCreators";

const UserPage = () => {
    const {user} = useAppSelector(state => state.authReducer)
    const {posts, isLoading} = useAppSelector(state => state.likedPostsReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onButtonClick = async (e: React.MouseEvent) => {
        await dispatch(logout())
        navigate('/signin')
    }
    const [page, setPage] = useState(1);
    const loader = useRef<HTMLDivElement>(null);

    let shownPosts = posts.slice(0, page);


    const handleObserver = useCallback((entries: any) => {

        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        dispatch(getAll())
    }, [])

    const options = {
        root: null, rootMargin: '0px', threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, options);

        if (loader.current) observer.observe(loader.current);

        return () => {
            if (loader.current) observer.unobserve(loader.current)
        }
    }, [loader, options]);

    return isLoading ? (<Spinner/>) : <div>
        {!user.isActivated && <div className={cl.isActivated}>Please verify your account by email!</div>}

        <Container>
            <div className={cl.buttonBlock}>
                <Button onClick={onButtonClick}>Log out</Button>
            </div>
            <div className={cl.slides}>
                {shownPosts.length && shownPosts.map((item, i) => (<img src={item.url} key={i} alt={item.url}/>))}
            </div>
        </Container>
        <div style={{display: page < posts.length ? 'block' : 'none'}} ref={loader}></div>

    </div>;
};

export default UserPage;
