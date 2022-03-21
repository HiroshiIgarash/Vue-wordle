Vue.createApp({
    data() {
        return {
            answer: "",

            pokemons: ["フシギダネ", "フシギソウ", "フシギバナ", "リザードン", "カメックス", "キャタピー", "トランセル", "バタフリー", "ピジョット", "オニスズメ", "オニドリル", "アーボック", "ピカチュウ", "ライチュウ", "サンドパン", "ニドクイン", "ニドリーノ", "ニドキング", "キュウコン", "ゴルバット", "ナゾノクサ", "クサイハナ", "ラフレシア", "パラセクト", "モルフォン", "ダグトリオ", "ペルシアン", "ゴルダック", "オコリザル", "ウインディ", "ニョロボン", "ユンゲラー", "フーディン", "ワンリキー", "ゴーリキー", "カイリキー", "マダツボミ", "ウツボット", "メノクラゲ", "ドククラゲ", "イシツブテ", "ゴローニャ", "ギャロップ", "レアコイル", "ベトベター", "ドードリオ", "ベトベトン", "シェルダー", "パルシェン", "スリーパー", "キングラー", "ビリリダマ", "マルマイン", "サワムラー", "エビワラー", "ベロリンガ", "マタドガス", "サイホーン", "モンジャラ", "トサキント", "アズマオウ", "ヒトデマン", "スターミー", "バリヤード", "ストライク", "ルージュラ", "ケンタロス", "コイキング", "ギャラドス", "シャワーズ", "サンダース", "ブースター", "オムナイト", "オムスター", "カブトプス", "フリーザー", "ファイヤー", "ミニリュウ", "ハクリュー", "カイリュー", "ミュウツー", "チコリータ", "ベイリーフ", "メガニウム", "ヒノアラシ", "マグマラシ", "バクフーン", "アリゲイツ", "オーダイル", "ヨルノズク", "レディアン", "アリアドス", "クロバット", "チョンチー", "ランターン", "トゲチック", "ネイティオ", "デンリュウ", "キレイハナ", "ニョロトノ", "ヒマナッツ", "ヤンヤンマ", "ヤミカラス", "ヤドキング", "アンノーン", "ソーナンス", "キリンリキ", "クヌギダマ", "フォレトス", "ハガネール", "グランブル", "ハリーセン", "ヘラクロス", "マグマッグ", "マグカルゴ", "デリバード", "マンタイン", "エアームド", "キングドラ", "ドンファン", "カポエラー", "ムチュール", "エレキッド", "ミルタンク", "ヨーギラス", "サナギラス", "バンギラス", "テッポウオ", "ブラッキー", "ウソッキー", "ニドリーナ", "グライガー", "ジュプトル", "ジュカイン", "ワカシャモ", "バシャーモ", "ミズゴロウ", "ヌマクロー", "ラグラージ", "ジグザグマ", "マッスグマ", "カラサリス", "アゲハント", "ドクケイル", "ハスブレロ", "ルンパッパ", "オオスバメ", "ペリッパー", "サーナイト", "アメモース", "キノガッサ", "ヤルキモノ", "ケッキング", "テッカニン", "ゴニョニョ", "バクオング", "マクノシタ", "ハリテヤマ", "エネコロロ", "ボスゴドラ", "チャーレム", "ライボルト", "バルビート", "イルミーゼ", "マルノーム", "サメハダー", "ホエルオー", "ブーピッグ", "パッチール", "ビブラーバ", "ナックラー", "フライゴン", "チルタリス", "ザングース", "ハブネーク", "ルナトーン", "ソルロック", "ドジョッチ", "シザリガー", "ネンドール", "ユレイドル", "アーマルド", "ミロカロス", "カクレオン", "カゲボウズ", "ジュペッタ", "サマヨール", "トロピウス", "ユキワラシ", "オニゴーリ", "タマザラシ", "トドグラー", "トドゼルガ", "ハンテール", "サクラビス", "ジーランス", "ボーマンダ", "メタグロス", "レジロック", "レジアイス", "レジスチル", "ラティアス", "ラティオス", "カイオーガ", "グラードン", "レックウザ", "デオキシス", "ダーテング", "ハヤシガメ", "ドダイトス", "モウカザル", "ゴウカザル", "ポッチャマ", "エンペルト", "ムクバード", "ムクホーク", "コロボーシ", "コロトック", "レントラー", "ロズレイド", "ズガイドス", "ラムパルド", "タテトプス", "トリデプス", "ミノムッチ", "ミノマダム", "ガーメイル", "ミツハニー", "ビークイン", "フローゼル", "チェリンボ", "カラナクシ", "トリトドン", "エテボース", "フワライド", "ミミロップ", "ムウマージ", "ドンカラス", "ニャルマー", "ブニャット", "リーシャン", "スカンプー", "スカタンク", "ドーミラー", "ドータクン", "ガブリアス", "ヒポポタス", "カバルドン", "ドラピオン", "グレッグル", "ドクロッグ", "マスキッパ", "ケイコウオ", "ネオラント", "ユキカブリ", "ユキノオー", "マニューラ", "ジバコイル", "べロベルト", "ドサイドン", "モジャンボ", "エレキブル", "ブーバーン", "トゲキッス", "メガヤンマ", "リーフィア", "グレイシア", "グライオン", "エルレイド", "ダイノーズ", "ヨノワール", "ユキメノコ", "エムリット", "ディアルガ", "ヒードラン", "レジギガス", "ギラティナ", "クレセリア", "ダークライ", "アルセウス", "ポッタイシ"],
            rand: Math.random(),
            histories: [],

            kanas: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤ　ユ　ヨラリルレロワ　　　ンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポャ　ュ　ョッ　　　ー",
            noneKana: [],
            biteKana: [],
            eatKana: [],
            gameover: false,

        }
    },
    computed: {
        pokemon: function () {
            return this.pokemons[Math.floor((this.rand * this.pokemons.length))]
        },
        style: function () {
            return function (states) {
                let bgcolor
                if (states == 2) {
                    bgcolor = '#0f0'
                } else if (states == 1) {
                    bgcolor = '#fc0'
                } else bgcolor = '#c8c8c8'

                return { backgroundColor: bgcolor }
            }
        },
        hint: function () {
            let index = []
            this.eatKana.forEach(kana => {
                index.push(this.pokemon.indexOf(kana))
            });

            return this.pokemons.reduce((pre, cur) => {
                for (i in index) {
                    if (cur[i] != this.pokemon[i]) return pre;
                }
                return pre + 1;
            },0)
            
        },
        kanaStyle: function () {
            return function (kana) {
                let states = 0;
                if (this.eatKana.includes(kana)) states = 2;
                else if (this.biteKana.includes(kana)) states = 1;
                else if (this.noneKana.includes(kana)) states = 0;
                else return;

                return this.style(states);
            }
        },
    },
    methods: {
        onSubmit: function () {
            if (this.gameover) return;
            if (this.pokemons.includes(this.answer)) {
                //履歴に加える
                this.histories.push({
                    pokemon: this.answer,
                    states: this.check(this.answer),
                });

                //50音の更新
                this.addKana(this.answer);

                //正解時
                if (this.check(this.answer) == "22222") {
                    alert(`正解！${this.pokemon}でした！`)
                    this.gameover = true;
                }

            } else {
                alert("そのポケモンは存在しません")
            }
            this.answer = ""
        },

        init: function () {
            //初期化
            this.histories = [];
            this.rand = Math.random();
            this.noneKana = [];
            this.biteKana = [];
            this.eatKana = [];
            this.gameover = false;
        },

        // 引数のイートバイトをチェックし、数列で返す関数
        check: function (word) {
            let ans = ""
            for (let i = 0; i < 5; i++) {
                if (word[i] == this.pokemon[i]) {
                    ans += 2
                } else if (this.pokemon.includes(word[i])) {
                    ans += 1
                } else ans += 0
            }
            return ans;
        },

        addKana: function (word) {
            for (let i = 0; i < 5; i++) {
                if (word[i] == this.pokemon[i]) {
                    if (!this.eatKana.includes(word[i])) this.eatKana.push(word[i]);
                } else if (this.pokemon.includes(word[i])) {
                    if (this.eatKana.includes(word[i])) continue;
                    else if (!this.biteKana.includes(word[i])) this.biteKana.push(word[i]);
                } else if (!this.noneKana.includes(word[i])) this.noneKana.push(word[i]);
            }
        }
    }
}).mount('#app');



