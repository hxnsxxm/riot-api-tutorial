# 계획

- javascript로 api 호출하는 법  
- riot api 호출 테스트  
- riot api 정리  

## Reference

- [라이엇 API 문서](https://developer.riotgames.com/apis)

<br>

##  사전 준비(Requirements)

### 라이엇 개발자 포털에서 키 발급

1. [라이엇 개발자 포털](https://developer.riotgames.com/)  
2. Development API Key >> REGISTERED API KEY 클릭
3. Copy API KEY

주의 : 24시간 이후 재발급 필요

### install nodejs
- [nodejs 설치](https://nodejs.org/ko/download/)

### 환경 변수

#### 1. 설정

`.env` 파일 생성  

```bash
RIOT_API_KEY=[riot api key]
ACCOUNT_REGION=kr
MATCH_REGION=asia
```

#### 2. 파싱

설치

```bash
npm install dotenv
```

js 파일에서 사용 예시
- [get-env.js](./js/get-env.js)

```js
require('dotenv').config();

const riotApiKey = process.env.RIOT_API_KEY;
console.log(`Your API Key: ${riotApiKey}`);
```

<br>

# 1. javascript로 api 호출하는 법

- [js-api-get.js](./js/js-api-get.js)  
- [js-api-post.js](./js/js-api-post.js)  

<br>

# 2. riot api 호출 테스트

- [riot/README.md](./riot/README.md)

<br>





# 3. riot api 정리


