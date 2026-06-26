import './src/app.js';
// Empêche le bot de s'éteindre en cas d'erreur non capturée
process.on('unhandledRejection', (reason, promise) => {
    console.error(' [ERREUR REJETÉE] :', reason);
});

process.on('uncaughtException', (err, origin) => {
    console.error(' [EXCEPTION NON CAPTURÉE] :', err);
});
