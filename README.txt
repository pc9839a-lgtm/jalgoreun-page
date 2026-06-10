잘고른 원페이지 배포 파일

구성:
- index.html
- css/style.css
- js/script.js
- assets/ 이미지 보관용 폴더

수정할 곳:
1) 캐릭터 이미지
index.html 파일에서 아래 부분의 src에 이미지 URL을 넣으면 됩니다.
<img src="" alt="잘고른 캐릭터" id="brandCharacter" />

또는 js/script.js 파일의 CONFIG.imageUrl에 이미지 URL을 넣어도 됩니다.

2) 유튜브 주소
index.html의 "유튜브 보기" 버튼 href="#"를 실제 유튜브 채널 주소로 바꾸면 됩니다.
또는 js/script.js 파일의 CONFIG.youtubeChannelUrl을 수정하면 됩니다.

3) 카톡 채널
현재 카톡 채널 주소는 아래로 설정되어 있습니다.
http://pf.kakao.com/_tPanX

배포:
폴더 전체를 웹호스팅, Cloudflare Pages, Netlify, Vercel 등에 업로드하면 됩니다.
