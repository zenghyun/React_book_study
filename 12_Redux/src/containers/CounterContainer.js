import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainer = () => {
    const number = useSelector(state=> state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()),[dispatch]);
    return <Counter number={number}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    ></Counter>;
};

export default CounterContainer;
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);