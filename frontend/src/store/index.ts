import { createStore } from 'vuex'
import axios from 'axios'

interface Thread {
  id: number,
  user_id: number,
  user_name: string,
  thread_title: string,
  thread_description: string,
  tag_id: number,
  tag: string,
  comments: Comment[]
  created_at: Date,
  updated_at: Date,
}

interface Tag {
  id: number,
  tag: string,
  created_at: Date,
  updated_at: Date
}

interface Comment {
  id: number,
  user_id: number,
  user_name: string,
  thread_id: number,
  comment: string,
  bold: boolean|null|number,
  italic: boolean|null|number,
  underline: boolean|null|number,
  created_at: Date,
  updated_at: Date
}

interface UserInformation {
  id: number,
  name: string,
  email: string,
  email_verified_at: string|null,
  introduction: string|null,
  profile_picture: string|null,
  background_picture: string|null,
  created_at: Date,
  updated_at: Date
}

export default createStore({
  state: {
    threads: [] as Thread[],
    threadTitle: '' as string,
    threadDescription: '' as string,
    comments: [] as Comment[],
    tags: [] as Tag[],
    tagThread: [] as Thread[],
    tag_name: '' as string,
    userMobile: 0 as number,
    user: [] as UserInformation[],
    loginCheck: false as boolean
  },
  getters: {
    returnThreadData(state): Thread[] {
      return state.threads;
    },
    returnTagThread(state): Thread[] {
      return state.tagThread;
    },
    returnUserInformation(state): UserInformation[] {
      return state.user;
    },
  },
  mutations: {
    setThreadData(state, data) {
      state.threads = data;
    },
    setComment(state, data) {
      state.comments = data;
    },
    setThreadTitle(state, data) {
      state.threadTitle = data;
    },
    setThreadDescription(state, data) {
      state.threadDescription= data;
    },
    setTagData(state, data) {
      state.tags = data;
    },
    setTag(state, data) {
      state.tag_name = data;
    },
    setUserMobile(state, data) {
      state.userMobile = data;
    },
    setUser(state, data) {
      state.user = data;
    },
    setLoginCheck(state, data) {
      state.loginCheck = data;
    }
  },
  actions: {
    async getThreads({commit}) {
      await axios.get('/api/threads')
      .then((res) => {  
        commit('setThreadData', res.data.threads);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    async getTags({commit}, {id: id, path: path}) {
      await axios.get('/api/tags')
      .then((res) => {
        if(path.match(/home|thread_detail/)) {
          commit('setTagData', res.data.tags);          
        } else {
          const tags = res.data.tags.filter((item: Tag) => item.id !== parseInt(id));
          commit('setTagData', tags);
        }       
      })
      .catch((err) => {
        console.log(err);
      })
    },
    async getTagThread({commit}, id) {
      await axios.get('/api/tag_threads/' + id)
      .then((res) => {
          commit('setThreadData', res.data.threads);
          commit('setTag', res.data.tag.tag);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    async getThreadDetail({commit}, id) {
      await axios.get('/api/threads/' + id) 
      .then((res) => {
        commit('setThreadTitle', res.data.thread[0].thread_title)
        commit('setThreadDescription', res.data.thread[0].thread_description);
        commit('setComment', res.data.comments);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    async getUserComment({commit}, id) {
      await axios.get('/api/comments/' + id)
      .then((res) => {
        commit('setComment', res.data.comments);
      })
    },
    async createThread({commit}, {id: id, name: name, title: title, description: description, tag: tag}) {
      await axios.post('/api/create_thread', {
        id: id,
        name: name,
        thread_title: title,
        thread_description: description,
        tag: tag
      })
    },
    async createComment({commit}, {id: id, index: index, thread_title: thread_title, user_id: user_id, user_name: user_name, comment: comment, src: src, bold: bold, italic: italic, underline:underline}){
      await axios.post('/api/threads/' + id, {
        id: id, 
        index: index,
        thread_title: thread_title, 
        user_id: user_id, 
        user_name: user_name, 
        comment: comment, 
        src: src,
        bold: bold, 
        italic: italic, 
        underline:underline
      })
    },
    async getUser({commit}) {
      await axios.get('/api/user')
      .then((res) => {
        if(res.status === 200) {
          commit('setUser', res.data.user);
          commit('setLoginCheck', true);
        } 
      })
      .catch((err) => {
        console.log(err);
      })
    },
    async updateUser({commit}, {id: id, formData: formData}) {
      await axios.post('/api/userupdate/' + id, formData)
    },
    async logout({commit}) {
      await axios.post('/api/logout')
      commit('setLoginCheck', false);
    },
  },
  modules: {
  }
});
