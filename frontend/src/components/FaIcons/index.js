import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const FaUser1x = () => <FontAwesomeIcon icon={faUser} />
const FaUser2x = () => <FontAwesomeIcon icon={faUser} size="2x" />
const FaUser3x = () => <FontAwesomeIcon icon={faUser} size="3x" />
const FaUser4x = () => <FontAwesomeIcon icon={faUser} size="4x" />

export { FaUser1x, FaUser2x, FaUser3x, FaUser4x }
