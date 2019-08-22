import React from 'react';
import { Button } from '@/components/shared/CssComponents';

export default (props) => {
  return (
    <Button color="primary">{props.text}</Button>
  )
}