# 반응형 이미지와 비디오

## 이미지

- 이미지는 기본적으로 반응형이다.
- Max-width: 100%는 이미지의 원본 크기까지 늘어난다.

## 비디오

- `<vedio>` 태그를 사용하면 내장되어있는 비디오를 화면에 재생 시킬 수 있다.
- `autoplay` 속성과 `mute`속성을 같이 사용해주어서 자동으로 음소거 모드로 영상을 재생시켜 주는 방식을 사용한다.(사용성 측면에서 용이)
- `adding-top`, `padding-bottom` 속성의 % 값은 부모 요소의 넓이에 비례한다. 예르들어 부모의 넚이가 1200px 이라면 padding-top=50% 의 값은 600px 과 같습니다.

- `iframe` 태그를 사용하여 유튜브 영상을 출력 할 수 있다. 이때 유튜브에 적용되어 있는 속성을 자동으로 사용된다.
- 유튜브 영상은 화면 비율에 따라 반응시 위아래로 여백이 생기는데 이때 종회비를 계산하여 그값을 padding-top으로 주게되면 여백을 없엘 수 있다.
- - 종횡비 계산법: 높이 / 넓이 \*100
