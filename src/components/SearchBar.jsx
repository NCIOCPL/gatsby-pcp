import React from "react"
import '../styles/SearchBar.scss'

export default function SearchBar() {
    return (
        <>
        <div>
			<form method="get" action="/search" role="search">
				<label class="usa-sr-only" for="nci-header-search__field">
					Search
				</label>

				<input id="nci-header-search__field" type="search" name="swKeyword"  data-autosuggest-collection="cgov"/>
				<button type="submit" aria-label="Search">
				    <span aria-hidden="true">Search</span>
				</button>
			</form>
		</div>
        </>
    )
}