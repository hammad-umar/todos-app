/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from 'react'

const Header: FC = (): JSX.Element => (
  <header className='header'>
    <h3>
      Created by{' '}
      <a href='https://github.com/hammad-umar' target='_blank'>
        Hammad Umar
      </a>
    </h3>
  </header>
)

export default Header
