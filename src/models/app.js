
export default {

    namespace: 'app',

    state: {
        name: '这是app的model',
    },

    reducers: {
        SETNAME (state, action) {              //注意顺序，state在前面
            return {
                ...state,
                name: action.name
            }
        },

    },
    subscriptions: {

    },

    effects: {                                 //用于异步操作

        // *expample (action, { call, put }) {
        //     const response = yield call(request, action.data, url);
        //     yield put({
        //         type: 'xxx',
        //         data: response.data,
        //     });
        // },
    },
};