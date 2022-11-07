/**Bài 1: Quản lý tuyển sinh
 * SƠ ĐỒ 3 KHỐI
 * Input: Điểm chuẩn, khu vực, đối tượng, điểm môn1. điểm môn 2, điểm môn 3
 * Process: 
 *      1. Lấy input: Điểm chuẩn, khu vực, đối tượng, điểm 3 môn
 *      2. Công thức tính tổng điểm: totalScore= scoreSubject1 + scoreSubject2 + scoreSubject3 + areaScore + objectScore
 *      3. -Nếu  điểm 3 môn đều khác 0 thì xét điều kiện điểm chuẩn
 *            +nếu tổng điểm >= điểm chuẩn => Ban đã đậu .
 *            +ngược lại: tổng điểm < điểm chuẩn => Bạn đã rớt.
 *         -Trường hợp còn lại điểm 1 trong 3 môn ===0 =>Bạn đã rớt.
 *      4. In Kết quả đậu rớt, tổng điểm
 * Output: đậu / rớt, tổng điểm
 * 
 */
function adManager(){
    var standScore=document.getElementById("standScore").value*1;
    var areaScore = document.getElementById("areaScore").value *1;
    var objectScore = document.getElementById("objectScore").value *1;
    var scoreSubject1 = document.getElementById("scoreSubject1").value * 1;
    var scoreSubject2 = document.getElementById("scoreSubject2").value * 1;
    var scoreSubject3 = document.getElementById("scoreSubject3").value * 1;
    var scoreSum = scoreSubject1 + scoreSubject2 + scoreSubject3 + areaScore + objectScore;
    content="";
    if ((scoreSubject1 !==0) && (scoreSubject2 !==0) && (scoreSubject3 !==0)) {
        if (scoreSum >= standScore) {
            content= "Bạn đã đậu. Tổng điểm: " + scoreSum;
        }else {
            content="Bạn đã rớt. Tổng điểm: " + scoreSum;
        }
    }else {
        content="Bạn đã rớt. Tổng điểm: " + scoreSum;
    }
    document.getElementById("adResult").innerHTML=content;
    document.getElementById("adResult").classList.add("info");

}

/**Bài 2: Tính tiền điện
 * Input: Tên, số Kw
 * Process: 
 * 1. lấy input: Tên, số Kw
 * 
 * 2. Tính tiền:
 * tổng tiền = số kw * giá tương ứng
 * 
 * 3. In ket qua ra man hinh
 * 
 * Output: tiền điện 
 * 
 *  
 */
function electricBill(){
    var name = document.getElementById("name").value;
    var elecNumber = document.getElementById("elecNumber").value *1;
    var elecBill=0;
    var content="";
    if  (elecNumber <= 50) {
        elecBill = elecNumber * 500 ;
    }else if (elecNumber <= 100) {
        elecBill = 50*500 + (elecNumber - 50)*650;
    }else if (elecNumber <= 200) {
        elecBill = 50*500 +50*650 + (elecNumber - 100)*850;
    }else if ( elecNumber <= 350) {
        elecBill = 50*500 + 50*650 + 100*850 + (elecNumber - 200)*1100;
    }else {
        elecBill = 50*500 + 50*650 + 100*850 + 150*1100 + (elecNumber - 350)*1300;
    }
    content= "Họ tên: " + name +"; Tiền điện: " + elecBill;
    document.getElementById("elecBillResult").innerHTML=content;
    document.getElementById("elecBillResult").classList.add("info");

}