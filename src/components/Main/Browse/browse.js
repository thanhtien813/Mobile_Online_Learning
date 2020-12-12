import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ImageButton from '../../Common/image-button';
import RadiusButton from '../../Common/radius-button';
import SectionPaths from '../Home/SectionPaths/section-paths';
import Authors from '../Home/Authors/authors';
import { navName } from '../../../Global/constant';
import { getInstructors } from '../../../actions/instructor-actions';

const Browse = ({ navigation }) => {
    const skills = [
        'Angular', 'JavaScript', 'C#', 'Java', 'Data Analysis', 'ASP.NET', 'Node.js', 'Design Patterns',
        'Python', 'React', '.NET', 'SQL Server', 'Database Administration', 'Part Modeling'
    ];

    const paths = [
        {
            id: '1',
            title: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
            description: 'Build and deploy a social network with Node.js, Express, React, Redux & MongoDB. Fully updated April 2019',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1646980_23f7_2.jpg?JXazFODL9lSm2-GJuXrXRRbZK6I_UO48IX461CJ8yQBcio_wrwTODwOdZTYGDo9AB9WVdNAC8U8sUhcKTS_81Yh3xOQgyQxeSlS59NyVw-aJpH7zDZGepSOPtCK0GQ'
        },
        {
            id: '2',
            title: 'React JS, Angular & Vue JS - Quickstart & Comparison',
            description: 'Angular (Angular 2+), React or Vue? Get a Crash Course on each of them and a detailed comparison!',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1208638_2604.jpg?xJ7UP27DZaOjxkHmarkPElFub9blb7PX2k3XUZHi7r_B2xvAPONVVbqHMqhppkFwjYi91yyfMu4DozRt0Asafi2T6s7uemRym6j3CPHOCgCNoEpixKCMe1Q-5Uc'
        },
        {
            id: '3',
            title: 'Seja Full-Stack com Vue JS + ASP.NET Core Web API + EF Core',
            description: 'Criando aplicações SPA utilizando VUE JS com WEB API ASP.NET Core 2 e Banco de Dados! Ou seja Angular + React = VUE JS',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/2208312_b42a_4.jpg?hZAjRy5wyOEx5qZs628FY2OprB2c7JvyxsuJ_Gu6MatajkBOkFYYuAlVtV8g2AA1CdfjBUoDkucFBNlIrHk02aQ1OCSsvQU1PrPnYxB83rOQgmGB111uow_YAW3B5A'
        },
        {
            id: '4',
            title: 'Beginner Full Stack Web Development: HTML, CSS, React & Node',
            description: 'Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/1042110_ffc3_4.jpg?Vbt64IzYmDY8ElwCviW21vwZZKGAbFdBSLmRl0YXcB93AHs16RNPP12utCfIjLsqQIOa9AVGYQn-fYuysbahkbFOrSaN3efvNC8SO5z9h4oubQcHqHc1KphdlVqncw'
        },
        {
            id: '5',
            title: 'Taxi App in React Native',
            description: 'Make a basic taxi app in React Native!',
            quantum: '10 course',
            duration: '100 hours',
            url: 'https://img-a.udemycdn.com/course/240x135/2360302_f10e_3.jpg?fgSQYLQIuwaBT3LmZppNROycPyR7RkEyH5HR2_FdrkZQemGj9Gy2HUsdLYFx9v2uHuDdp1YgzCehuW-HTNdu2y6Nl31w8i6zjYfK2VlBczaiSi44eYHNLrB8h16Bqw'
        },
    ];

    const [authors, setAuthors] = useState({ successful: false, list: [] });

    useEffect(() => {
        if (!authors.successful && authors.list.length === 0) {
            getInstructors(setAuthors);
        }
    }, [authors, setAuthors])


    const navigateSkill = () => {
        navigation.navigate(navName.skill);
    }

    const navigateTopic = () => {
        navigation.navigate(navName.topic);
    }

    const renderListSkills = (skills) => {
        return skills.map(item => 
            <RadiusButton onPress={() => navigateSkill()} text={item} />
        );
    }

    return (
        <ScrollView style={styles.root} >
            <ImageButton 
                title='NEW RELEASES' 
                onPress={() => navigation.navigate(navName.newRelease)}
                URL="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                fontSize={24}
            />
            <View style={{padding: 7}} />
            <ImageButton 
                title='RECOMMENDED FOR YOU'
                onPress={() => {}}
                URL="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                fontSize={24}
            />

            <View style={{margin: 17}} />
            <Text style={styles.title}>Popular skills</Text>
            <ScrollView horizontal={true}>
                {renderListSkills(skills)}
            </ScrollView>

            <View style={{margin: 17}} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column', width: '48%'}}>
                    <ImageButton 
                        title='CONFERENCES' 
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                    <View style={{padding: 7}} />
                    <ImageButton 
                        title='DATA PROFESSIONAL'
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                </View>
                <View style={{flexDirection: 'column', width: '48%'}}>
                    <ImageButton 
                        title='CERTIFICATIONS' 
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                    <View style={{padding: 7}} />
                    <ImageButton 
                        title='BUSINESS PROFESSIONAL'
                        onPress={() => navigateTopic()}
                        URL="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        fontSize={18}
                    />
                </View>
            </View>
            
            <View style={{margin: 17}} />
            <SectionPaths paths={paths} 
                title='Paths' 
                type={1} 
                hideButton={false} 
                eventButton='See all >'
                navigation={navigation}
            />

            <View style={{margin: 17}} />
            {authors.list.length !== 0 ? 
                <Authors authors={authors.list}
                    title="Top Authors" 
                    type={1} 
                    hideButton={true}
                    navigation={navigation}
                />
            : null}

            <View style={{margin: 17}} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 24,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 6
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    }
});

export default Browse;