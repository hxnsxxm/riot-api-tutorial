/**
 * 자바스크립트로 API 테스트
 * 1. GET
 * 2. POST
 */

// 2. POST method
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // HTTP 메서드
  headers: {
    'Content-Type': 'application/json', // 요청 헤더
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }), // 요청 바디
})
  .then(response => response.json())
  .then(data => {
    console.log('** POST method 응답 데이터');
    console.log(data); // API 응답 데이터
  })
  .catch(error => {
    console.error('Error:', error);
  });
