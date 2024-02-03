function hienThiSoChinhPhuong(){
    let a = parseInt(document.getElementById('inputA').value);
    let b = parseInt(document.getElementById('inputB').value);
    var ketQuaDiv = document.getElementById('ketQua');
    var spanA = document.getElementById('spanA');
    var spanB = document.getElementById('spanB');
    spanA.textContent = a;
    spanB.textContent = b;
    ketQuaDiv.innerHTML = '';
    for (let i = a; i<=b; i++){
        let canBacHai = Math.sqrt(i);
        if(canBacHai % 1 === 0){
            ketQuaDiv.innerHTML += i + ' ';
        }
    }
}