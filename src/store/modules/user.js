const user = {
    namespaced: true, // 开启命名空间，避免不同模块之间的命名冲突
    state: {
        userInfo: null
    },
    mutations: {
        setUserInfo(state, user) {
            state.userInfo = user;
        }
    },
    actions: {
        async fetchUserInfo({ commit }) {
            // 模拟异步请求获取用户信息
            const response = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ id: 1, name: 'John Doe', email: 'johndoe@example.com' });
                }, 1000);
            });
            commit('setUserInfo', response);
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        }
    }
};

export default user;