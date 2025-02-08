function loadEnv() {
    const env = import.meta.env;
    const { VITE_API_URL } = env;
    return {
        apiUrl: VITE_API_URL || "https://stjd-strapi-49c7f8c3b0f7.herokuapp.com/api",
    };
}

export default loadEnv();