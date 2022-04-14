# 4월 13일 TIL

## 속성선택자

    * [class^="korea"] : 클래스명이 korea로 시작하는 것에 적용
    * [class$="lab"] : class가 lab으로 끝나는 class에 적용 (문자열 끝만 확인한다.)
    * [참고사이트]:(https://www.w3schools.com/cssref/css_selectors.asp)

## 가상 클래스

    - 실재로 html에 존재하지 않는 클래스지만 마치 클래스가 존재하는것 처럼 작동하는 선택자
    * nth-child(n) : 해당 클레스의 n번째 자식요소 / 선택자는 1부터 시작하고 n을 썻을 때 n은 0부터 시작한다.
    * focus: 포커스 됐을 때 적용된다.
    * active: 해당 클래스를 클릭을 유지 했을 때 적용된다.
    * enabled: 해당 요소가 선택 할 수 없는 상태가 된다.
    * checked: 해당 요소가 체크 상태일 때 적용된다.
    * li:not(.클래스명){ color: red;}: 부정 선택자 해당 클래스는 컬러가 적용되지 않는다.(최근에 나옴)

## flex

    - Block 레벨 요소의 성질을 가지며 주로 부모의 속성을 통해 자식들을 컨트롤 합니다. 이때 부모를 Flex-container, 영향을 받는 자식들을 Flex-item이라고 부른다.

    * flex-direction: 정렬의 방향을 결정한다.
        *row-reverse: row방향 역순으로 정렬
        *column-reverse: column방향 역순으로 정렬
    * align-items는 cross-axis를 기준으로 이동한다.
    * align-content: flex-container의 cross-axis 축의 아이템들이 여러 줄일 때 사용 가능하다.
