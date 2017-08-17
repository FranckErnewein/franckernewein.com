import React from 'react';
import atob from 'atob';

const tel = atob('KzMzIDYgNTAgNzkgNDEgMzU=');

export default function Tel(){
  return <a href={'tel:' + tel}>{tel}</a>;
}
