# 4월 7일 TIL

## 1. vmax와 vmin

    vmax: 넓이와 높이 중 큰값을 기준으로 삼아 입력한 수치의 퍼센트 만큼 조정된다.

    vmin: 넓이와 높이 중 작은 값을 기준으로 삼아 입력한 수치의 퍼센트 만큼 조정된다.

## 2. overflow

    overflow:hidden:
    CSS의  overflow 프로퍼티는 요소내의 컨텐츠가 너무 커서 요소내에 모두 보여주기 힘들때 그것을 어떻게 보여줄지를 지정한다.

## 3. background-image와 <img>의 차이

    <img>에는 의미와 내용이 있는 이미지일 때, 스크린리더에 작동 할 수 있기위해, 백엔드 개발자와 협업 하기위해 사용한다.(백엔드 개발자는 css보다 html을 보고 작업하기 떄문)
    반면에 <background-image>에는 스태틱(static)한 이미지 즉 바뀌지 않고 고정될 이미지를 넣어줄 때 사용하면 좋다.

## 4. background-repeat / background-size:cover

    repeat: 이미지를 반복하는 설정이다.
            repeat-x: x축만 반복
            repaet-y: y축만 반복
            no-repeat: 반복 없이
    round: 이미지를 짤리지 앟게 크기의 변화를 줘서 간격 없이 반복하게 한다.

    space: 이미지를 짤리지 않게 반복한다.이미지 크기는 유지하고 간격을 줘서 반복한다.

    bcover:
    이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정한다.

    따라서 따라서 background-size:cover와 background-position:center를 사용해서 원본의 비율을 그대로 하여 이미지를 화면에 맞출 수 있다.

## 5. background-position, background-size

    background-position: 백그라운드 이미지를 움찍일 수 있다.
    background-position: x축이동 y축이동
    background-position: bottom 50px right 50px; 바텀으로 50이동 오른쪽으로 50이동

## 6. font 추천 폰트 사이트

    Google fonts:
    눈누:
    네이버 글꼴 모음

## 7. 추천 웹폰트

    noto sans korean
    gmarket sans
    spoqa hans sans neo
    넥슨 lv.1 고딕
    나눔스퀘어
    쿠키런
    rix열정도체

## 8. 아이콘

    구글 아이콘 폰트보다는 font-awsome을 더 많이 사용하고 아이코들의 버전을 잘 확인하고 사용할것.
    특히, bootstrap은 한국버전은 업데이트가 안되서 영어버전을 사용할것

## 9. opacity

    opacity는 0~1까지 값을 주어 투명도를 결정한다. 하지만 이를 색을 옅게 하는데에는 사용하지 않음을 주의

## 10. 변수로 색상을 지정해주는 법

    root { --main-color: #6327FE;   --txt-color: #333333;  }

## 11. line-height

    줄 상자의 높이를 설정해준다.
    하지만 이를 px와 같은 고정값으로 잡는 것을 주의 해야한다. 글자의 크기가 커지게 되면 ui가 깨져 버리기 때문이다.

## 12. vertical-align

    인라인 박스안에서의 수직 정렬을 해줄 수 있다.

    vertical-align: baseline: 부모의 baseline에 맞춘어 정렬한다.

    vertical-align: top: top :
    부모 요소 폰트의 top으로 정렬한다.

    vertical-align: middle: 부모의 baseline+ x-height/2로 정렬한다.

    참고사이트: <https://mygumi.tistory.com/368>

## 13. text-align

    블록 요소나 표의 칸 상자의 가로 정렬 설정한다.
