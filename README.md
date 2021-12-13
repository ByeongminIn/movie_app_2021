# 인병민 201840225

## [ 12월 09일 ]
 > + 리스트와 Key
 > + 폼(Form)
 > + State 끌어올리기
 > + 합성 Vs 상속
 > + React로 생각하기
 > + Hook의 개요
### 학습내용
#### 리스트와 Key
1. 먼저 JavaScript에서 리스트를 어떻게 변환하는지 살펴봅시다.
    + 배열의 값을 반환할 때는 map()함수를 사용한다. 변환하여 반환하는 것도 가능하다.
    + 아래 코드는 map()함수를 이용하여 numvers배열의 값을 두배로 만든 후 map()에서 반환하는 새 배열을 doubled 변수에 할당하고 로그를 확인하는 코드입니다.
        ```JavaScript
            const numbers = [1, 2, 3, 4, 5];
            const doubled = numbers.map((number) => number * 2);
            console.log(doubled);
        ```
2. 여러개의 엘리먼트 렌더링 하기
    + 예제는 배열로 부터 항목을 꺼네 <li>엘리먼트에 넣어 저장하고, 이 것을 <ul>엘리먼트 안에 포함시켜 DOM에 렌더링한다. [실행해보기](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)
3. 기본 리스트 컴포넌트
    + 이번에는 8-1의 예제를 number배열을 props로 받아서 순서 없는 엘리먼트 리스트를 출력하는 컴포넌트로 리팩토링 한다.
        + 먼저 [예제](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)를 codePen에서 실행해보자.
        + 그런데 이 예제를 실행하면 key를 넣어야 한다는 경고가 표시된다.
        + 우리가 알고 있는 key props를 넣어 주면된다.
        + 꼭 스트링으로 변환해 줘야 하는 것은 아니다.
