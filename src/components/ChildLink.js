import React from 'react'
import { Link } from 'gatsby'

const isActive = className => ({ isPartiallyCurrent }) => ({
		className: className + (isPartiallyCurrent ? ' active' : ''),
})

const ChildLink = ({ className, children, ...props }) => (
		<Link getProps={isActive(className)} {...props}>
				{children}
		</Link>
)

export default ChildLink
