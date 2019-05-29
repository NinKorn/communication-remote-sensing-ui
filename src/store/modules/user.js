export default {
    state: {
        user: [],  // 用户权限标识集合
    },
    getters: {
   
    },
    mutations: {
        setPerms(state, perms){  
            // 用户权限标识集合
            console.log(perms,'user');
            state.user = perms;
        }
    },
    actions: {
    }
}