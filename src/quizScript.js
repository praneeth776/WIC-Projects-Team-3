function getResult(){
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');

    let count = 0;
    if (q1 && q1.value === '1') count++;
    if (q1 && q1.value === '2') count+=2;
    if (q1 && q1.value === '3') count+=3;

    if (q2 && q2.value === '1') count++;
    if (q2 && q2.value === '2') count+=2;
    if (q2 && q2.value === '3') count+=3;

    if (q3 && q3.value === '1') count++;
    if (q3 && q3.value === '2') count+=2;
    if (q3 && q3.value === '3') count+=3;

    if (q4 && q4.value === '1') count++;
    if (q4 && q4.value === '2') count+=2;
    if (q4 && q4.value === '3') count+=3;

    if (q5 && q5.value === '1') count++;
    if (q5 && q5.value === '2') count+=2;
    if (q5 && q5.value === '3') count+=3;

    if (q6 && q6.value === '1') count++;
    if (q6 && q6.value === '2') count+=2;
    if (q6 && q6.value === '3') count+=3;

    if (q7 && q7.value === '1') count++;
    if (q7 && q7.value === '2') count+=2;
    if (q7 && q7.value === '3') count+=3;

    if (q8 && q8.value === '1') count++;
    if (q8 && q8.value === '2') count+=2;
    if (q8 && q8.value === '3') count+=3;
    
    let result = '';
    if(count >= 8 && count < 13){
        resultText = 'You should try a pumpkin spice latte!';
    }else if(count>=13 && count <16){
        resultText = 'You should try apple cider!';
    }else if(count >=16 && count < 19){
        resultText = 'You should try chai!';
    }else if(count >= 19 && count <= 24){
        resultText = 'You should try a London Fog!';
    }
    document.getElementById('result').innerText = resultText;
}
