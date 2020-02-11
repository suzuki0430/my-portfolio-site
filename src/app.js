import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css'; // normalize, stylesより上でよい？
import 'bootstrap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far);


ReactDOM.render(<AppRouter />, document.getElementById('app'));


// Profile Work Contact
// Profileのどこかにアニメーションもしくは開くまえにアニメーション
// Profileには経歴、スキル、学習中
// 

// workにサロンサイトとポートフォリオサイト
// チェックボタンにサイトのリンクとGithubリンクを貼る
// workには工夫点と使用技術を記載
// 

// contactにはTwitterとGithubリンクを貼る
// 

// フォントを調査検討する
// スクロールしてもheaderは固定(30学習事項)

// シンプル案
// ウインドウ(背景)に色をつける(青っぽく？) 

// 以下別案(かっこいい)
// スクロールしたらタイトルがアニメーションで出る(30学習事項)
// 背景画像が透けるようなデザインにする(まずは調査)
