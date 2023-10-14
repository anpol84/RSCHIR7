
role = sessionStorage.getItem('role')
if (role !== "USER" && role !== "ADMIN" && role !== "READER"){
    location.href='/auth/login'
}

console.log(role)
token = sessionStorage.getItem('token')
console.log(token)
username = sessionStorage.getItem('username')
console.log(username)
async function checkTokenAndRedirect() {
    if (!token) {
        location.href = 'auth/form'
    } else {
        const response = await fetch('http://localhost:8081/auth/check', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
            },
            body: JSON.stringify({ token, role, username })
        });

        // получаем ответ от сервера
        try {
            const data = await response.json();
            console.log(data)
            if (data === false){
                location.href = '/auth/login';
            }
        } catch (error) {
            location.href = '/auth/login';
        }

    }
}

checkTokenAndRedirect();