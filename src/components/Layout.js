import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/members">Members</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/nca50">NCA 50</Link>
      </ul>
      {children}
    </div>
  )
}