import React from 'react'

export default function Search({ searchHandler, searchValue }) {
  return (
    <>
      <form>
        <input placeholder="search by name" value={searchValue} onChange={searchHandler} />
      </form>
    </>
  )
}
