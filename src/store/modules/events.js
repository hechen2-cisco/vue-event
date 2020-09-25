import EVENTS from './events.json'

const state = {
  events: EVENTS
};

const getters = {
  allEvents: state => state.events
};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
