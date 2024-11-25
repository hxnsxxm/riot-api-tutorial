/**
 * 자바스크립트로 API 테스트
 * 1. GET
 * 2. POST
 */

// 1. GET methoed
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON으로 파싱
  })
  .then(data => {
    console.log('** GET method 응답 데이터');
    console.log(data.slice(0, 2)); // API 응답 데이터
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
