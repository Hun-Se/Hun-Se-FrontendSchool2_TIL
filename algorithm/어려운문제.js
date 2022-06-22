////////////////////// section - 4 //////////////////////

// 런타임 애러 -> 우리는 '실패 (0.03ms, 30.1MB)'가 뜨거나 '성공 (0.03ms, 30.1MB)'이 떠야 합니다.
let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]    
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

function solution(words, queries) {
    let answer = [];

    for (rawQueries of queries){
        let q = rawQueries.replaceAll('?', '.')
        let 매칭카운트 = 0
        for (s of words){
            const 패턴 = new RegExp(q, 'g')
            let 패턴매칭여부 = 패턴.test(s)
            if (패턴매칭여부 && s.length === rawQueries.length) {
                매칭카운트 += 1
            }
        }
        answer.push(매칭카운트)
    }
    return answer;
}

// error
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replaceAll('?', '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}


// 정상 작동
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}

// replaceAll이 문제구나! => 프로그래머스의 node version이 12버전
function solution(words, queries){
    for (var i = 0; i < queries.length; i++) {
        var rawQueries = queries[i];
        var q = rawQueries.replace(/\?/g, '.');
        var count = 0;
    }
    var answer = [3, 2, 4, 1, 0];
    return answer;
}

function solution(words, queries) {
  let answer = [];

  for (rawQueries of queries){
      let q = rawQueries.replaceAll('?', '.')
      let 매칭카운트 = 0
      for (s of words){
          const 패턴 = new RegExp(q, 'g')
          let 패턴매칭여부 = 패턴.test(s)
          if (패턴매칭여부 && s.length === rawQueries.length) {
              매칭카운트 += 1
          }
      }
      answer.push(매칭카운트)
  }
  return answer;
}

// [{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]
// [[{}], [{},{}], [{},{},{}], [{},{},{},{}], [{},{},{},{},{}]...

let 트라이 = []
for (let i = 0; i < 10; i++) {
    let insertArray = []
    for (let j = 0; j < i + 1; j++) {
        insertArray.push({})
    }
    트라이.push(insertArray)
}

/// - ///

function solution (words){
    let 트라이 = []
    for (let i = 0; i < 10; i++) {
        let insertArray = []
        for (let j = 0; j < i + 1; j++) {
            insertArray.push({})
        }
        트라이.push(insertArray)
    }
    return answer
}

solution(['frodo', 'front'])