var btn = document.getElementById('uranai-btn')   //html要素のidを取得
var result = document.getElementById('result')

// ボタンがクリックされたら
btn.addEventListener('click', function(){

    // 大吉〜大凶の中から1つランダムにピックアップして、画面の結果に表示する
    // ランダム関数
    // ランダム関数から取得した値に応じて出力結果を選ぶようにしてください
    var unsei = ["大吉", "大凶"];
    unsei[Math.floor(Math.random() * unsei.length)];
    var uranai_result = unsei[Math.floor(Math.random() * unsei.length)];
    //math.random 0から１をランダムで、　×　length配列の長さ 0.7*2＝1.4⇒１
    //わざわざunsei.lengthは、増えてもいいように
    console.log(result.classList);
    if(uranai_result === "大吉"){
        
        result.classList.add('daikichi');
        
        }
    else if(uranai_result === "大凶"){
        result.classList.add('daikyou');
        }
    else{}
    result.innerHTML = uranai_result;
    
})