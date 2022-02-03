function solution(new_id) {
    var answer = '';

    // 1단계 : 소문자로 치환
    new_id = new_id.toLowerCase() //소문자로 치환
                   .replace(/[^\w-_.]/g, '') // 영어 소문자 - _ . 를 제외한 문자 제거
                   .replace(/\.+/g, '.') // .이 2개 이상이면 한개로 치환
                   .replace(/^\.|.\$/g,'') // 처음이나 끝에 .이 있으면 제거
                   .replace(/^$/, 'a') // 빈 문자열이면 a 넣기
                   .slice(0,15).replace(/\.$/g, '') // 16번째 글자부터는 자르고, 만약 자른 문자의 마지막이 .이면 제거
    
    let id_len = new_id.length;

    while (id_len < 3){
        new_id = new_id + new_id.charAt(id_len-1);
        ++id_len;
    }

    answer = new_id;
    
    return answer;
}

let a = solution('z-+.^.');

console.log(a);