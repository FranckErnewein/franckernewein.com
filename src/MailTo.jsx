import React from 'react';
import atob from 'atob';

const email = atob('ZnJhbmNrLmVybmV3ZWluQGdtYWlsLmNvbQ==');

export default function MailTo(){
  return <a href={'mailto:' + email}>{email}</a>;
}
