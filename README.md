# 리액트를 다루는 기술 책을 이용한 study

## install
```
yarn create react-app 이름
```

## start
```
yarn start
```

## sass react에서 사용
```
yarn add node-sass
```

## 반응형 디자인을 쉽게 만들어 줌 
```
yarn add include-media
```

## 매우 편리한 색상 팔레트 만들어 줌 
```
yarn add open-color
```

## 조건부 스타일링을 편하게 할 수 있게 해줌
```
yarn add classnames
```

## 리액트에서 다양하고 예븐 아이콘을 사용할 수 있게 해줌
```
yarn add react-icons 

사이트: https://react-icons.netlify.com/
```

## react 성능 최적화

예를 들어 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게끔 해준다. 
그리고 만약 스크롤 되면 해당 스크롤 위치에서 보여 주어야 할 컴포넌트를 자연스럽게 렌더링해준다.
```
yarn add react-virtualized
```

## immer Library 
구조가 복잡한 객체도 매우 쉽고 짧은 코드를 사용하여 불변성을 유지하면서 업데이트 해줄 수 있다.
```
yarn add immer
```

## react-router-dom 설치
리액트 라우터는 클라이언트 사이드에서 이루어지는 라우팅을 아주 간단하게 구현할 수 있도록 해준다.
```
yarn add react-router-dom
```

## qs 
쿼리 문자열을 객체로 변환해주는 라이브러리
```
yarn add qs
```

## axios
axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트이다. 이 라이브러리의 특징은 HTTP 요청을 Proimise 기반으로 처리한다는 점이다. 

```
yarn add axios
```

## redux-actions 
redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있다.

## redux-thunk
비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어이다. 객체가 아닌 함수 형태의 액션을 디스패치할 수 있게 해준다. 
```
yarn add redux-thunk
```

## redux-saga 
redux-thunk 다음으로 가장 많이 사용되는 비동기 작업 관련 미들웨어 라이브러리이다. 특정 액션이 디스패치되었을 때 정해진 로직에 따라 다른 액션을 디스패치시키는 규칙을 작성하여 비동기 작업을 처리할 수 있게 해준다. 

redux-sage는 제너레이터 함수 문법을 기반으로 비동기 작업을 관리해준다. 
```
yarn add redux-saga
```