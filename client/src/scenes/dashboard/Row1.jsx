import React from 'react'
import { useGetKPIsQuery } from '../../state/api';

export const Row1 = () => {
  const { data } = useGetKPIsQuery();
  console.log('data', data)

  return (
    <div>Row1</div>
  )
}

export default Row1