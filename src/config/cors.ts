export default {
    origin: [
        '*',
    ],
    optionsSuccessStatus: 200,
    credentials: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    preflightContinue: false,
};
