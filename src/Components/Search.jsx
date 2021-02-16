import React from 'react'

export default function Search({ searchHandler, searchValue }) {
  return (
    <>
      <form>
        <input type="text" placeholder="Search by name" value={searchValue} onChange={searchHandler} />
      </form>
    </>
  )
}
