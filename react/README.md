# React TIL

1. Key는 React가 변경 , 추가 제거된 항목을 식별하는 데 도움을 준다.요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 합니다.
중괄호를 사용하여 요소 컬렉션을 빌드 하고 JSX에 포함할{} 수 있습니다 .

2. key값은 같은 형제요소가 아니면 중복되어도 된다.

3. 암묵적으로 이벤트를 주는 변수는 앞에 handle을 붙인다.

4. 리엑트는 정적인 css를 동적으로 하기 좋다.

5. Jsx는 중괄호 안에 모든 표현식을 포함 할 수 있다.
  ``` JavaScript
  map{numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}

  ```
  
6. 바벨환경에서 바벨 스크립트 내에서  스크립트 모듈을 사용하려면 다음 스크립트를 입력해야 가능하다.
  ``` JavaScript
  <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./data/data.js"></script>
  <script data-plugins="transform-es2015-modules-umd" type="text/babel"></script>
  ```

7. Redux는 리액트 생태계에서 가장 사용률이 높은 상태관리 라이브러리리이다. Redux를 사용하면 여러분이 만들게 될 컴포넌트들의 상태 관련 로직들을 다른 파일들로 분리시켜서 더욱 효율적으로 관리 할 수 있으며 글로벌 상태 관리도 손쉽게 할 수 있다.

8. Hook : Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용 할 수 있다.
    * 16.8 version에 도입
    * useState: 변수의 변화를 감지하여 재렌더링하게 해주는 훅
    * useEffect: 배열의 묶인 state를 감지하여 재랜더링하게 해주는 훅
    * useRef: 레퍼런스를(특정 객체에 접근) 사용하기 위한 훅
   * useMemo: 연산이 많이 들어가는 객체를 저장해 두었다가 사용하기 위한 훅
 함수의 최상위 레벨에서만 정의한다. 조건문으로 훅을 할당하지 않는다. -> 렌더링 될때 항상 같은 순서로 렌덜이이 되어야 하기 떄문이다. 
