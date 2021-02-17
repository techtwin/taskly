import React from 'react'

export default function Search({ friendsSearch, cardSearch, searchHandler, searchValue }) {
  return (
    <>
      <form>
        <input className={cardSearch || friendsSearch} type="text" placeholder="Search by name" value={searchValue} onChange={searchHandler} />
      </form>
    </>
  )
}
