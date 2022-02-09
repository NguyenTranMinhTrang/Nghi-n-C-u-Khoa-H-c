import {
    Text,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import imageAPI from '../api/imageAPI';

export default function Test() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await imageAPI.getAll();
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [])

    return (
        <View>

        </View>
    )
}