4.  Key
    + Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
    + key는 엘리먼트에 고유성을 부여하기 위해 배열 내부의 요소에 지정해야 한다.
    + 일반적으로 항목이 고정적일 경우는 배열의 index값을 사용한다.
    + 다만 항목의 순서가 바뀔 수 있는 경우는 index사용을 권장하지 않는다.
    + 이 것 때문에 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있기 때문이다. [상세설명](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
5. Key로 컴포넌트 추출하기
    + 예에서 처럼 ListItem 안에 있는 <li> 엘리먼트가 아니라 분해하는 곳의 <ListItem /> 엘리먼트가 key를 가져야 한다.
        + 잘못된 사용법과 잘된 사용법을 비교해 보자.
        + 가장 적절할 방법은 map()함수 내부에 있는 엘리먼트에 key를 넣어 주는 것이 좋다.
6. Key는 배열내 요소 사이에서만 고유한 값이면 된다
    + Key는 배열내의 요소 사이에서 고유 하면 되고, 전체 범위에서 고유할 필요는 없다.
    + 당연히 두 개의 다른 배열을 사용할 때 동일한 key를 사용할 수 있다.
    + 첫 번째 [예](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)는 sidebar와 content가 같은 key값을 사용하는 것을 보여준다.
    + 컴포넌트에 key로 사용할 prop을 전달 할 수는 있지만 key자체를 전달할 수는 없다.
    + 다음 예의 Post컴포넌트에서 props.id는 읽을 수 있지만, props.key는 읽을 수 없다.
    + key값은 key로만 사용되어야 한다.
        ```JavaScript
            const content = posts.map((post) =>
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title} />
                )

        ```
7. JSX에 map() 포함시키기
    + 앞의 예제에서는 별도의 listItems 변수를 선언하고, 여기에 JSX에 포함시켰다.
    + JSX를 사용하면 중괄호 안에 모든 표현식을 포함 시킬 수 있으므로 map() 함수의 결과를 인라인으로 처리할 수 있다.
    + 이 방식을 사용하면 코드가 깔끔해 지지만 사용에 **주의**를 해야한다.
    + 사용전에 가독성이 좋지 않다면 변수로 추출하는 것이 나을 수도 있다.
#### 폼(Form)
1. HTML 폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가지기 때문에, React의 다른 DOM 엘리먼트와 다르게 동작합니다.
    + 만일 제시한 예가 순수한 HTML이라면 이 폼은 name을 입력 받고, 폼을 제출하면 새로운 페이지로 이동한다.
    + React에서도 동일한 동작을 원한다면 그대로 사용하면 된다.
    + 그러나 일반적인 경우라면 JS함수로 폼의 제출을 처리하고, 사용자가 폼에 입력한 데이터에 접근하도록 하는 것이 편리하다.
    + 이를 위한 표준 방식은 “제어 컴포넌트 (controlled components)“라고 불리는 기술을 이용하는 것이다.
2. 제어 컴포넌트 (Controlled Component)
    + 앞서 설명한 바와 같이 HTML에서는 form의 각 엘리먼트는 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트 한다.
    + 그러나 React에서는 변경할 수 있는 state가 컴포넌트의 state 속성에 저장되며, setState()함수를 이용해서 업데이트 한다.
    + 따라서 폼에서 사용되는 값을 React의 state로 일원화 하면 관리를 편하게 할 수 있다.
    + React의 state를 통해 값이 제어되는 입력 폼 엘리먼트를 “제어 컴포넌트 (controlled component)“라고 한다.
    + [예제](https://codepen.io/gaearon/pen/VmmPgp?editors=0010)를 보면 value에 표시되는 값은 this.state.value가 된다.
    + 또한 입력값의 업데이트는 handleChange의 setState를 통해 이루어 진다.
3. textarea 태그
    + HTML에서 textarea 엘리먼트는 텍스트를 DOM상에서의 자식으로 정의한다.
    + React에서 textarea는 value 속성을 사용한다
    + 따라서 react의 textarea는 싱글 태그를 사용하여 작성한다
4. select 태그    
    + HTML에서 select는 드롭 다운 목록을 만든다.
    + HTML에서는 option 태그의 속성으로 selected를 사용하고 있으나, react에서는 select 태그의 속성으로 지정한다
    + select의 value에 option의 value 값을를 지정해서 selected를 대신한다.
    + state의 관리는 textarea와 동일하다.
    +  select 태그에 multiple 옵션을 허용하면, value 속성에 배열을 전달할 수 있다.
        ```HTML
            <select multiple={true} value={['B', 'C']}>
        ```
5. file input 태그
    + HTML에서 ```<input type="file">``` 은 사용자가 하나 이상의 파일을 로컬에서 서버로 업로드하거나, File API를 통해 JavaScript로 조작할 수 있다.
    + 값이 읽기 전용이기 때문에 React에서는 비제어 컴포넌트 (uncontrolled components)이다
6. 다중 입력 제어하기
    + 여러개의 input 엘리먼트를 제어해야 한다면 각 엘리먼트에 name 속성을 추가하고, ```event.target.name``` 값을 통해 핸들러가 어떤 작업을 할 지 선택할 수 있게 해준다.
    + 주어진 input 태그의 name에 일치하는 state를 업데이트하기 위해 ES6의 computed property name 구문을 사용한다.
    + 또한, setState()는 자동적으로 현재 state에 일부 state만을 갱신하기 때문에 바뀐 부분에 대해서만 호출하면 된다
7. 제어되는 Input Null 값
    + 제어 컴포넌트에 value prop을 지정하면 의도하지 않는 한 사용자가 변경할 수 없다.
    + value를 설정했는데 여전히 수정할 수 있다면, 실수로 value를 undefined나 null로 설정했을 수 있다.
8. 제어 컴포넌트의 대안
    + 데이터를 변경할 수 있는 모든 방법에 대해 이벤트 핸들러를 작성하고, React 컴포넌트를 통해 모든 입력 상태를 연결해야 하기 때문에 때로는 제어 컴포넌트를 사용하는 게 불편할 수도 있다.
    + 이럴경우에 입력 폼을 구현하기 위한 대체 기술인 비제어 컴포넌트 (uncontrolled components)를 사용할 수 있다.
9. 완전한 해결책
    + 유효성 검사, 방문한 필드 추적 및 폼 제출 처리와 같은 완벽한 해결을 원한다면 [Formik](https://jaredpalmer.com/formik)이 대중적인 선택 중 하나입니다.
    + 그러나 [Formik](https://jaredpalmer.com/formik)은 제어 컴포넌트 및 state 관리에 기초하기 때문에 배우는 걸 쉽게 생각하면 안 됩니다.
#### State 끌어올리기
+ 종종 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 필요가 있습니다. 이럴 때는 가장 가깝고, 공통된 parents component로 state를 올리는 것이 좋다. 이번에는 그 방법에 대해서 살펴본다.
+ 이번 섹션에서는 주어진 온도에서 물이 끓는지 여부를 추정하는 온도 계산기를 만들어 본다.
1. [BoilingVerdict와 Calculator 컴포넌트 작성한다.](https://codepen.io/gaearon/pen/ZXeOBm?editors=0010)
    + BoilingVerdict 컴포넌트는 섭씨 온도를 의미하는 celsius prop를 받아서 이 온도가 물이 끓기에 충분한지 여부를 출력한다.
    + Calculator 컴포넌트는 온도를 입력할 수 있는 <input>을 렌더링하고 그 값을 this.state.temperature에 저장한다.
    + 그리고 현재 입력값에 대한 BoilingVerdict 컴포넌트의 반환값을 렌더링한다.
2. [두 번째 Input 추가하기](https://codepen.io/gaearon/pen/jGBryx?editors=0010)
    + 섭씨와 함께 화씨 입력 필드도 추가하고, 두 필드 간에 동기화 상태를 유지하도록 한다.
    + Calculator에서 온도 입력 부분을 빼내서, TemperatureInput 컴포넌트를 작성한다.
    + 그리고 "c" 또는 "f"의 값을 가질 수 있는 scale prop를 추가한다.
    + 이로써 Calculator 컴포넌트는 두 개의 온도 필드를 렌더링하는 간단한 컴포넌트로 변경할 수 있게 된다.
    + 아직은 온도만 입력할 수 있는 상태이다.
3. 변환 함수 작성하기
    + 먼저, 섭씨를 화씨로, 또는 그 반대로 변환해주는 함수를 작성한다.
    + 작성한 두 함수는 숫자를 변환한다.
    + 이제 temperature문자열과 변환함수를 인자로 받아 문자열을 반환하는 또 다른 함수를 작성한다.
    + 그리고 먼저 입력한 온도값을 나머지 온도값을 계산하는 용도로 사용한다.
    + 이 함수는 올바르지 않은 temperature 값에 대해서는 빈 문자열을 반환하고, 값을 소수점 세 번째 자리로 반올림하여 출력한다.
    + ✔ 예를 들면 tryConvert(31, toFahrenheit)와 같이 사용 할 수 있다.
4. State 올리기
    + 현재는 두 TemperatureInput 컴포넌트가 각각의 입력값을 각자의 state에 독립적으로 저장하고 있다.
    + 그러나 우리는 두 입력값이 서로 동기화된 상태로 있길 원한다. 섭씨온도 입력값을 변경할 경우 화씨온도 입력값 역시 변환된 온도를 반영할 수 있어야 하며, 그 반대의 경우에도 마찬가지여야 한다.
    + React에서 state를 공유하는 일은 그 값을 필요로 하는 컴포넌트 간의 가장 가까운 공통 조상으로 state를 끌어올림으로써 구현할 수 있습니다. 이 방법을 “state 끌어올리기”라고 부른다.
    + 이제 TemperatureInput이 개별적으로 가지고 있던 지역 state를 지우는 대신 Calculator로 그 값을 옮기도록 한다.
        + 부모인 Calculator가 공유될 state를 소유하고 있으면, 이 컴포넌트는 두 입력 필드의 현재 온도에 대한 state로 작동하게 된다.
        + 이를 통해 두 입력 필드가 서로 간에 일관된 값을 유지하도록 만들 수 있다.
        + 두 TemperatureInput 컴포넌트의 props가 같은 부모인 Calculator로부터 전달되기 때문에, 두 입력 필드는 항상 동기화된 상태를 유지할 수 있게 된다.
        + TemperatureInput 컴포넌트에서 this.state.temperature를 this.props.temperature로 대체한다.
        + 아직은 존재하지 않으나 this.props.temperature가 이미 존재한다고 가정한다.
        + 나중에는 이 값을 Calculator로부터 전달 받을 것이다.
            ```JavaScript
                  render() {
                    // Before: const temperature = this.state.temperature;
                    const temperature = this.props.temperature;
                    // ...
            ```
    + temperature가 지역 state였을 때는 그 값을 변경하기 위해서 그저 TemperatureInput의 this.setState()를 호출하는 것으로 충분했다.
    + 그러나 이제 temperature가 부모로부터 prop으로 전달되기 때문에 TemperatureInput은 그 값을 제어할 능력이 없다. props는 읽기 
    전용이기 때문이다.
    + React에서는 보통 이 문제를 컴포넌트를 “제어” 가능하게 만드는 방식으로 해결한다.
        + DOM <input>이 value와 onChange prop를 건네받는 것과 비슷한 방식으로, 사용자 정의된 TemperatureInput 역시 temperature와 onTemperatureChange props를 자신의 부모인 Calculator로부터 전달 받을 수 있다.
        + 이제 TemperatureInput에서 온도를 갱신하려면 this.props.onTemperatureChange를 호출하면 된다
            ```JavaScript
                  handleChange(e) {
                    // Before: this.setState({temperature: e.target.value});
                    this.props.onTemperatureChange(e.target.value);
                    // ...

            ```
        + 사용자 정의 컴포넌트에서 temperature와 onTemperatureChange prop의 이름이 특별한 의미를 갖고 있지는 않다. 자신이 원하는 이름을 사용할 수 있다.
    + 이제 TemperatureInput에서 온도를 갱신하려면 this.props.onTemperatureChange를 호출하면 된다.
        ```JavaScript
            handleChange(e) {
            // Before: this.setState({temperature: e.target.value});
            this.props.onTemperatureChange(e.target.value);
        ```
    + 사용자 정의 컴포넌트에서 temperature와 onTemperatureChange prop의 이름이 특별한 의미를 갖고 있지는 않다. 자신이 원하는 이름을 사용할 수 있다.
    + onTemperatureChange prop는 부모 컴포넌트인 Calculator로부터 temperatureprop와 함께 제공된다.
    + Calculator의 변경사항을 들여다보기 전에 TemperatureInput 컴포넌트에 대한 변경사항부터 확인해 본다.
    + 이 컴포넌트의 지역 state는 제거했으며, this.state.temperature 대신에 this.props.temperature를 읽어오도록 변경했다.
    + 만일 state를 변경하고 싶을 경우 this.setState() 대신에 Calculator로부터 건네받은 this.props.onTemperatureChange()를 호출하도록 만들었다.
    + 이번에는 Calculator 컴포넌트의 변경 사항을 확인해 본다.
    + temperature와 scale의 현재 입력값을 이 컴포넌트의 지역 state에 저장한다.
    + 예를 들어서 섭씨 입력 필드에 37을 입력하면, Calculator 컴포넌트의 state는 다음과 같이 변경된다.
        ```
            {
                temperature: '37',
                scale: 'c'
            }
        ```
    + 이후에 화씨 입력 필드의 값을 212로 수정하면 Calculator의 state는 다음과 같이 변경된다.
        ```
            {
                temperature: '212',
                scale: 'f'
            }
        ```
    + 두 입력 필드에 모두 값을 저장하는 일도 가능했지만 결국은 불필요한 작업이다.
    + 가장 최근에 변경된 입력값과 그 값의 단위를 저장하는 것만으로도 충분하다.
    + 그리고 현재의 temperature와 scale에 기반해 다른 필드의 값을 추론할 수 있다.
    + 두 입력 필드의 값이 동일한 state로부터 계산되기 때문에 이 둘은 항상 동기화된 상태를 유지하게 된다.
#### 합성 (Composition) vs 상속 (Inheritance)
+ React는 강력한 합성 모델을 갖고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋다.
+ 이번 문서에서는 React를 처음 접한 개발자들이 종종 상속으로 인해 부딪히는 몇 가지 문제들과 합성을 통해 이러한 문제를 해결하는 방법을 살펴본다.
1. 컴포넌트에 다른 컴포넌트 담기
    + 컴포넌트들 중에는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.
    + 범용적인 ‘박스’ 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있다.
    + 이러한 컴포넌트에서는 특수한 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.
    + 이러한 방식으로 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달할 수 있다.
    + <FancyBorder> JSX 태그 안에 있는 엘리먼트가 FancyBorder 컴포넌트의 childrenprop으로 전달된다.
    + FancyBorder는 {props.children}을 <div> 안에 렌더링하므로 전달된 엘리먼트들이 최종 출력된다.
    + 흔하진 않지만 종종 컴포넌트에 여러 개의 “자리(holes)”가 필요할 수도 있습니다. 이런 경우에는 children 대신 자신만의 고유한 방식을 적용할 수도 있다.
    + <Contacts />와 <Chat />같은 React 엘리먼트는 단지 객체이기 때문에 다른 데이터처럼 prop으로 전달할 수 있다.
    + 이러한 접근은 다른 라이브러리의 “슬롯 (slots)“과 비슷해보이지만, React에서 prop으로 전달할 수 있는 것에는 제한이 없다.
2. 특수화
    + 경우에 따라 어떤 컴포넌트는 “특수한 경우”를 고려해야 하는 경우가 있습니다. 예를 들어, WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있다.
    + React에서는 이 역시 합성을 통해 해결할 수 있다.
    + 더 “구체적인” 컴포넌트가 “일반적인” 컴포넌트를 렌더링하고 props를 통해 내용을 구성한다.
3. 그렇다면 상속은?
    + Facebook에서는 수천 개의 React 컴포넌트를 사용하지만, 컴포넌트를 상속 계층 구조로 작성을 권장할만한 사례를 아직 찾지 못했다.
    + props와 합성은 명시적이고도 안전한 방법으로 컴포넌트의 모양과 동작을 커스터마이징하는데 필요한 모든 유연성을 제공한다
    + 컴포넌트가 원시 타입의 값, React 엘리먼트 혹은 함수 등 어떠한 props도 받을 수 있다는 것을 기억하자.
    + UI가 아닌 기능을 여러 컴포넌트에서 재사용하기를 원한다면, 별도의 JavaScript 모듈로 분리하는 것이 좋다.
    + 컴포넌트에서 해당 함수, 객체, 클래스 등을 import 하여 사용할 수 있다.
#### React로 사고하기
+ React는 JavaScript로 규모가 크고 빠른 웹 애플리케이션을 만드는 가장 좋은 방법이다.
+ React는 Facebook과 Instagram을 통해 확장성을 입증했다.
+ React의 가장 멋진 점 중 하나는 앱을 설계하는 방식이다
+ 이 문서를 통해 React로 상품들을 검색할 수 있는 데이터 테이블을 만드는 과정을 함께 생각해 보자.
1. UI를 컴포넌트 계층 구조로 나누기
    + 우리가 할 첫 번째 일은 하위 컴포넌트를 포함한 모든 컴포넌트의 주변에 박스를 그리고 그 각각에 이름을 붙인다.
    + 디자이너와 함께 일한다면, 이것들을 이미 정해두었을 수 있으니 한번 대화해 보자! 디자이너의 Photoshop 레이어 이름이 React 컴포넌트의 이름이 될 수 있다.
    + 하지만 어떤 것이 컴포넌트가 되어야 할지 어떻게 알 수 있을까?
        + 우리가 새로운 함수나 객체를 만들 때처럼 만들면 된다.
        + 한 가지 테크닉은 단일 책임 원칙이다.
        + 이는 하나의 컴포넌트는 한 가지 일을 하는게 이상적이라는 원칙이다.
        + 하나의 컴포넌트가 점점 커지게 된다면 보다 작은 하위 컴포넌트로 분리하는 것이 바람직하다.
    + 주로 JSON 데이터를 유저에게 보여주기 때문에, 데이터 모델이 적절하게 만들어졌다면, UI(컴포넌트 구조)가 잘 연결될 것이다.
    + 이는 UI와 데이터 모델이 같은 인포메이션 아키텍처(information architecture)를 갖는 경향이 있기 때문이다.
    + 각 컴포넌트가 데이터 모델의 한 조각을 나타내도록 분리해 준다.
2. React로 정적인 버전 만들기
    + 이제 컴포넌트 계층구조가 만들어졌으니 앱을 실제로 구현해 보자.
    + 가장 쉬운 방법은 데이터 모델을 가지고 UI를 렌더링은 되지만 아무 동작도 없는 버전을 만들어보는 것이다.
    + 이처럼 과정을 나누는 것이 좋은데, 정적 버전을 만드는 것은 생각은 적게 필요하지만 타이핑은 많이 필요로 하고, 상호작용을 만드는 것은 생각은 많이 해야 하지만 타이핑은 적게 필요로 하기 때문이다.
    + 정적 버전
        + 데이터 모델을 렌더링하는 컴포넌트를 만들고 props 를 이용해 데이터를 전달해 준다.
        + props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법이다.
        + 정적 버전을 만들기 위해 state를 사용하지 말자.
        + state는 오직 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용한다.
        + 우리는 앱의 정적 버전을 만들고 있기 때문에 지금은 필요하지 않다.
    + 앱을 만들 때 하향식(top-down)이나 상향식(bottom-up)으로 만들 수 있다.
    + 다시 말해 계층 구조의 상층부에 있는 컴포넌트 (즉 FilterableProductTable부터 시작하는 것)부터 만들거나 하층부에 있는 컴포넌트 (ProductRow) 부터 만들 수도 있다.
    + 간단한 예시에서는 보통 하향식으로 만드는 것이 쉽지만, 프로젝트가 커지면 상향식으로 만들고 테스트를 작성하면서 개발하는 것이 더 쉽다.
    + 이 단계가 끝나면 데이터 렌더링을 위해 만들어진 재사용 가능한 컴포넌트들의 라이브러리를 갖게 된다.
    + 현재는 앱의 정적 버전이기 때문에 컴포넌트는 render() 메서드만 가지고 있다.
    + 계층구조의 최상단 컴포넌트 (FilterableProductTable)는 prop으로 데이터 모델을 받는다.
    + 데이터 모델이 변경되면 ReactDOM.render()를 다시 호출해서 UI가 업데이트 된다.
3. UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기
    + UI를 상호작용하게 만들려면 기반 데이터 모델을 변경할 수 있는 방법이 있어야 한다.
    + React에서는 이를 state를 통해 변경한다.
    + 애플리케이션을 올바르게 만들기 위해서는 애플리케이션에서 필요로 하는 변경 가능한 state의 최소 집합을 생각해보아야 한다.
    + 애플리케이션이 필요로 하는 가장 최소한의 state를 찾고 이를 통해 나머지 모든 것들이 필요에 따라 그때그때 계산되도록 만드는 것이다.
    + 예를 들어 TODO 리스트를 만든다고 하면, TODO 아이템을 저장하는 배열만 유지하고 TODO 아이템의 개수를 표현하는 state를 별도로 만들지 않는다. TODO 갯수를 렌더링해야한다면 TODO 아이템 배열의 길이를 가져오면 된다.
    + 예시 애플리케이션 내 데이터들을 생각해보자. 애플리케이션은 다음과 같은 데이터를 가지고 있다.
        + 제품의 원본 목록
        + 유저가 입력한 검색어
        + 체크박스의 값
        + 필터링 된 제품들의 목록
    + 각각 살펴보고 어떤 것이 state가 되어야 하는 지 살펴본다.
    + state의 대상은 다음의 세 가지 질문을 통해 결정할 수 있다.
        + 부모로부터 props를 통해 전달됩니까?
        + 시간이 지나도 변하지 않습니까?
        + 컴포넌트 안의 다른 state나 props를 가지고 계산 가능합니까?
    + 위 세 가지 질문 중에서 하나라도 yes이면 state가 아니다.
    + 제품의 원본 목록은 props를 통해 전달되므로 state가 아니다.
    + 검색어와 체크박스는 state로 볼 수 있는데 시간이 지남에 따라 변하기도 하지만, 다른 것들로부터 계산될 수 없기 때문이다.
    + 그리고 마지막으로 필터링된 목록은 state가 아니다. 제품의 원본 목록과 검색어, 체크박스의 값을 조합해서 계산해낼 수 있기 때문이다.
    + 결과적으로 애플리케이션은 다음과 같은 state를 갖는다.
        + 유저가 입력한 검색어 와 체크박스의 값
4. State가 어디에 있어야 할 지 찾기
    + 앞서 최소한으로 필요한 state가 뭔지 찾아냈다.
    + 다음으로는 어떤 컴포넌트가 state를 변경하거나 소유할지 찾아야 한다.
    + 어떤 컴포넌트가 어떤 state를 가져야 하는 지 바로 결정하기 어려울 수도 있다. 많은 초보 개발자가 이 부분을 가장 어려워한다. 아래 과정을 따라 결정해 보자.
    + 애플리케이션이 갖는 각각의 state에 대해서
        + state를 기반으로 렌더링하는 모든 컴포넌트를 찾는다.
        + 공통 소유 컴포넌트 (common owner component)를 찾는다.(계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트).
        + 공통 혹은 더 상위에 있는 컴포넌트가 state를 가져야 한다.
        + state를 소유할 적절한 컴포넌트를 찾지 못했다면, state를 소유하는 컴포넌트를 하나 만들어서 공통 오너 컴포넌트의 상위 계층에 추가한다.
5. 역방향 데이터 흐름 추가하기
    + 지금까지 우리는 계층 구조 아래로 흐르는 props와 state를 이용해서 앱을 만들었다.
    + 이제 다른 방향의 데이터 흐름을 만들어볼 시간이다.
    + 계층 구조의 하단에 있는 폼 컴포넌트에서 FilterableProductTable의 state를 업데이트할 수 있어야 한다.
    + React는 전통적인 양방향 데이터 바인딩(two-way data binding)과 비교하면, 더 많은 타이핑을 필요로 하지만 데이터 흐름을 명시적으로 보이게 만들어서 프로그램이 어떻게 동작하는지 파악할 수 있게 도와준다.
    + 4단계의 예시에서 체크하거나 키보드를 타이핑할 경우 React가 입력을 무시하는 것을 확인할 수 있다.
    + 이는 input 태그의 value 속성이 항상 FilterableProductTable에서 전달된 state와 동일하도록 설정했기 때문이다.
    + 우리가 원하는 것이 무엇인지를 한번 생각해 보자.
    + 우리는 사용자가 폼을 변경할 때마다 사용자의 입력을 반영할 수 있도록 state를 업데이트하기를 원한다.
    + 컴포넌트는 그 자신의 state만 변경할 수 있기 때문에 FilterableProductTable는 SearchBar에 콜백을 넘겨서 state가 업데이트되어야 할 때마다 호출되도록 한다.
    + 우리는 input에 onChange 이벤트를 사용해서 알림을 받을 수 있다.
    + FilterableProductTable에서 전달된 콜백은 setState()를 호출하고 앱이 업데이트한다.
#### Hook의 개요
    + Hook은 React 버전 16.8부터 React 요소로 새로 추가되었다.
    + 기존의 Class로 코들르 작성할 필요 없이 Hook을 이용하여 State와 여러가지 React의 기능을 사요할 수 있다.
    + Hook의 특징
        + 선택적 사용 기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook을 사용할 수 있다.
        + 100%이전버전과의 호환성 Hook은 호환성을 깨뜨리는 변화가 없다.
        + 현재 사용 가능 Hook은 배포 v16.8.0 에서 사용할 수 있다.
## [ 12월 01일]
 > + State와 생명주기
 > + 이벤트 처리하기
 > + 조건부 렌더링
### 학습내용
#### State와 생명주기
1. 생명주기 메서드를 클래스에 추가하기
    + Clock이 처음 DOM에 렌더링 될 때 마다 타이머를 설정하려고 합니다.이것은 React에서 "마운팅"이라고 합니다
    + Clock에 의해 생성된DOM이  삭제될 때 마다 타이머를 해제하려고 합니다.이것은 React에서 "언마운팅"이라고 합니다
    + 컴포넌트 클래스에서 특별한 메서드를 선언하여 컴포넌트가 마운트되거나 언마운트 될 때 일부 코드를 작동할 수 있습니다.
    + ComponenetDidMount() 메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
        ```
            componentDidMount() {
              this.timerID = setInterval(
                () => this.tick(),
                1000
              );
            }
        ```
    + componentWillUnmount() 생명주기 메서드 안에 있는 타이머를 분해해 보겠습니다.
        ```
            componentWillUnmount() {
              clearInterval(this.timerID);
            }
        ```
    + 위와 같은 특별한 메서드를 **"생명주기 메서드"** 라고 부릅니다.
    + Clock의 메서드 호출 순서 요약.
        + <Clock />가 ReactDOM.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor를 호출 후 this.state를 초기화합니다.
        + React는 Clock 컴포넌트의 render() 메서드를 호출합니다. 그 다음 React는 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트합니다.
        + Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청합니다.
        + 매초 브라우저가 tick() 메서드를 호출합니다. setState() 호출로 React는 state가 변경된 것을 인지하고 render() 메서드를 다시 호출합니다. React는 이에 따라 DOM을 업데이트합니다.
        + Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출합니다.
2. State를 올바르게 사용하기
    + 직접 State를 수정하지 마세요
        + this.state는 모두 렌덩링된 값을 나타내기 때문에 컴포넌트를 다시 렌더링하지 않습니다.
        + setState()를 이용하여 값을 변경하는것이 좋다.
    + State 업데이트는 비동기적일 수도 있습니다.
        + React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있습니다.
        + 하지만 this.props와 this.state가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안 됩니다.
        + 이럴때는 객체보다 함수를 인자로 사용하는 setState()를 사용하면 됩니다.
    + State 업데이트는 병합됩니다
        + setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합합니다.
        + 병합은 얕게 이루어지기 때문에 this.setState({comments})는 this.state.posts에 영향을 주진 않지만 this.state.comments는 완전히 대체됩니다.
3. 데이터는 아래로 흐릅니다.
    + 부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 또는 무상태인지 알 수 없어 state는 종종 로컬 또는 캡슐화라고 불립니다.
    + 컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있습니다.
        ```
            <FormattedDate date={this.state.date} />
        ```
    + FormattedDate 컴포넌트는 date를 자신의 props로 받을 것이고 이것이 Clock의 state로부터 왔는지, Clock의 props에서 왔는지, 수동으로 입력한 것인지 알지 못합니다.
        ```
            function FormattedDate(props) {
              return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
            } 
        ```
    + 일반적으로 이를 “하향식(top-down)” 또는 “단방향식” 데이터 흐름이라고 합니다.
    + **React 앱에서 컴포넌트가 유상태 또는 무상태에 대한 것은 시간이 지남에 따라 변경될 수 있는 구현 세부 사항으로 간주합니다.**
    + **유상태 컴포넌트 안에서 무상태 컴포넌트를 사용할 수 있으며, 그 반대 경우도 마찬가지로 사용할 수 있습니다.**
#### 이벤트 처리하기
1. React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사합니다. 몇 가지 문법 차이는 다음과 같습니다.
    + React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용합니다.
    + JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달합니다.
    + React에서는 false를 반환해도 기본 동작을 방지할 수 없기 때문에, 반드시 preventDefault를 명시적으로 호출해야 합니다.
    + React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없습니다. 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 됩니다.
2. 이벤트 핸들러에 인자 전달하기
    + 루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적입니다. 예를 들어, id가 행의 ID일 경우 다음 코드가 모두 작동합니다.
        ```
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
        ```
    + 위 두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용합니다.
    + 화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달됩니다.
#### 조건부 렌더링
1. React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있습니다. 이렇게 하면 애플리케이션의 상태에 따라서 컴포넌트 중 몇 개만을 렌더링할 수 있습니다.
    + React에서 조건부 렌더링은 JavaScript에서의 조건 처리와 같이 동작합니다.
    + if 나 조건부 연산자 와 같은 JavaScript 연산자를 현재 상태를 나타내는 엘리먼트를 만드는 데에 사용하세요.
    + 그러면 React는 현재 상태에 맞게 UI를 업데이트할 것입니다.
    + [예시](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)
2. 엘리먼트 변수
    + 엘리먼트를 저장하기 위해 변수를 사용할 수 있습니다. 출력의 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링 할 수 있습니다.
    + [예시](https://codepen.io/gaearon/pen/QKzAgB?editors=0010)
    + 변수를 선언하고 if를 사용해서 조건부로 렌더링 하는 것은 좋은 방법이지만 더 짧은 구문을 사용하고 싶을 때가 있을 수 있습니다.
    + 여러 조건을 JSX 안에서 인라인(inline)으로 처리할 방법 몇 가지를 아래에서 소개하겠습니다.
3. 논리 && 연산자로 If를 인라인으로 표현하기
    + JSX 안에는 중괄호를 이용해서 표현식을 포함 할 수 있습니다. 그 안에 JavaScript의 논리 연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있습니다.
    + [예시](https://codepen.io/gaearon/pen/ozJddz?editors=0010)
    + JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됩니다.
    + 따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 조건이 false라면 React는 무시하고 건너뜁니다.
4. 조건부 연산자로 If-Else구문 인라인으로 표현하기
    + 엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인 condition ? true: false를 사용하는 것입니다.
        ```
            render() {
          const isLoggedIn = this.state.isLoggedIn;
          return (
            <div>
              The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
            </div>
          );
        }
        ```
5. 컴포넌트가 렌더링하는 것을 막기
    + 가끔 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 있을 수 있습니다. 이때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있습니다.
    + [예시](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)
## [ 11월 24일]
 > + React 시작하기
 > + React의 주요 개념

### 학습내용
1. [React 시작하기](https://ko.reactjs.org/docs/getting-started.html#learn-react)
    + Act.1 React 시도해보기
        + React는 처음부터 점진적으로 적용할 수 있도록 설계되었으며 **필요한 만큼 React를 사용할 수 있습니다.**
        + React의 간단한것은 온라인 코드 편집기 이용으로도 충분합니다.
        + 자신의 HTML페이지에 추가하고 싶으면 처음에는 CDN링크를 이용하여 간단한 기능을 추가하는것도 추천합니다.
    + Act.2 React 배우기
        + React 홈페이지에는 직접 구현하면서 학습하는 **실용적인 자습서**와 개념을 단계적으로 익히는 **주요 개념 가이드**로 이루어져 있습니다.
        + 만약 React의 문서가 어렵게 느껴진다면 Tania Rasica가 쓴 [React의 개요](https://www.taniarascia.com/getting-started-with-react/)를 먼저 보고 오시는 것을 추천합니다.
        + 주요 개념이 익숙해졌고 다음 단계의 React를 학습하려는 사람들에게는 일반적으로 사용되지 않는 React 기능을 다루는 **고급 개념**과 **API 참조**를 보시면 됩니다.
        + 트위터의 reactjs 계정을 보시면 최신 React 소식을 접할수 있습니다.
        + 혹시 문서가 이상하다고 생각이 들면 공식 계정으로 트윗을 하여 개선단계에 참여할수 있습니다.
2. [React의 주요 개념](https://ko.reactjs.org/docs/hello-world.html)
    + Act.1 [Hello World](https://ko.reactjs.org/docs/hello-world.html)
        + 가장 단순한 React 예시입니다.
            ```
                ReactDOM.render(
                  <h1>Hello, world!</h1>,
                  document.getElementById('root')
                );
            ```
        + 이 코드는 "Hello, world!"라는 제목을 보여줍니다.
        + React는 JavaScript 라이브러리이며, 따라서 JavaScript 언어에 대한 기본적인 이해가 필요합니다.
        + 자신이 없다면 [JavaScript 튜토리얼 살펴보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript)를 통해 자신이 어느정도 수준인지 파악 후 들어가길 권장합니다.
    + Act.2 [JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)
        + JSX란 JavaScript를 확장한 문법입니다, JSX의 간단한 코드를 예시로 어떤 형태롤 가지는지 알고 가는것이 좋습니다.
            ```
                const element = <h1>Hello, world!</h1>;
            ```
        + [JSX에 표현식 포함하기](https://ko.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)
        + [JSX도 표현식입니다.](https://ko.reactjs.org/docs/introducing-jsx.html#jsx-is-an-expression-too)
            + JSX도 JavaScript기반이기 때문에 JavaScript 객체로 인식하여 if구문 및 for loop안에 사용이 가능합니다.
        + [JSX 속성 정의](https://ko.reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)
            + Attribute에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.
            + 중괄호를 사용하여 Attribute에 JavaScript 표현식을 삽입할 수도 있습니다.
            + 이 두 방법은 동일한 Attribute에 동시에 사용하면 안됩니다.
        + [JSX로 자식 정의](https://ko.reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)
            + 태그가 비어있다면 XML처럼 />를 이용해 닫아주어야 합니다.
        + [JSX는 객체를 표현합니다.](https://ko.reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)
             + Babel은 JSX를 React.createElement() 호출로 컴파일합니다.
    + Act.3 [DOM에 엘리먼트 렌더링하기](https://ko.reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom)
        + React 엘리먼트를 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 됩니다.
            ```
                const element = <h1>Hello, world</h1>;
                ReactDOM.render(element, document.getElementById('root'));
            ```
        + 마찬가지로 엘리먼트의 업데이트도 새 엘리먼트를 생성 후 ReactDOM.render()로 전달하는 것입니다.
    + Act.4 [Components와 Props](https://ko.reactjs.org/docs/components-and-props.html)
        + 컴포넌트는 함수 컴포넌트와 클래스 컴포넌트가 있다.
        + 컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것입니다.
        + 컴포넌트의 이름은 항상 대문자로 시작합니다.
            + React는 소문자로 시작하는 컴포넌트를 DOM태그로 처리하기 때문이다.
        + [컴포넌트 합성](https://ko.reactjs.org/docs/components-and-props.html#composing-components)
            + 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있습니다.
            + 예를 들어 Welcome을 여러번 렌더링하는 App 컴포넌트를 만들 수 있습니다.
                ```
                    function Welcome(props) {
                      return <h1>Hello, {props.name}</h1>;
                    }

                    function App() {
                      return (
                        <div>
                          <Welcome name="Sara" />
                          <Welcome name="Cahal" />
                          <Welcome name="Edite" />
                        </div>
                      );
                    }

                    ReactDOM.render(
                      <App />,
                      document.getElementById('root')
                    );
                ```
            + 코드 실행은 [Codepen](https://codepen.io/pen?&editors=0010)에서도 가능하다.
        + [컴포넌트 추출](https://ko.reactjs.org/docs/components-and-props.html#extracting-components)
    + Act.5 [State와 생명주기](https://ko.reactjs.org/docs/state-and-lifecycle.html)
        + [함수에서 클래스로 변환하기](https://ko.reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
            1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성합니다.
            2. render()라고 불리는 빈 메서드를 추가합니다.
            3. 함수의 내용을 render() 메서드 안으로 옮깁니다.
            4. render() 내용 안에 있는 props를 this.props로 변경합니다.
            5. 남아있는 빈 함수 선언을 삭제합니다.
                ```
                    class Clock extends React.Component {
                      render() {
                        return (
                          <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                          </div>
                        );
                      }
                    }
                ```
        + [클래스에 로컬 State 추가하기](https://ko.reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
            1. **render()** 메서드 안에 있는 **this.props.date**를 **this.state.date**로 변경합니다.
                ```
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                ```
            2. 초기 **this.state**를 지정하는 class **constructor**를 추가합니다.
                ```
                  constructor(props) {
                      super(props);
                      this.state = {date: new Date()};
                    }
                ```
                + 클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야 합니다.
            3. <Clock /> 요소에서 date prop을 삭제합니다.
                ```
                    ReactDOM.render(
                      <Clock />,
                      document.getElementById('root')
                    );
                ```
            + 완성된것은 [Codepen](https://codepen.io/gaearon/pen/KgQpJd?editors=0010)에서 확인 가능하다.
            + 함수에서 클래스로 변환, 클래스에서 로컬 state를 추가한 코드를 비교해가며 변화한것을 공부하면 좋을것 같다.
## [ 11월 17일]
 > + react 배우기(TODO List부터)

 ### 학습내용
 1. react 배우기 (TODO List부터)
    + 1.Todo List
        + TodoApp과 TodoList 두 개의 컴포넌트로 구성
        + handleChange는 모든 키보드 입력마다 React의 state를 갱신해서 보여준다. (element에서 확인 가능하다.)
        + 시간순으로 보면 다음과 같이 동작한다.
            + 유저입력 > handleChange > React의 state 갱신 > form element가 React의 state를 참조
        + 유저 입력을 강제로 대문자로 변경할 경우에도 사용한다.
            ```
                handleChange(event) {
                this.setState({value: event.target.value.toUpperCase( )})
                }
            ```
        + handleSubmit은 버튼이 클릭될 때 발생하는 event를 처리한다.
        + render( )메소드 에서 초기 렌더링을 실행한다.
        + onChange를 통해 input에 입력되는 값으로 state 상태 변경을 준비한다.
        + 입력된 값은 state의 "text: '' "에 임시로 저장된다.
        + lavel의 htmlFor은 input과의 연결을 위한 id값이다.
            + className처럼 html과 구분하기 위해 JSX에서 사용하는 키워드이다.
        + 버튼을 클릭하면 버튼의 숫자를 증가시킨다.
        + 리스트는 배열로 저장되기 때문에 item.length를 통해 list의 수를 확인한다.
        + input area에 이벤트가 발생하면 handleChange(e)가 동작하여 State의 text값을 변경한다.
        + “Add #x”버튼을 클릭하면 리스트의 item.length에 1을 더해서 버튼에 출력한다.
        + 크롬 DevTool을 열어 실시간으로 state가 변화하는 것을 확인한다.
        + 이제 handleSubmit 메소드에 대해 살펴본다. 제일 중요한 것은 preventDefault 메소드를 사용하는 이유이다.
    + 2.handleSubmit(e)에서 e.preventDefault() 메소드를 사용하는 이유는?
        + 브라우저에서 양식을 제출할 때는 기본적으로 브라우저의 새로 고침이 발생하는데,React나 SPA(single page application)의 경우 필요 없는 동작임으로 이를 방지하기위해 사용한다.
    + 3.TodoList Component
        + TodoList class를 생성한다.
        + ul 안에 추가된 task를 li로 출력한다.
        + 앞서 저장한 id값은 key props로 사용한다.
        + 마지막으로 ReactDOM으로 렌더링만 하면 끝난다.
    + 4.혹시 Key props의 역할이 기억나지 않는다면?
        + key는 props의 안정적으로 사용할 수 있도록 고유성을 부여하기 위해 필요하다.
        + React가 어떤 props를 변경, 추가 또는 삭제할지 식별하는 것을 도와준다.
        + 반드시 date를 사용하지 않아도된다. 배열의 index값을 사용해도 된다.
        + 유일한 값이라면 그 값이 무엇이든 상관없다.
    + 5.외부 플러그인을 사용하는 컴포넌트
        + 외부컴포넌트를 사용한 markdown 에디터 이다.
        + 현재 1~3의 예제를 CDN방법으로 진행했음으로 동일하게 진행한다.
        + 다만 외부 플러그인은 Remarkable을 사용함으로 CDN으로 링크를 추가한다.
        + remarkable.js로 검색해야 찾을 수 있다.
            ```
            https://github.com/jonschlinkert/remarkable
            ```
        + 사이트에서 제공하는 CDN사이트 2곳 중 한 곳에서 링크를 복사해 추가한다.
        + 공식사이트의 소스코드를 복사해 넣는다.
        + 테스트 한다.
        + 하지만 실행이 되지 않는다.
            + cdn방식으로는 import가 불가능하여 commonjs방식을 이용하여 모듈을 가져와야 하지만 commonjs방식으로는 브라우저에서 모듈을 가져올수 없기 때문에 실행되지 않는다.
    + 6.creat-react-app으로, Remarkable 사용하기
        + creat-react-app으로 markdown-editor 프로젝트를 생성한다.
        + 정상 동작을 확인하다.
        + App.js에 있는 필요없는 코드를 삭제한다.
        + App.js에 문서의 코드를 복사해 넣는다.
        + component의 이름을 App으로 수정한다.
        + rendering은 index.js에 위임한다.
        + Remarkable을 설치한다.
        + React와 Remarkable을 import한다.
        + 동작이 되는지 확인한다.

## [ 11월 10일]
> + 영화 앱 깃허브에 배포하기
> + react 배우기
### 학습내용
1. 영화 앱 깃허브에 배포하기
    + Act.1 package.json 파일을 열어 homepage 키와 키값을 browserslist 키 아래에 추가한다.
         + 깃 허브 계정과 저장소 이름에 주의 [ https://계정.github.io/저장소 이름 ]
    + Act.2 package.json 파일에 scripts 키값으로 명령어를 추가한다.
    + Act.3( git add. / git commit -m "" / git push origin master )의 명령어를 사용하여 깃허브에 업로드
    + Act.4 ( npm install gh-pages )의 명령어를 사용하여 gh-pages를 설치한다.
    + Act.5 ( git remote -v )의 명령어를 입력하여 업로드한 깃허브 저장소의 주소를 확인한다.
    + Act.6 ( npm run deploy )의 명령어를 입력하여 영화 앱을 배포한다.
    + Act.7 URL에 'https://계정.github.io/저장소 이름'을 입력해서 확인한다.
2. react배우기
    + React의 특징
        + 상호작용이 많은 UI개발에 적합하다
        + 컴포넌트 로직은 JavaScript로 작성한다.
        + 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.
        + DOM과는 별개로 상태를 관리할 수 있다.
        + 기술 스택의 나머지 부분에는 관여하지 않는다.
        + 기존 코드와 별개로 개발이 가능하다.
        + React Native를 이용하면 모바일 앱도 만들 수 있다.
    + CDN: Content Delivery Network 또는 Content Distribution Network
    + CORS: 특정 헤더를 통해서 브라우저에게 원 출처(origin) 에서 실행되고 있는 웹 애플리케이션이  다른 출처(cross-origin)에 원하는 리소스에 접근할 수 있는 권한이 있는지 없는지를 알려주는 메커니즘이다
    + Babel: ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과  호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스  JavaScript 트랜스 컴파일러이다.
    + React 시작해보기
        + Act.1 index.html 만들기
            + 새로운 디렉토리를 만들어 새로운 html파일을 만들어본다.
        + Act.2 CDN 링크 추가하기
            + index.html의 header부분에 아래 스크립트 코드를 추가하기.
                ```
                    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
                    <script crossorigin src="..."></script>
                ```
        + Act.3 JSX 링크 추가하기
            + 위 링크만 추가하면 작동이 되지 않기 때문에 JSX 스크립트 코드를 추가해준다.
                ```
                    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                ```
        + Act.4 간단한 컴포넌트 추가하기
            + React 홈페이지의 Component를 복사하여 헤더에 Script 추가 후  body의 div태그와 id속성을 부여하여 작동해보기
            + 작동이 안되면 Script에 "type=text/babel"을 추가하기
        + Act.5 상태를 가지는 컴포넌트 추가
            + 위와 똑같은 방법으로 Component 복사 후 작동해보기
## [ 11월 03일]
 > + 네비게이션 만들어 보기
 > + 영화 상세 정보 기능 만들어 보기
 > + 리다이렉트 기능 만들어 보기
### 학습내용
1. 네비게이션 만들어 보기
    + Act.1 Navigation 컴포넌트 만들기
        ```
            function Navigation() {
                return(
                    <div>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    </div>
                )
            }

            export default Navigation
        ```
    + Act.2 Navigation 컴포넌트 App 컴포넌트에 포함 시키기
        ```
            import Navigation from "./components/Navigation"
        ```
    + Act.3 Home 링크 눌러 보기
        + home링크를 눌러보면 react가 죽고 새 페이지가 로딩되는 문제 발견
    + Act.4 a 태그 Link 컴포넌트로 바꾸기
        + Link를 react-router-dom으로 import후 a -> Link 로 href -> to 로 수정한다.
    + Act.5 Navigation 컴포넌트 위치 다시 확인하기
        + HashRouter안에 Navigator가 있게 배치해준다.
    + Act.6 Navigation 컴포넌트 스타일링하기
        + Navigation.css를 만든후 Navigation.js에 import 해준다.
2. 영화 상세 정보 기능 만들어 보기
    + Act.1 route props 살펴보기
        + console.log를 이용해 About으로 어떤 props가 전달되는지 확인한다.
    + Act.2 route props에 데이터 담아 보내기
        ```
            {{ pathname: '/about', state: {fromNavigation:true}}}
        ```
    + Act.3 route props 다시 살펴 보기
    + Act.4 Navigation 컴포넌트 정리하기
        + 위에서 수정한 코드를 원래대로 돌려놓자.
    + Act.5 Movie 컴포넌트에 Link 컴포넌트 추가하기
        + Movie.js에 Link 컴포넌트를 추가한 후 to props를 작성한다.
    + Act.6 Detail 컴포넌트 만들기
        + routes 폴더 안에 Detail.js를 만든후 안의 코드를 작성한다.
    + Act.7 Route 컴포넌트 추가하기
        + App.js에 Detail.js를 import하고 Detail을 뿌려주도록 코드를 작성한다.
    + Act.8 영화 카드를 눌러 /movie-detail로 이동한 다음 영화 데이터 확인하기
        + 영화 카드를 누르면 /movie-detail로 이동이 되고 개발자 모드로 들어가 console을 확인하면 받은값이 들어와있다.
    + Act.9 /movie-detail로 바로 이동하기
        + 영화카드가 아닌 주소창으로 들어오면 화면의 hello는 보이나 console값에는 아무것도 나오지 않았다.
        + console값에 movie-detail의 static값은 undefined로 보인다.
3. 리다이렉트 기능 만들어 보기
    + Act.1 History 키 살펴보기
        + 아무 영화를 클릭하여 이동후 console을 통해 history를 확인
        + componentDidMount() 생명주기 함수를 사용해 Detail 컴포넌트가 마운트될 때 push()함수를 실행하도록 한다.
    + Act.2 Detail 컴포넌트 클래스형 컴포넌트로 변경하기
        + Detail 컴포넌트를 함수형에서 클래스형으로 변경한 후 location, history키를 구조 분해 할당한다.
            ```
                class Detail extends React.Component{
                    componentDidMount() {
                        const { location,history } = this.props
                    }
                    render (){
                        return(
                        <span>hello</span>
                        )
                    }
                }
            ```
    + Act.3 push() 함수 사용하기
        + location.state가 undefined인 경우 history.push('/')를 실행하도록 코드를 작성한다.
    + Act.4 리다이렉트 기능 확인해 보기
        + home 화면에서 주소창에 /movie-detail를 입력하여 home화면으로 돌아가는지 확인해본다.
    + Act.5 영화 제목 출력하기
        + span 내부에 "{ location.state.title }"를 입력하여 영화 제목을 출력한다.
    + Act.6 /movie-detail로 바로 이동하기
        + home 화면에서 주소창에 /movie-detail를 입력하면 오류가 발생한다.
        + componentDidMount() 생명주기 함수를 사용하는데 주소를 통해 이동하면 render함수가 작동하질 못하여 redirect가 작동을 안함.
        + 따라서 값이 없으면 null값을 return하게 코드를 수정한다.
    + Act.7 location.state 확인하기
        + 다시 home화면에서 /movie-detail로 이동해 home으로 이동하는지 확인해보기.
## [ 10월 27일]
> + 영화 앱 전체 모습 수정하기(Act.6 부터 시작함)
> + 영화 앱 멋지게 스타일링하기
> + react-router-dom 설치하고 프로젝트 폴더 정리하기
> + 라우터 만들어 보기
### 학습내용
1. 영화 앱 전체 모습 수정하기
    + Act.6 영화 장르 출력하기
        + movie 컴포넌트 내부에 장르가 출력되도록 코드를 수정한다.
            ```
                <ul className="movie-genres">
                {genres.map((genre) => {        <!--장르가 배열이므로 map함수를 이용해 출력-->
                    return <li className="movie-genre">{genre}</li>
                })}
                </ul>
            ```
        + console을 확인하면 Key props가 없다는 내용을 확인.

            ![a](https://user-images.githubusercontent.com/79895970/139568226-54bcc5ea-fab7-4d36-8271-8ad83b6beb1c.png)
    + Act.7 li tag에 key props 추가하기
        + li tag에 index로 key값을 추가한다.
2. 영화 앱 멋지게 스타일링하기
    + Act.1 App.css 수정하기
    + Act.2 Movie.css 수정하기
    + Act.3 시놉시스 180자로 제한하기
        + slice를 이용해 summary부분을 180자로 제한하자
    + Act.4 영화 앱 제목 살펴보기
    + Act.5 영화 앱 제목 바꾸기
        + index.html에 들어가 제목을 Movie App으로 변경하자
3. react-router-dom 설치하고 프로젝트 폴더 정리하기
    + Act.1 react-router-dom 설치하기
        ```
            npm install react-router-dom
        ```
    + Act.2 components 폴더에 Movie 컴포넌트 옮기기
    + Act.3 routes 폴더에 라우터가 보여줄 화면 만들기
    + Act.4 Home.js 수정하기
        + App.js내용을 Home.js로 복사하고 컴포넌트 이름을 Home으로 수정한다.
        + Home.css를 생성하고 Home.js에 import한다.
    + Act.5 Home.css 만들기
        + Home.css는 교재의 내용을 그대로 사용한다.
    + Act.6 App.js 수정하기
4. 라우터 만들어 보기
    + Act.1 HashRouter와 Router컴포넌트
        ```
            import { HashRouter, Route } from 'react-router-dom'
        ```
    + Act.2 Route 컴포넌트에 path, component props 추가하기
        ```
            import About from './routes/About'
        ```
    + Act.3 About.js 수정하기
    + Act.4 라우터 테스트해 보기
    + Act.5 Home 컴포넌트를 위한 Route컴포넌트 추가하기
        ```
            import Home from './routes/Home'
        ```
    + Act.6 라우터 테스트하고 문제 찾아보기
        + 문제점은 Home과 About이 같이 출력함
    + Act.7 라우터 자세히 살펴보기
        + App.js를 수정하고 주소를 바꿔 결과값을 확인해보자
            ```
                <Route path='/home' component={Home}>
                    <h1>Home</h1>
                </Route>
                <Route path='/home/introduction'>
                    <h1>Introduction</h1>
                </Route>                
                <Route path='/about' component={About}>
                    <h1>About</h1>
                </Route>
            ```
        + Introduction을 출력할때 Home도 같이 출력함
        + 순서를 /home/introduction이 아닌 /,/home,/home/introduction 순으로 인식하기 때문
    + Act.8 App 다시 원래대로 돌리기
        + 원래대로 돌려놓고 home에는 exact props를 추가한다
    + Act.9 About.css 작성하기
        + About.css를 작성 후 About.js에 import 하기
            ```
                import './About.css'
            ```

## [ 10월 13일]
 > + 영화 데이터 화면에 그리기(Act.6부터)
 > + Movie 컴포넌트 만들기
 > + 영화 앱 스타일링 하기 - 기초
 > + 영화 앱 전체 모습 수정하기
### 학습내용
1. 영화 데이터 화면에 그리기
    + Act.6 movies state에 영화 데이터 저장하기
        + Act.5에서 console.log부부을 지우고 아래 코드를 입혁해 영화 데이터를 저장한다.
            ```
                this.setState({ movies: movies })
            ```
        + ES6부터 객체의 키와 변수의 이름이 같다면 코드 축약이 가능하다.
        + 따라서 코드를 아래와 같이 수정한다
            ```
                this.setState({movies})
            ```
    + Act.8 isLoading state를 true에서 false로 업데이트하기
        + 영화 데이터를 모두 다운 받았지만 사용자에게 표시가 되지 않는다
        + setState에 코드를 수정해 isLoading을 true에서 false로 바꿔주자
            ```
             this.setState({movies ,isLoading: false});
            ```
2. Movie 컴포넌트 만들기
    + Act.1 Movie 컴포넌트 만들기
        + src 폴더에 Movie.js를 만든후 기본 골격을 만들어준다.
    + Act.2 영화 데이터 다시 살펴보기
        + yts-proxy.now.sh/list_movies.json에 접속하여 필요한 데이터를 골라 영화 앱에 넣는다.
    + Act.3 Movie.propTypes 작성하기
        + PropTypes안에 아래 코드와 같이 작성한다
            ```
                id: PropTypes.number.isRequired,
                year: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                summary: PropTypes.string.isRequired,
                poster: PropTypes.string.isRequired
            ```
    + Act.4 노마드 코더 영화 API 정렬 기능 사용해 보기
        + [yts.lt/api#list_movies]사이트에 들어가서 sort_by 항목의 코드를 확인한다
    + Act.5 axios.get() 수정하기
        + App.js에 axios.get 안에 주소를 [https://yts-proxy.now.sh/list_movies.json?sort_by=rating] 로 수정한다.
    + Act.6 Movie 컴포넌트에서 props를 추가하고 출력해 보기
        + Movie 컴포넌트에서 id, title, year, summary, poster 를 받아 출력할수 있게 수정한다.
            ```
                function Movie({id, title, year,summary,poster})
            ```
    + Act.7 App 컴포넌트에서 Movie컴포넌트 그리기
        + 로딩이 완료되는 자리에 map함수를 사용한다.
    + Act.8 map() 함수에 컴포넌트를 반환하는 함수 전달하기
        + console을 찍는 함수를 먼저 만들어본다.
            ```
                movies.map((movie) => {
                    console.log(movie)
                    return
                })
            ```
    + Act.9 Movie 컴포넌트를 반환하도록 movies.map() 수정하기
        + App.js에 Movie 컴포넌트를 import후 movies.map()에 <Movie />를 반환하도록 한다
    + Act.10 Movie컴포넌트에 props 전달하기
        + map()함수의 return에 아래코드를 적어 props를 전달한다.
            ```
                return (<Movie 
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                />)
            ```
    + Act.11 console탭에서 영화 데이터 확인해 보기
        + 오류는 음식 앱에서 다루었던 내용이다.
    + Act.12 key props 추가하기
        + return 위에 key값을 추가한다.
            ```
                key = {movie.id}
            ```
3. 영화 앱 스타일링 하기 - 기초
    + Act.1 App컴포넌트에 HTML추가하기
        + render안의 return에 HTML을 추가하면 아래와 같은 코드로 수정한다.
            ```
                <section class="container">
                    {isLoading ? (
                        <div class ="loader">
                         <span class="loader-text">'Loading......' </span></div>
                    ) : (
                        <div class="movies">
                        {movies.map((movie) => (
                            <Movie 
                            key = {movie.id}
                            id = {movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summary = {movie.summary}
                            poster = {movie.medium_cover_image}
                        />
                        ))}
                        </div>
                    )}
                </section>
            ```
    + Act.2 Movie컴포넌트에 HTML추가하기
        + function Movie내부에 HTML을 추가한다.
    + Act.3 영화 포스터 이미지 추가하기
        + Act.2와 같은 방법으로 포스터 이미지를 추가하는 HTML을 작성한다.
    + Act.4 Movie 컴포넌트 정리하기
        + id Props가 필요없으니 지워준다
    + Act.5 style속성으로 title 스타일링하기
        + h3 tag에 스타일속성으로 바탕을 빨간색으로 지정한다.
    + Act.6 CSS파일 생성
        + App.css 와 Movie.css파일을 만든다.
    + Act.7 App, Movie 컴포넌트에 CSS 파일 import하기
        + 각각의 파일에 맞는 css를 import 한다
    + Act.8 App.css파일 작성하기
        + App.css 에서 body를 어두운색으로 바꿔본다.
4. 영화 앱 전체 모습 수정하기
    + Act.1 App.cs 내용 모두 지우기
    + Act.2 Movie 컴포넌트에 genres props 넘겨주기
    + Act.3 Movie 컴포넌트 수정하기
        + Movie 컴포넌트에 genres를 넣는다.
    + Act.4 App 컴포넌트 수정하기
        + App.js에 genres를 Movie컴포넌트에 넘길수 있게 수정한다.
        + 수정후 console을 확인해서 오류가 나오는지 확인해본다.
    + Act.5 class 속성 이름 className으로 바꿔 주기
        + class를 className으로 바꿔준다
        + vscode를 사용하면 ctrl+shift+l 로 전체선택 기능을 이용하면 편하다

## [ 10월 06일]
 > + 영화 앱 만들기 워밍업
 > + 영화 API사용해 보기
 > + 영화 데이터 화면에 그리기
### 학습내용
1. 영화 앱 만들기 워밍업
    + Act.1 App 컴포넌트 비우기
        + 지금까지 사용하던 App.js를 따로 백업해주고 새로운 App.js를 만든다
    + Act.2 영화 데이터 로딩 상태 표시해주기
        + state를 선언하고, isLoading키 생성 후 키값을 true로 설정한다.
            ```
                class App extends React.Component{
                    state = {
                        isLoading: true
                    }
                    render(){
                        const { isLoading } = this.state
                        return(
                            <div>
                                {isLoading ?  'Loading......' : 'We are ready'}
                            </div>
                        )
                    }
                }
            ```
    + Act.3 구조분해할당 + 삼항연산자 = 로딩상태 출력
        + 구조분해할당으로 this.state에 있는 isLoading을 상수로 선언하여, 앞으로 this.state를 쓰지 않아도되게 한다.
        + 삼항연산자를 사용해서 isLoading이 true면 'Loading...'을 출력하고,false면 'We are ready'를 출력하게 된다.
    + Act.4 로딩 현상 구현하기
        + setTimeout()함수의 첫 번째 인자는 실행할 함수이고, 두 번째 인자로 전달한 값은 지연시간이다. 즉 두 번째 인자 시간만큼 지난 후 첫번째 인자의 함수를 실행한다
            ```
                componentDidMount(){
                setTimeout( () => {this.setState({ isLoading : false})} , 6000)
                }
            ```
        + ComponentDidMount를 사용한 이유는 생명 주기 함수에서 render 다음으로 실행되는 함수이기 때문이다.
        + 6초 뒤에 'We are ready'가 출력된다
    + Act.5 영화 데이터를 어디에 저장할까?
        + state내부에 movies라는 배열을 만들어 로딩된 데이터를 저장한다.
        + 배열로만드는 이유는 데이터가 여러가지이기 때문이다.
2. 영화 API 사용해 보기
    + Act.1 axios 설치하기
        ```
            npm install axios
        ```
    + Act.2 YTS영화 데이터 API 살펴보기
        + YTS 사이트에 들어가서 API를 가져오기.
    + Act.3 영화 목록 데이터 확인해 보기
        + 아래 주소를 들어가면 JSON 데이터들이 있는것을 확인할 수 있다.
            ```
                [https://yts.mx/api/v2/list_movies.json]
            ```
    + Act.4 JSON Viewer 확장 도구 설치하기
        + 위 주소로 그냥 들어가면 min스타일로 제공되어 보기 불편하다.
        + 확장프로그램 설치후 확인해보기.
    + Act.5 영화 목록 다시 확인해보기
    + Act.6 영화 API를 사용하자
        + 노마드코더 깃허브에서 제공하는 영화 API를 이용해보자.
    + Act.7 영화 정보 더 자세히 살펴보기
        + 주소창에 아래 링크를 입력한다
            ```
                yts-proxy.now.sh/movie_detail.json
            ```
        + 결과는 아무것도 출력되지 않는다. Why?
            + movie_id라는 조건을 요구하기 때문에
            + 위 주소를 다음과 같이 수정해서 접속해보자
                ```
                    yts-proxy.now.sh/list_movies.json?movie_id=10
                ```
            + id가 10인 영화의 자세한 정보를 볼 수 있다.
    + Act.8 영화 API를 영화 앱에서 호출하기
        + axios를 import하고 두번째 줄의 코드를 componentDidMount()에 넣어준다.
            ```
                import axios from "axios"
                axios.get('https://yts-proxy.now.sh/list_movies.json')
            ```
    + Act.9 axios 동작 확인하기
        + network탭을 열고 새로고침(ctrl+f5)를 해준다
    + Act.10 getMovies()함수 기다린 다음, axios.get() 함수가 반환한 데이터 잡기
    + Act.11 getMovies()에 async 붙이고,axios.get()에 await붙이기
        + 아래 코드와 같이 수정을 해준다.
            ```
                getMovies = () => {
                    const movies = axios.get('https://yts-proxy.now.sh/list_movies.json')
                }
            
                componentDidMount(){
                    this.getMovies()
                }
            ```
3. 영화 데이터 화면에 그리기
    + Act.1 console.log() 함수로 영화 데이터 출력해 보기
        + getMovies함수 내부에 console.log를 통해 출력해보기.
    + Act.2 영화 데이터 자세히 살펴보기
    + Act.3 객체에 있는 movies키에 접근하기
        + 필요한 정보를 뽑기 위해서 root를 지정해주자
            ```
                console.log(movies.data.data.movies)
            ```
        + 위 코드와 같이 찍으면 필요한 데이터만 볼수 있다.
    + Act.4 객체에 있는 movies 키에 조금 더 똑똑하게 접근하기
        + 구조분해할당 방법을 사용해 객체에 접근해보자
            ```
                const {
                    data: {
                        data: {movies}
                    }
                } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
            ```
        + 위 코드와 같이 const를 수정해보고 console.log(movies)를 찍어 결과를 확인해보자.
## [ 09월 29일 ]
 > + 음식 앱에 prop-types 도입하기
 > + state로 숫자 증감 기능 만들어 보기
 > + 숫자 증감 기능을 제대로 만들어 보기
 > + 클래스형 컴포넌트의 일생 알아보기
### 학습내용
0. 상대경로 이미지 삽입 방법
    + public 폴더에 images 폴더 생성
    + img src="images/[이미지이름]" 형태로 태그를 작성한다.
1. 음식 앱에 prop-types 도입하기
    + Act.1 음식 데이터에 rating 추가하기
        + foodLike 배열의 각 요소에 rating(평점)을 추가한다.
        + 값의 자료형은 number로 한다.
    + Act.2 prop-type 설치하기
        ```
            npm install prop-types
        ```
    + Act.3 정상 설치 여부 확인하기
        + 설치 확인은 package.json에 가서 dependencies 키에 있는 값을 확인
    + Act.4 prop-types 적용하기
        + App.js 파일 맨 위에 import PropTypes from 'prop-types' 추가하기
    + Act.5 Food.propTypes작성하기
        ```
            Food.PropTypes = {
              name: PropTypes.string.isRequired,
              picture: PropTypes.string.isRequired,
              rating: PropTypes.string.isRequired
            }
        ```
    + Act.6 Food.propTypes의 rating 키 값 확인하기
        + 오류가 나는 이유는 rating의 값을 String으로 지정하였기 때문에
    + Act.7 prop-types 경고 해결하기
        + rating의 자료형을 String형에서 number형으로 교체
    + Act.8 다른 종류의 prop-types 경고 해결하기
        + picture 이름을 image로 교체하면 오류가 발생하며 이미지가 나오지 않음
    + Act.9 코드 원래대로 돌려놓기
    + Act.10 isRequired의 뜻 알아보기
        + rating props는 필수가 아니어도 되는 항목이다.
        + 다만 값이 전달되는 경우 자료형이 number이기는 해야 한다.
2. state로 숫자 증감 기능 만들어 보기
    + Act.1 클래스형 컴포넌트 작성하기
    + Act.2 App클래스가 React.Component클래스를 상속 받도록 하자
        ```
            import React , {Component} from "react";

            class App extends Component{
            
            }

            export default App
        ```
    + Act.3 render() 함수를 사용해보자
        ```
            render(){
                return(
                    <h1>I am a class Component</h1>
                )
            }
        ```
    + Act.4 state 정의하기
        + class 안에 state = {} 라고 작성하여 state를 정의한다.
    + Act.5 state에 count값 추가하고 사용하기
        ```
            state = {
                count: 0
            }
        ```
        ```
            render(){
                return(
                    <h1>The number is: {this.state.count}</h1>
                )
            }
        ```
    + Act.6 버튼으로 count state값 변경하기
        + Add버튼과 Minus 버튼 추가하기
            ```
                <button>Add</button>
                <button>Minus</button>
            ```
        + add 함수 minus 함수 만들기
            ```
                add = () => {
                    console.log("add");
                }
            
                minus = () => {
                    console.log("minus");
                }
            ```
        + 버튼에 onclick 이벤트 추가하기
            ```
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            ```
3. 숫자 증감 기능을 제대로 만들어 보기
    + Act.1 실제 숫자가 증감하도록 함수 수정
        + console을 지우고 아래 코드로 수정
            ```
                this.state.count = 1
            ```
        + state를 직접 변경하지 말라는 오류가 발생한다.
            ```
                this.setState({count: 1})
            ```
        + 버튼을 누르면 단순히 정해둔 숫자로 변하기만 함 => 증감하는 형식으로 코드 변환
            ```
                this.setState({count: this.state.count +1})
            ```
        + 위와 같은 방법으로도 증감은 하지만 성능에 문제가 생길수 있다.
            ```
                this.setState(current => ({count: this.state.count +1}))
            ```
        + 화살표 함수를 이용하여 안정적이게 전달할 수 있도록 수정.
4. 클래스형 컴포넌트의 일생 알아보기
    + Act.1 constructor() 함수 알아보기
        + constructor()는 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다.
        + React.Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하는 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기 때문입니다.
        + React에서는 버전17부터 componentWillMount()를 사용하지 않는다.
            ```
                constructor(props){
                super(props)
                console.log('hello');
                }
            ```
            ```
                render(){
                    console.log('render');
                }
            ```
        + 실행후 console을 확인하면 constructor이 먼저 실행된것을 확인할 수 있다.
    + Act.2 componentDidMount() 함수 알아보기
            ```
                componentDidMount() {
                console.log("componentDidMount");
                }
            ```
        + console을 확인해보면 render()이후에 실행된다.
    + Act.3 componentDidUpdate() 함수 알아보기
            ```
                componentDidUpdate() {
                console.log("componentDidUpdate");
                }
            ```
        + 실행한것으로 console에 찍히지 않으므로 버튼을 클릭한후 console창을 확인.
        + setState() => render() => componentDidUpdate() 순서로 실행된다.
    + Act.4 componentWillUnmount() 함수 알아보기
            ```
                componentWillUnmount() {
                console.log("componentWillUnmount");
                }
            ```
        + 이 함수의 경우는 직접 확인할수 없다. why?
            + 이 함수는 컴포넌트가 화면에서 떠날 때 실행되기 때문에.
## [ 09월 15일 ]
 > + Props
 > + 비슷한 컴포넌트 여러개 만들기
 > + map
### 학습내용
1. props
    + Props란 컴포넌트에서 컴포넌트로 전달하느 데이터를 말한ㄷ. 함수의 매개변수 역할을 하는것이다. 따라서 props를 사용하면 컴포넌트를 효율적으로 사용할수 있다.
    + Act.1 컴포넌트 여러개 사용해보기
        + potato 컴포넌트를 Movie 컴포넌트로 수정하기
            ```
                fuction Movie() {
                    return <h1>I like potato</h1>
                }
            ```
    + Act.2 Movie 컴포넌트를 20개 복사하여 붙여넣기
        ```
            <div>
                <h1>Hello</h1>
                <Movie />
                <!-- Movie 컴포넌트 입력 생략 -->
                <Movie />
            </div>
        ```
    + Act.3 props로 컴포넌트에 데이터 전달하기
        + Movie 컴포넌트의 이름을 Food로 수정 그리고 Movie 컴포넌트를 전부 삭제해준다.
            ```
                function Food() {
                return <h1>I like potato</h1>
                }
            ```
    + Act.4 <Food /> 를 <Food fav="kimchi" />로 수정해본다.
        ```
            function App() {
              return (
                <div >
                  <h1>Hello</h1>
                  <Food fav="kimchi" />
                </div>
              );
            }
        ```
    + Act.5 Food 컴포넌트에 props전달하기.
        ```
            <Food fav="kimchi" something={true} papapapa={['hello',1,2,3,4,true]} />
        ```
    + Act.6 실행하기
        + 아무런 변화가 없다
        
            ![image](https://user-images.githubusercontent.com/79895970/133917132-da7e59c7-178a-447e-9f0e-88f695305fe2.png)
        + 이는 Food컴포넌트에 props를 전달 했을 뿐 아직 사용하지 않았기 때문이다.
    + Act.7 props사용하기
        ```
            function Food(props) {
            console.log(props);
            return <h1>I like potato</h1>;
            }
        ```
    + Act.8 개발자 도구를 실행해서 Console탭을 열어보자.
        + Food컴포넌트에 전달한 props를 속성으로 하는 객체(Object)가 출력된 것을 확인할 수 있다.
            ![image](https://user-images.githubusercontent.com/79895970/133917545-f53d44df-7043-40f6-9461-dab249dbde86.png)
    + Act.9 props 다시 한 번 사용하기.
        + 코드에서 props전달 값 중에서 kimchi만 놔두고 모두 삭제한다.
            ```
                <Food fav="kimchi" />
            ```
        + 결과값을 확인해본다.

            ![image](https://user-images.githubusercontent.com/79895970/133917589-90470bbc-8c9f-4a18-b78c-5e25edb2be21.png)
    + Act.10 ‘props.fav’ 를 중괄호로 감싸서 return값에 적용해 보자.
        + 객체의 특정 값을 사용할 때는 점(.)연산자를 사용한다.
            ```
                function Food(props) {
                return <h1>I like {props.fav}</h1>;
                }
            ```
        + 결과값 확인

            ![image](https://user-images.githubusercontent.com/79895970/133917664-d72328f7-2cd8-474a-882e-a099cbeb3bc6.png)
        + 구조 분해 할당으로 props사용하기
            + 아래 코드와 같이 수정하여 사용하자.
                ```
                    function Food(props) {
                    const { fav } = props
                    return <h1>I like {fav}</h1>;
                    }
                ```
            + 데이터의 개수가 많아지면 구조 분할 할당을 사용하는 것이 편리하다.
    + Act.11 여러 개의 컴포넌트에 props사용하기
        + 앞서서 살펴본 구조 분해 할당을 사용하여 코드를 수정해 보자.
            ```
                function App() {
                  return (
                    <div >
                      <h1>Hello</h1>
                      <Food fav="kimchi" />
                      <Food fav="ramen" />
                      <Food fav="samgiopsal" />
                      <Food fav="chukumi" />
                    </div>
                  );
                }
            ```

                ![image](https://user-images.githubusercontent.com/79895970/133917856-5649471c-f15a-4709-84b4-1f5e99d6c95d.png)
2. 비슷한 컴포넌트 여러개 만들기
    + Act.1 앞에서 만든 컴포넌트 형태 다시 살펴보기
        + 3장에서 작성한 App.js파일을 다시 열어 코드가 효율적인지 살펴본다.
    + Act.2 음식 데이터 만들기
        + 서버에서 넘어온 데이터를 저장할 수 있도록 foodILike라는 변수를 만든 다음 빈 배열을 할당한다.
            ```
               const foodIlike = [] 
            ```
        + 비효율적으로 작성된 Food 컴포넌트는 모두 삭제한다.
            ```
                function App() {
                  return (
                    <div >
                        <h1>Hello</h1>
                    </div>
                  );
                }
            ```
    + Act.3 서버에서 데이터가 넘어온다고 가정하고 다음과 같이 코드를 작성해 본다
        ```
              {
                  name: "chicken",
                  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw.namu.            la%2Fs%2F0757e0521734bb19004e9c35b3d64e26509edd9480b184cdc591364f7d336c01294622cc7c3ec3a1cf95caf9d177e1abb2039b315958a3989b168e6            37497fb54ac296cab8950f3f81720029a246ced799154d29b3619401c53acbcba57fb0b38&imgrefurl=https%3A%2F%2Fnamu.         wiki%2Fw%2F%25EC%25B9%2598%25ED%2582%25A8&tbnid=mj69TAhEXsVw8M&vet=12ahUKEwic7uOnooDzAhXGBKYKHdvcAAoQMygAegUIARDKAQ..i&               docid=O0MPjaXMA5iTmM&w=900&h=682&q=%EC%B9%98%ED%82%A8&ved=2ahUKEwic7uOnooDzAhXGBKYKHdvcAAoQMygAegUIARDKAQ"
                },
                {
                  name: "pizza",
                  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw.namu.            la%2Fs%2F8c2aebf04d4c6e0ae24ebf3b3789cb064f353da40f0a2916630ee33cc34742414ac8427b8765569e84d615a24cac7bc389ada2e5c60579541ea8b41            be9b22db6d0ce58f59fd1ac01912436c928605cd86974e360258a66ac0374662e70b0ae73&imgrefurl=https%3A%2F%2Fnamu.         wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&tbnid=Buf3KFfT8a1WsM&vet=12ahUKEwjU6qm8ooDzAhXBwYsBHWopBp0QMygAegUIARDNAQ..i&               docid=P_CrebuGKrkEtM&w=640&h=420&q=%ED%94%BC%EC%9E%90&ved=2ahUKEwjU6qm8ooDzAhXBwYsBHWopBp0QMygAegUIARDNAQ"
                },
                {
                  name: "hamburger",
                  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.              org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0b%2FRedDot_Burger.jpg%2F1200px-RedDot_Burger.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.         org%2Fwiki%2FHamburger&tbnid=VqOMCypKINfRNM&vet=12ahUKEwjZoKrHooDzAhUENqYKHRpkCmoQMygAegUIARDOAQ..i&docid=16_CswVDw3XSKM&w=1200&        h=800&itg=1&q=hamburger&ved=2ahUKEwjZoKrHooDzAhUENqYKHRpkCmoQMygAegUIARDOAQ"
                }
        ```
3. map()함수
    + map 함수 사용법 알아보기
        + Act.1 friends라는 배열을 선언하고 친구 이름을 입력한다.
            ```
                const friends = ["dal","mark","lynn","japan guy"]
            ```
        + 배열의 이름을 입력하여 결과를 확인해보자

            ![image](https://user-images.githubusercontent.com/79895970/133918307-1f7decc5-fed4-4dfd-ad1f-f72167a800c2.png)
        + Act.2 map 함수를 사용해보자
            + 아래 코드를 입력하고 결과를 확인
                ```
                    friends.map(current => { 
                      console.log(current);
                      return 0;
                    })
                ```

                    ![image](https://user-images.githubusercontent.com/79895970/133918374-a2c818de-4f60-48d6-bb6b-818253577174.png)
        + Act.3 map() 함수로 이름에 하트 추가한 배열 만들기.
            + 아래 코드를 입력하기
                ```
                    friends.map(function(friend) { 
                      return friend + "❤";
                    })
                ```
            + 결과를 확인해보자.

                ![image](https://user-images.githubusercontent.com/79895970/133918542-15d426ef-7b93-4c49-86e7-fcfd2887d5ef.png)
## [ 09월 08일 ]
 > + 리액트로 클론 코딩 시작 하기
### 학습내용
1. 슈퍼 빠른 create-react-app
    + 웹팩(webpack)은 자바스크립트 앱을 위한  정적 모듈들을 하나로 묶어주는 번들러이다.
    웹팩에서는 자바스크립트,스타일 시트, 이미지 등 모든것을 모듈로 본다.
    + 바벨(Bavel)은 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러이다.
    + React로 개발하는 경우 웹팩이나, 바벨은 신경 쓰지 않아도 된다.
    + creat-react-app은 react를 위한 보일러 플레이트<sup>[1](#Boilerplate)</sup>이며, 
    이 한줄을 입력해서 리액트 개발을 바로 시작할 수 있다.
    + 다시 말해 create-react-app은 별다른 개발환경 구축없이 리액트 개발을
     바로 시작할 수 있도록 프로젝트 구조 작업,설정 작업 등을 자동으로 진행해주는 도구이다.
     개발 준비는 create-react-app이 하고 개발자는 그냥 코딩만 하면 된다.
    + 이전에는 주로 Webpack과 Babel을 이용한 React개발 환경으 구축하고 개발을 했으며,
    지금도 많은 개발자들이 그렇게 하고 있다. 구글링을 해보면 최근까지도 개발 환경 구축과 관련한
    자료들이 많이 나와 있다.
2. create-react-app으로 리액트 앱 만들기
    + 아래 명령어를 입력
        ```
            npm create-react-app movie_app_2021
        ```
    + File > Open Folder 메뉴를 이용하여 프로젝트 폴더를 연다
    + README.md 안의 내용을 전부 지운후 새로 기입한다.
    + package.json파일에서 "test": "react-scripts-test","eject": "react-scripts-eject" 부분을 삭제해준다.
    + 아래 명령어로 리액트 앱을 실행해준다
        ```
            npm start
        ```
        + 종료를 하고 싶으면 Crtl+c를 누르면 된다.
    + 깃허브에 앱 업로드를 한다. node_modules폴더는 올리지 않기 때문에 .gitignore파일에 /node_modules 를 작성하여 node_modules를 제외 시켜준다.
    + 리액트 앱프로젝트에서 App.css,App.test.js,index.css,logo.svg,reportWebVital.js,setupTest.js,package-lock.json 파일을 삭제해준다. (프로젝트에서 불필요한 파일 정리)
    + index.js 파일 내부의 내용을 전부 지우고 아래 코드로 수정한다.
        ```
            import React from 'react';
            import ReactDOM from 'react-dom';
            import App from './App';

            ReactDOM.render(
                <App />,
              document.getElementById('root')
            );
        ```
    + App.js의 1&#126;2줄,7&#126;21줄을 전부 제거해준다.
3. 리액트 기초개념 알아보기
    + 리액트 동작원리
        + 리액트는 프로젝트 폴더에 있는 코드를 해석하여 해석된 결과물을 index.hrml에 삽입하여 보여주는 방식으로 동작한다.
    + App.js 수정해보기
        + App.js파일을 아래 코드와 같이 수정해본다
            ```
            import React from 'react';

            function App() {
              return (
                <div >
                  Hello React!!!!!
                </div>
              );
            }

            export default App;
            ```
        + fuction으로 정의 내린 곳을 컴포넌트(component)라고 한다.
        + 컴포넌트를 외부에서 사용 가능하게 하려면 필수적으로 "export default"를 이용하여 함수,변수,오브젝트,클래스등을 전달해주어야 한다.
        + 외부에서 컴포넌트를 가지고 오려면 "import A from B"를 이용하면 된다, 여기서 A는 함수,변수 부분이고 B는 A 함수가 적힌 파일의 위치이다.
        (경로지정은 상대경로로 지정해주고 폴더의 위치가 복잡해지면 절대경로를 이용하는등 상황에 맞게 이용하면 된다. )

<a name="Boilerplate">1</a>: 오래전 신문사에서 계속 반복적으로 사용되는 문구나 광고등을 부드러운 납 대신 강철로 찍기 시작한데서 유래 된 것으로, 최소한의 변경으로 여러곳에서 재사용이 가능한 코드를 보일러 플레이트 코드라고 부른다.



## [ 09월 01일 ]
학습내용
...