import React from 'react'

const Comments =async() => {
  await new Promise((resolve) => setTimeout(resolve, 9000));

  return (
    <div>Comments</div>
  )
}

export default Comments