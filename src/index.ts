import app from './app';

const port = process.env.HTTP_PORT;

(async () => {
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
})();
