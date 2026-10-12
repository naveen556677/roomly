import React from 'react'
import styles from './customInput.module.scss'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput: React.FC<CustomInputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`${styles.input || ''} ${className || ''}`.trim()}
      {...props}
    />
  )
}

export default CustomInput
