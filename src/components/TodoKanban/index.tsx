import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'modules';
import {dateToString} from 'utils/common';
import TodoListColumn from './TodoListColumn'

interface TodoListProps {
  title: string;
}

const index = () => {
  const {todo} = useSelector((state: RootState) => state.todo);

  return (
    <Container>

      
    </Container>
  )
}


const Container = styled.div`
`


export default index;
