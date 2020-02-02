#Post json
curl -d '{"email":"test","username":"test","password":"test"}' -H "Content-Type: application/json" -X POST http://localhost:8081/api/auth/signup

