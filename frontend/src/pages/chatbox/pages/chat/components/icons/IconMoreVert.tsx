interface Props {
  boxShadow?: boolean
}

const IconMoreVert = ({ boxShadow = true }: Props): JSX.Element => {
  return (
    <svg data-svg-bx={boxShadow} xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'><path d='M480 896q-33 0-56.5-23.5T400 816q0-33 23.5-56.5T480 736q33 0 56.5 23.5T560 816q0 33-23.5 56.5T480 896Zm0-240q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm0-240q-33 0-56.5-23.5T400 336q0-33 23.5-56.5T480 256q33 0 56.5 23.5T560 336q0 33-23.5 56.5T480 416Z' /></svg>
  )
}
export { IconMoreVert }
