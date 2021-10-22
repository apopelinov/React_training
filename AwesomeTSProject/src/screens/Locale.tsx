import React from 'react';

// the render prop
import { Translation } from 'react-i18next';

export default function Locale () {
  return (
    <Translation>
      {
        t => <h1>{t('Welcome to React')}</h1>
      }
    </Translation>
  )
}