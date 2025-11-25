import dotenv from "dotenv";

dotenv.config();

// 정보 확인(값이 없다면 오류 반환, 기본값을 전달할 수 도 있음)
function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`키 ${key}는 undefined!`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required("JWT_SECRET"),
    expiresInSec: parseInt(required("JWT_EXPIRES_SEC")),
  },
  bcrypt: {
    saltRounds: parseInt(required("BCRYPT_SALT_ROUNDS", 120)),
  },
  host: {
    port: parseInt(required("HOST_PORT", 9090)),
  },
  db: {
    host: required("DB_HOST"),
    user: required("DB_USER"),
    password: required("DB_PASSWORD"),
    database: required("DB_DATABASE"),
    port: required("DB_PORT"),
  },
};
