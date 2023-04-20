interface Props {
  boxShadow?: boolean
}

const IconArrowBack = ({ boxShadow = true }: Props): JSX.Element => {
  return (
    <svg data-svg-bx={boxShadow} xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'><path d='M480 896 160 576l320-320 57 56-224 224h487v80H313l224 224-57 56Z' /></svg>
  )
}
export { IconArrowBack }
