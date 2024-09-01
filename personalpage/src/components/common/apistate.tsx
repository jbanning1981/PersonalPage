const apiState = Object.freeze({
    loaded: 'loaded',
    loading: 'loading',
    error: 'error',
    idle: 'idle',

    isLoading: function(state:string) {
        return state == this.loading;
    },
    isLoaded: function(state:string) {
        return state == this.loaded;
    },
    isError: function(state:string) {
        return state == this.error;
    },
    isIdle: function(state:string) {
        return state == this.idle;
    }
});

export default apiState ;