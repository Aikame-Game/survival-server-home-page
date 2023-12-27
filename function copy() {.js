function copy() {
    var targetCode = document.getElementById("kamesurvival.aternos.me:24344"); // コピー対象のテキストを選択する
    targetCode.select();                              // コピーしたい要素を選択状態にする
    document.execCommand("Copy");                     // 選択しているテキストをクリップボードにコピーする
    alert("コピーしました！");                            // 任意でアラートを出す
}