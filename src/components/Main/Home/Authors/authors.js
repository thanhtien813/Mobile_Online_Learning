import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { navName } from '../../../../Global/constant';

const Authors = ({authors, title, type, hideButton, eventButton, navigation, route}) => {
    const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: '#BDBDBD',
              alignSelf: 'center',
              margin: 15,
              borderRadius: 50,
            }}
          />
        );
    }

    const renderListAuthorsType1 = (authors) => {
        if (authors === undefined) return;
        return authors.map(author => 
            <TouchableOpacity style={{marginRight: 15, alignItems: 'center'}}
                onPress={() => navigation.push(navName.author, { author: author })}
            >
                <Image 
                    style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 7}}
                    source={{url: author.image}}
                />
                <Text style={{color: '#424242', fontSize: 15, maxWidth: 100}}>{author.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderListAuthorsType2 = (author) => (
            <TouchableOpacity style={{margin: 10, alignItems: 'center', flexDirection: 'row'}}
                onPress={() => navigation.push(navName.author, { author: author })}
            >
                <Image 
                    style={{width: 65, height: 65, borderRadius: 65/2}}
                    source={{url: author.image}}
                />
                <View style={{marginLeft: 20}}>
                    <Text style={{color: '#424242', fontSize: 17}}>{author.name}</Text>
                    <Text style={styles.darkText}>{author.courses}</Text>
                </View>
            </TouchableOpacity>
    );

    return (
        <View style={{ margin: route != undefined ? 10 : 0}}>
            <View style={{flexDirection: 'row', alignItems:'flex-start',justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={{color: '#616161', fontWeight: 'bold', fontSize: 18}}>{(route !== undefined ? route.params?.title : title)}</Text>
                {(route !== undefined ? route.params?.hideButton : hideButton) ? null : 
                    <TouchableOpacity 
                        style={{backgroundColor: '#FF5252', 
                            padding: 4, borderRadius: 50, minWidth: 80,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{color: 'white', fontSize: 13}}>{eventButton}</Text>
                    </TouchableOpacity>
                }
            </View>
            {(route !== undefined ? route.params?.type : type) === 2 ?
                <View>
                    <FlatList 
                        data={route !== undefined ? route.params?.authors : authors}
                        renderItem={({item}) => renderListAuthorsType2(item)}
                        ItemSeparatorComponent={FlatListItemSeparator}
                    />
                </View>
                :
                <View style={{marginLeft: 5}}>
                    <ScrollView horizontal={true}>
                        {renderListAuthorsType1(route !== undefined ? route.params?.authors : authors)}
                    </ScrollView>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 13,
    },
    darkText: {
        color: 'gray',
        fontSize: 15,
        marginTop: 3,
    }
});

export default Authors;