import React from 'react';
import Job from '../images/job.png';
import Travel from '../images/travel2.jpg'; 

const ProfilePage = () => (
  <div>
    <div className="heading">
      <h1>Profile</h1>
      <p></p>
    </div>
    <div className="wrapper">
      <div className="box box1">
        <h2>Introduction</h2>
        <p>フロントエンドエンジニアへの転職活動を行っている鈴木と申します。</p>
        <p>東京生まれ東京育ち東京在住で、現在は輸入技術商社で約4年間技術営業として働いています。</p>
        <p>
          顧客の要望をヒアリングし、取扱の海外製品の中から最適な提案をするというところに現職の魅力を感じていますが、<br/>
          要望によっては開発元の海外パートナの方針にそくわず、顧客要望を満たせないことがありました。
        </p>
        <p>
          そのような体験をするたび、ソフトウェアのインターフェースがこうだったら…こんな機能があれば…と思うことが多くなりました。
        </p>
        <p>
          顧客の要望に沿ったものを自分の手で作りたいという思いが日に日に強くなり、エンジニアを目指すようになりました。      
        </p>
        <p>
          現在はフロントエンド側の学習を行っていますが、バックエンド側にも興味があります。
        </p>
      </div>
      <div className="box box2">
        <h2>Biography</h2>
        <ul>
          <li>2016年3月: 東京大学大学院(専攻: 物性物理) 修了</li>
          <li>2016年4月: 輸入技術商社　入社</li>
          <li>2019年11月: プログラミング学習開始</li>
          <li>2020年1月: ポートフォリオ1作目(美容室サイト)作成</li>
          <li>2020年2月: ポートフォリオ2作目(本サイト)作成</li>
        </ul>
      </div>
      <div className="profile_pic">
        <img src={Job} height="280px"/>
        <p>セミナー司会中</p>
      </div>
      <div className="box box3">
        <h2>Skills</h2>
        <ul>
          <li>HTML5 / CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>jQuery</li>
          <li>BootStrap</li>
          <li>SCSS / Sass</li>
        </ul>
      </div>
      <div className="box box4">
        <h2>Study materials</h2>
        <ul>
          <li>Tech Academy Frontend course (HTML/CSS/jQuery/BootStrap/Vue.js)</li>
          <li>"JavaScript30" by Wes Bos</li>
          <li>"What The Flexbox?!" by Wes Bos</li>
          <li>"The complete React Developer Course (w/ Hooks and Redux)" by Andrew Mead</li>
        </ul>
      </div>
      <div className="box box5">
        <h2>Hobbies</h2>
        <ul>
          <li>一人旅(直近5年: ニュージーランド/ベネルクス/ドイツ/アメリカ西海岸/ロシア/東南アジア1周/台湾1周/北陸1周/淡路島など)</li>
          <li>採点付カラオケ(DAM専門)</li>
          <li>UFOキャッチャー</li>
          <li>ガンプラ制作</li>
        </ul>
      </div>
      <div className="profile_pic">
        <img src={Travel} height="280px"/>
        <p>ニュージーランド旅行初日</p>
      </div>
      <div className="box box6">
        <h2>Abilities</h2>
        <ul>
          <li>ボクシング(元プロ)</li>
          <li>剣道(弐段)</li>
          <li>英会話(TOEIC810点)</li>
          <li>人名記憶</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProfilePage;