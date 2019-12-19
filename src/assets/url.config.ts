export const baseUrl = Object.freeze({
    base: 'http://localhost:8080/staff-digital'
});

export const url = Object.freeze({
    login: baseUrl.base + '/login'
});

export const signupUrl = Object.freeze({
    signup: baseUrl.base + '/signup'
});

export const routerMap = Object.freeze({
    login: '',
    home: 'busca'
});