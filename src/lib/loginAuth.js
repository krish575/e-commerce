export default async function loginAuth(authBody) {
try {
    const login = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authBody),
    });
    
    return await login.json();
} catch (error) {
    console.error(error.message)
}
}
