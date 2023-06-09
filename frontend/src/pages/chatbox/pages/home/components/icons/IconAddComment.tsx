interface Props {
  boxShadow?: boolean
}

const IconAddComment = ({ boxShadow = true }: Props): JSX.Element => {
  return (
    <svg data-svg-bx={boxShadow} xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'>
      <path d='M450 656h60V526h130v-60H510V336h-60v130H320v60h130v130ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Z' />
    </svg>
  )
}

export { IconAddComment }
