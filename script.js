document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const note = document.getElementById('note').value;

    // Call the ZhouYi function with the three numbers
    let zhouYiOutput;
    try {
        zhouYiOutput = ZhouYi(num1, num2, num3);
    } catch (error) {
        console.error(error.message);
        zhouYiOutput = "Error: " + error.message; // Handle error gracefully
    }

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Processed Result: ${zhouYiOutput}</p>
        <p>Note: ${note}</p>
    `;

});

function ZhouYi(num1, num2, num3) {
    // Input Validation
    if (num1 < 0 || num1 > 999 || num2 < 0 || num2 > 999 || num3 < 0 || num3 > 999) {
        throw new Error('wrong number');
    }

    // Calculate remainders
    let r1 = num1 % 8;
    let r2 = num2 % 8;
    let r3 = num3 % 6;

    // Adjust for zero remainders
    if (r1 === 0) r1 = 8;
    if (r2 === 0) r2 = 8;
    if (r3 === 0) r3 = 6;

    // Define the name array (2D array)
    const name = [
        ['乾卦', '夬卦', '大有卦', '大壮卦', '小畜卦', '需卦', '大畜卦', '泰卦'],
        ['履卦', '兑卦', '睽卦', '归妹卦', '中孚卦', '节卦', '损卦', '临卦'],
        ['同人卦', '革卦', '离卦', '丰卦', '家人卦', '既济卦', '贲卦', '明夷卦'],
        ['无妄卦', '随卦', '噬嗑卦', '震卦', '益卦', '屯卦', '颐卦', '复卦'],
        ['姤卦', '大过卦', '鼎卦', '恒卦', '巽卦', '井卦', '蛊卦', '升卦'],
        ['讼卦', '困卦', '未济卦', '解卦', '涣卦', '坎卦', '蒙卦', '师卦'],
        ['遁卦', '咸卦', '旅卦', '小过卦', '渐卦', '蹇卦', '艮卦', '谦卦'],
        ['否卦', '萃卦', '晋卦', '豫卦', '观卦', '比卦', '剥卦', '坤卦']
    ];

    // Construct the output string
    const output = `下卦 ${r1}, 上卦 ${r2}, ${name[r1 - 1][r2 - 1]}, 第 ${r3} 爻`;
    
    return output;
}

