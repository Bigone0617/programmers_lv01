function solution(id_list, report, k) {
    let answer = new Array(id_list.length);
    answer.fill(0); // id_list.lenght가 4라고 하면 answer은 [0,0,0,0]

    // 유저별 신고를 한 사람 리스트
    let report_list = {};

    for(let i = 0; i < report.length; i++){
        // report는 신고한 사람-신고받은 사람 쌍으로 들어옴
        let [user_id, report_id] = report[i].split(' ');
        
        // 신고 받은 사람이 key에 없는 경우 새로 만들어주고 신고한 사람을 넣어줌
        if(!report_list[report_id]){
            report_list[report_id] = [user_id];
        }else{
            // 신고 받은 사람이 key로 이미 있는 경우 -> 신고한 사람이 중복되지 않은지 체크 후 추가
            if(!report_list[report_id].includes(user_id)){
                report_list[report_id].push(user_id)
            }
        }
    }

    for(let key in report_list){
        // 자신이 신고 받은 횟수가 정지 횟수보다 이상이면 신고한 사람에게 알림 횟수 추가
        if(report_list[key].length >= k){
            report_list[key].forEach(data => {
                answer[id_list.indexOf(data)] += 1;
            })
        }
    }

    return answer;
}


let result = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);

console.log(result);