import axios from 'axios';
import { API_URL } from '../Global/constant';

export const getNewCourses = (limit, page, setStatus) => {
    axios.post(API_URL + 'course/top-new', {
        limit: limit,
        page: page
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getDetailWithLesson = (token, courseId, setStatus) => {
    axios.get(API_URL + 'course/detail-with-lesson/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, details: response.data.payload });
            
        } else {
            setStatus({ successful: false })
            
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getCourseInfo = (token, id, setStatus) => {
    axios.get(API_URL + 'course/get-course-info?id=' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, details: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getTopSell = (data, setStatus) => {
    axios.post(API_URL + 'course/top-sell', data)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false, courses: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, courses: [] });  
    })
}

export const getTopRate = (data, setStatus) => {
    axios.post(API_URL + 'course/top-rate', data)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false, courses: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, courses: [] });
    })
}

export const getCourseFollowFavoriteCategories = (data, setStatus) => {
    axios.post(API_URL + 'course/courses-user-favorite-categories', data)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false, courses: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, courses: [] });
    })
}